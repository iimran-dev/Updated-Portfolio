-- Migration: 20260908000000_init_contact_schema.sql
-- Create contact_submissions and email_logs tables with RLS

CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    status VARCHAR(30) NOT NULL DEFAULT 'received',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
    ON public.contact_submissions (created_at DESC);

CREATE TABLE IF NOT EXISTS public.email_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID REFERENCES public.contact_submissions(id) ON DELETE SET NULL,
    recipient VARCHAR(255) NOT NULL,
    sender VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    provider_message_id VARCHAR(100),
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_email_logs_submission_id 
    ON public.email_logs (submission_id);

CREATE INDEX IF NOT EXISTS idx_email_logs_created_at 
    ON public.email_logs (created_at DESC);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Disallow public select on contact_submissions" 
    ON public.contact_submissions FOR SELECT USING (false);

CREATE POLICY "Disallow public update on contact_submissions" 
    ON public.contact_submissions FOR UPDATE USING (false);

CREATE POLICY "Disallow public delete on contact_submissions" 
    ON public.contact_submissions FOR DELETE USING (false);

CREATE POLICY "Disallow public access on email_logs" 
    ON public.email_logs FOR ALL USING (false);
