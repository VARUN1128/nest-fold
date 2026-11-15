import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface EarlyAccessRegistration {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  place: string;
  product_interested: string;
  how_did_you_find_us?: string;
  created_at?: string;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('http') &&
    !supabaseUrl.includes('your-project-id') &&
    supabaseAnonKey.length > 20
  );
};

// Create the Supabase client safely
export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;
