import { useState } from 'react';
import { supabase, isSupabaseConfigured, type EarlyAccessRegistration } from '../lib/supabase';

export interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  place: string;
  productInterested: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  place?: string;
  productInterested?: string;
  general?: string;
}

export interface SubmissionResult {
  success: boolean;
  isDuplicate?: boolean;
  referenceId: string;
  name: string;
  productInterested: string;
  createdAt: string;
  isLiveSupabase: boolean;
  message: string;
}

// Regex for international or Indian phone numbers: +91 XXXXX XXXXX or 10-15 digits
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
// Standard RFC 5322 compliant email regex
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function useEarlyAccess() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const validate = (values: FormValues): FormErrors => {
    const errs: FormErrors = {};

    if (!values.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (values.fullName.trim().length < 2) {
      errs.fullName = 'Name should be at least 2 characters long.';
    }

    if (!values.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (!PHONE_REGEX.test(values.phone.trim().replace(/\s+/g, ' '))) {
      errs.phone = 'Please enter a valid phone number (e.g. +91 98765 43210).';
    }

    if (!values.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!values.place.trim()) {
      errs.place = 'Please share your city or town.';
    }

    if (!values.productInterested.trim()) {
      errs.productInterested = 'Tell us which furniture or space solution interests you.';
    }

    return errs;
  };

  const saveLocally = (
    fullName: string,
    phone: string,
    email: string,
    place: string,
    productInterested: string,
    pendingMigration = false,
  ): boolean => {
    const LOCAL_STORAGE_KEY = 'nest_and_fold_registrations';
    const existingDataStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    const existingList: Array<{ email: string }> = existingDataStr ? JSON.parse(existingDataStr) : [];

    // Duplicate check
    const isDuplicate = existingList.some((item) => item.email.toLowerCase() === email);
    if (isDuplicate) {
      setErrors({
        email: "You're already on our early-access list. We'll keep you updated.",
      });
      setLoading(false);
      return false;
    }

    const generatedId = `NF-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const newRecord = {
      id: generatedId,
      full_name: fullName,
      phone,
      email,
      place,
      product_interested: productInterested,
      created_at: new Date().toISOString(),
    };

    existingList.push(newRecord);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingList));

    setResult({
      success: true,
      referenceId: generatedId,
      name: fullName,
      productInterested,
      createdAt: newRecord.created_at,
      isLiveSupabase: !pendingMigration && isSupabaseConfigured(),
      message: 'Thank you for discovering Nest & Fold. We’ll be in touch when early access opens.',
    });
    setLoading(false);
    return true;
  };

  const submit = async (values: FormValues, prefilledInterest?: string): Promise<boolean> => {
    // Prevent multiple submissions while already working
    if (loading) return false;

    const currentValues = {
      ...values,
      productInterested: values.productInterested || prefilledInterest || '',
    };

    const validationErrors = validate(currentValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setErrors({});
    setLoading(true);

    const normalizedEmail = currentValues.email.trim().toLowerCase();
    const normalizedPhone = currentValues.phone.trim();
    const normalizedName = currentValues.fullName.trim();
    const normalizedPlace = currentValues.place.trim();
    const normalizedInterest = currentValues.productInterested.trim();

    try {
      const liveConfigured = isSupabaseConfigured() && supabase !== null;

      if (liveConfigured) {
        // First check or attempt direct insert into Supabase
        const payload: EarlyAccessRegistration = {
          full_name: normalizedName,
          phone: normalizedPhone,
          email: normalizedEmail,
          place: normalizedPlace,
          product_interested: normalizedInterest,
        };

        const { data, error } = await supabase!
          .from('early_access_registrations')
          .insert([payload])
          .select('id, created_at')
          .single();

        if (error) {
          // Check for unique constraint violation (duplicate email)
          // PostgreSQL error code 23505 is unique_violation
          if (
            error.code === '23505' ||
            error.message.toLowerCase().includes('unique') ||
            error.message.toLowerCase().includes('duplicate')
          ) {
            setErrors({
              email: "You're already on our early-access list. We'll keep you updated.",
            });
            setLoading(false);
            return false;
          }

          // If the table does not exist yet in Supabase (e.g. migration pending in SQL editor)
          // gracefully fallback to local demo persistence
          if (
            error.code === 'PGRST205' ||
            error.code === '42P01' ||
            error.message?.toLowerCase().includes('relation') ||
            error.message?.toLowerCase().includes('does not exist') ||
            error.message?.toLowerCase().includes('not find')
          ) {
            console.warn('Supabase table early_access_registrations not found yet. Falling back to local storage preview.');
            return saveLocally(normalizedName, normalizedPhone, normalizedEmail, normalizedPlace, normalizedInterest, true);
          }

          console.error('Supabase error inserting early access registration:', error);
          setErrors({
            general: 'We were unable to complete your registration. Please try again in a moment.',
          });
          setLoading(false);
          return false;
        }

        const refId = data?.id ? `NF-${data.id.substring(0, 8).toUpperCase()}` : `NF-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

        setResult({
          success: true,
          referenceId: refId,
          name: normalizedName,
          productInterested: normalizedInterest,
          createdAt: data?.created_at || new Date().toISOString(),
          isLiveSupabase: true,
          message: 'Thank you for discovering Nest & Fold. We’ll be in touch when early access opens.',
        });
        setLoading(false);
        return true;
      } else {
        // Fallback / local demo mode when Supabase credentials are yet to be entered in .env
        await new Promise((resolve) => setTimeout(resolve, 400));
        return saveLocally(normalizedName, normalizedPhone, normalizedEmail, normalizedPlace, normalizedInterest);
      }
    } catch (err: unknown) {
      console.error('Unexpected error handling early access registration:', err);
      setErrors({
        general: 'An unexpected connection error occurred. Please check your network and try again.',
      });
      setLoading(false);
      return false;
    }
  };

  const reset = () => {
    setResult(null);
    setErrors({});
    setLoading(false);
  };

  return {
    loading,
    errors,
    result,
    submit,
    reset,
    isSupabaseLive: isSupabaseConfigured(),
  };
}
