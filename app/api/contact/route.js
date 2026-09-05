import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting store (sliding window per IP)
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
    // 1. Basic Rate Limiting
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

    // Email regex validation
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

    // 3. Initialize Resend SDK
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact API Error] RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        { error: "Contact service is currently unconfigured. Please email directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const contactEmail = process.env.CONTACT_EMAIL || "info.imran.ma@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";

    // 4. Send Email via Resend
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      reply_to: trimmedEmail,
      subject: `New Portfolio Contact — ${trimmedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nProject Details:\n${trimmedMessage}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #111; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 24px; rounded: 12px;">
          <h2 style="color: #6d28d9; margin-top: 0;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${trimmedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="margin-bottom: 8px;">Project Details:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 8px;">${trimmedMessage}</p>
        </div>
      `,
    });

    if (sendError) {
      console.error("[Resend API Error]", sendError);
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
