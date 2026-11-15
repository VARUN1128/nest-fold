-- ==============================================================================
-- Migration: 001_create_early_access_registrations.sql
-- Table: early_access_registrations
-- Brand: Nest & Fold (Season 01: The Compressed City)
-- ==============================================================================

-- 1. Ensure pgcrypto or uuid-ossp extension is enabled for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Create the early_access_registrations table
CREATE TABLE IF NOT EXISTS public.early_access_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    place TEXT NOT NULL,
    product_interested TEXT NOT NULL,
    how_did_you_find_us TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT email_format_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- 3. Case-insensitive unique index to guarantee one registration per email address
CREATE UNIQUE INDEX IF NOT EXISTS early_access_registrations_lower_email_idx 
    ON public.early_access_registrations (LOWER(TRIM(email)));

-- 4. Performance indexes for administrative filtering and sorting
CREATE INDEX IF NOT EXISTS early_access_registrations_created_at_idx 
    ON public.early_access_registrations (created_at DESC);

CREATE INDEX IF NOT EXISTS early_access_registrations_place_idx 
    ON public.early_access_registrations (LOWER(TRIM(place)));

CREATE INDEX IF NOT EXISTS early_access_registrations_product_interested_idx 
    ON public.early_access_registrations USING gin (to_tsvector('english', product_interested));

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.early_access_registrations ENABLE ROW LEVEL SECURITY;

-- 6. Define RLS Policies
-- Policy 1: Anonymous and authenticated visitors can submit (INSERT) an early-access request
DROP POLICY IF EXISTS "Allow anonymous insert to early_access_registrations" ON public.early_access_registrations;
CREATE POLICY "Allow anonymous insert to early_access_registrations"
    ON public.early_access_registrations
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        length(trim(full_name)) > 0 AND
        length(trim(phone)) > 0 AND
        length(trim(email)) > 0 AND
        length(trim(place)) > 0 AND
        length(trim(product_interested)) > 0
    );

-- Policy 2: Allow reading registrations for the administrative dashboard (/admin)
DROP POLICY IF EXISTS "Allow admin read early_access_registrations" ON public.early_access_registrations;
DROP POLICY IF EXISTS "Allow read early_access_registrations" ON public.early_access_registrations;
CREATE POLICY "Allow read early_access_registrations"
    ON public.early_access_registrations
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Policy 3: No public UPDATE or DELETE operations permitted
-- (Omitted by default under RLS; explicit deny ensured)

-- 7. Grant minimal table privileges
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.early_access_registrations TO anon, authenticated;
GRANT SELECT ON public.early_access_registrations TO anon, authenticated;

-- Comment describing purpose
COMMENT ON TABLE public.early_access_registrations IS 'Pre-launch waitlist & early-access registrations for Nest & Fold Season 01.';
