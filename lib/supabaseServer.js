import { createClient } from "@supabase/supabase-js";

let cachedClient = null;

/**
 * Returns a server-side Supabase client.
 * Prioritizes the SUPABASE_SERVICE_ROLE_KEY for privileged server-side operations.
 * Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 */
export function getSupabaseServerClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  cachedClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return cachedClient;
}

/**
 * Persists a contact form submission to Supabase PostgreSQL.
 */
export async function saveContactSubmission({ name, email, message, ipAddress }) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.warn(
      "[Supabase] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not configured."
    );
    return { data: null, error: new Error("Database configuration is missing.") };
  }

  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          message,
          ip_address: ipAddress || null,
          status: "received",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("[Supabase Submission Error]", error.message);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err) {
    console.error("[Supabase Submission Exception]", err);
    return { data: null, error: err };
  }
}

/**
 * Updates submission status and records an entry in email_logs.
 */
export async function logEmailOutcome({
  submissionId,
  recipient,
  sender,
  subject,
  status,
  providerMessageId = null,
  errorMessage = null,
}) {
  const supabase = getSupabaseServerClient();
  if (!supabase) return;

  try {
    // 1. Insert into email_logs
    await supabase.from("email_logs").insert([
      {
        submission_id: submissionId || null,
        recipient,
        sender,
        subject,
        status, // 'sent' or 'failed'
        provider_message_id: providerMessageId,
        error_message: errorMessage,
      },
    ]);

    // 2. Update contact_submissions status if submissionId is provided
    if (submissionId) {
      const submissionStatus = status === "sent" ? "delivered" : "email_failed";
      await supabase
        .from("contact_submissions")
        .update({
          status: submissionStatus,
          updated_at: new Date().toISOString(),
        })
        .eq("id", submissionId);
    }
  } catch (err) {
    console.error("[Supabase Email Log Exception]", err);
  }
}
