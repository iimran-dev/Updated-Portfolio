-- ==============================================================================
-- Supabase Schema Migration: Contact Submissions & Email Logs
-- Target: Supabase PostgreSQL
-- ==============================================================================

-- 1. Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    status VARCHAR(30) NOT NULL DEFAULT 'received', -- 'received', 'delivered', 'email_failed'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for searching/sorting submissions by creation date
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
    ON public.contact_submissions (created_at DESC);

-- 2. Create email_logs table
CREATE TABLE IF NOT EXISTS public.email_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID REFERENCES public.contact_submissions(id) ON DELETE SET NULL,
    recipient VARCHAR(255) NOT NULL,
    sender VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'sent', 'failed'
    provider_message_id VARCHAR(100),
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for querying email logs by submission or status
CREATE INDEX IF NOT EXISTS idx_email_logs_submission_id 
    ON public.email_logs (submission_id);

CREATE INDEX IF NOT EXISTS idx_email_logs_created_at 
    ON public.email_logs (created_at DESC);

-- 3. Configure Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

-- Note: The Vercel API backend interacts using the SUPABASE_SERVICE_ROLE_KEY,
-- which bypasses RLS policies securely on the server side.
-- For direct anon clients, public read/update/delete is blocked to protect visitor privacy.

-- Policy: Restrict direct SELECT to authenticated administrators or service role
CREATE POLICY "Disallow public select on contact_submissions" 
    ON public.contact_submissions
    FOR SELECT 
    USING (false);

-- Policy: Restrict direct UPDATE on contact_submissions
CREATE POLICY "Disallow public update on contact_submissions" 
    ON public.contact_submissions
    FOR UPDATE 
    USING (false);

-- Policy: Restrict direct DELETE on contact_submissions
CREATE POLICY "Disallow public delete on contact_submissions" 
    ON public.contact_submissions
    FOR DELETE 
    USING (false);

-- Policy: Disallow direct public operations on email_logs
CREATE POLICY "Disallow public access on email_logs" 
    ON public.email_logs
    FOR ALL 
    USING (false);
