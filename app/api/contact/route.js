import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  saveContactSubmission,
  logEmailOutcome,
  getSupabaseServerClient,
} from "@/lib/supabaseServer";

// Sliding window in-memory rate limiter per IP
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(clientIp) {
  const now = Date.now();
  const userRecord = rateLimitMap.get(clientIp);

  if (!userRecord) {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
    return false;
  }

  if (now - userRecord.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
    return false;
  }

  if (userRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  userRecord.count += 1;
  return false;
}

export async function POST(req) {
  try {
    // 1. Rate Limiting Check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload in request." },
        { status: 400 }
      );
    }

    const { name, email, message } = body || {};

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    if (!trimmedEmail) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedMessage) {
      return NextResponse.json(
        { error: "Please enter project details or message." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must not exceed 5,000 characters." },
        { status: 400 }
      );
    }

    // 3. Database Persistence (Supabase PostgreSQL)
    let submissionRecord = null;
    const isSupabaseConfigured = Boolean(getSupabaseServerClient());

    if (isSupabaseConfigured) {
      const { data, error: dbError } = await saveContactSubmission({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        ipAddress: clientIp,
      });

      if (dbError) {
        console.error("[Contact API] Supabase persistence failure:", dbError);
        return NextResponse.json(
          { error: "Unable to process your request at this time. Please try again later." },
          { status: 500 }
        );
      }
      submissionRecord = data;
    } else {
      console.warn(
        "[Contact API] Supabase credentials not found. Proceeding with email-only fallback."
      );
    }

    // 4. Send Notification Email (Resend)
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail =
      process.env.EMAIL_TO || process.env.CONTACT_EMAIL || "info.imran.ma@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      process.env.EMAIL_FROM ||
      "Portfolio Contact <onboarding@resend.dev>";
    const emailSubject = `New Portfolio Contact — ${trimmedName}`;

    if (!apiKey) {
      console.error("[Contact API Error] RESEND_API_KEY environment variable is missing.");
      if (submissionRecord) {
        // Submission was safely stored in database even though email sending cannot occur
        await logEmailOutcome({
          submissionId: submissionRecord.id,
          recipient: contactEmail,
          sender: fromEmail,
          subject: emailSubject,
          status: "failed",
          errorMessage: "RESEND_API_KEY missing from environment configuration.",
        });

        return NextResponse.json(
          {
            success: true,
            message:
              "Your message has been received and saved! We will review it shortly.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: "Contact service is currently unconfigured. Please email directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    let emailSentSuccessfully = false;
    let providerId = null;
    let emailErrorMessage = null;

    try {
      const { data: resendData, error: sendError } = await resend.emails.send({
        from: fromEmail,
        to: [contactEmail],
        reply_to: trimmedEmail,
        subject: emailSubject,
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nProject Details:\n${trimmedMessage}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #111; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
            <h2 style="color: #6d28d9; margin-top: 0;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${trimmedName}</p>
            <p><strong>Email:</strong> <a href="mailto:${trimmedEmail}" style="color: #6d28d9;">${trimmedEmail}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="margin-bottom: 8px; color: #333;">Project Details:</h3>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #f0f0f0;">${trimmedMessage}</p>
            <p style="font-size: 12px; color: #888; margin-top: 24px;">Sent securely from Portfolio Web App via Resend & Supabase.</p>
          </div>
        `,
      });

      if (sendError) {
        emailErrorMessage = sendError.message || "Failed to dispatch email via Resend.";
        console.error("[Contact API] Resend email dispatch error:", sendError);
      } else {
        emailSentSuccessfully = true;
        providerId = resendData?.id || null;
      }
    } catch (sendEx) {
      emailErrorMessage = sendEx.message || "Exception during Resend dispatch.";
      console.error("[Contact API] Resend exception:", sendEx);
    }

    // 5. Log Email Outcome in Supabase
    if (isSupabaseConfigured && submissionRecord) {
      await logEmailOutcome({
        submissionId: submissionRecord.id,
        recipient: contactEmail,
        sender: fromEmail,
        subject: emailSubject,
        status: emailSentSuccessfully ? "sent" : "failed",
        providerMessageId: providerId,
        errorMessage: emailErrorMessage,
      });
    }

    // 6. Return Response
    if (!emailSentSuccessfully) {
      // If DB succeeded but email failed, ensure submission is not lost and return appropriate response
      if (submissionRecord) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Your message has been received and saved! We will review it shortly.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: "Failed to send email. Please try again or email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Route Exception]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
