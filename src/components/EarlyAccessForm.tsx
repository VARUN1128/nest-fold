import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useEarlyAccess, type FormValues } from '../hooks/useEarlyAccess';
import { CheckCircle2, AlertCircle, ArrowLeft, Loader2, Sparkles, Database } from 'lucide-react';

interface EarlyAccessFormProps {
  initialProductInterest?: string;
  onSuccess?: () => void;
}

export const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({
  initialProductInterest = '',
}) => {
  const [searchParams] = useSearchParams();
  const queryProduct = searchParams.get('product') || '';

  const { loading, errors, result, submit, reset, isSupabaseLive } = useEarlyAccess();

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    place: '',
    productInterested: initialProductInterest || queryProduct || '',
  });

  // Keep state updated if query param changes
  useEffect(() => {
    if (queryProduct && !values.productInterested) {
      setValues((prev) => ({ ...prev, productInterested: queryProduct }));
    }
  }, [queryProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(values);
  };

  // SUCCESS CONFIRMATION SCREEN
  if (result && result.success) {
    return (
      <div className="bg-[#FAF7F0] border border-[#5C3D2E]/15 p-8 sm:p-12 rounded-sm shadow-md animate-fadeIn">
        <div className="w-12 h-12 bg-[#7A9E7E]/15 rounded-full flex items-center justify-center text-[#7A9E7E] mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-[#7A9E7E] block mb-2">
          Registration Confirmed
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#5C3D2E] font-light leading-tight">
          You're on the list.
        </h2>

        <p className="font-sans text-sm text-[#2A2420]/80 mt-3 leading-relaxed">
          {result.message}
        </p>

        {/* Registration Details Card */}
        <div className="my-8 p-6 bg-[#F5EFE4] border border-[#5C3D2E]/10 rounded-sm space-y-3.5 text-xs font-sans">
          <div className="flex justify-between items-center border-b border-[#5C3D2E]/10 pb-2.5">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Reference ID</span>
            <span className="font-mono font-medium text-[#5C3D2E] text-sm bg-white/60 px-2 py-0.5 rounded">
              {result.referenceId}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-[#5C3D2E]/10 pb-2.5">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Registered Name</span>
            <span className="font-medium text-[#2A2420]">{result.name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Product / Space Interest</span>
            <span className="font-medium text-[#5C3D2E] italic font-serif text-base">
              "{result.productInterested}"
            </span>
          </div>

          <div className="flex justify-between items-center pt-2 text-[10px] text-[#2A2420]/50">
            <span>Database Sync Status</span>
            <span className="flex items-center gap-1 text-[#7A9E7E] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A9E7E] animate-pulse"></span>
              {result.isLiveSupabase ? 'Supabase Live Connected' : 'Local Verification Validated'}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C3D2E] hover:bg-[#472E22] text-[#F5EFE4] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              reset();
              setValues({
                fullName: '',
                phone: '',
                email: '',
                place: '',
                productInterested: '',
              });
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 border border-[#5C3D2E]/20 text-[#5C3D2E] hover:bg-[#F5EFE4] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors"
          >
            Register Another Space
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE REGISTRATION FORM
  return (
    <div className="bg-[#FAF7F0] border border-[#5C3D2E]/10 p-6 sm:p-10 rounded-sm shadow-sm relative">
      {/* Backend connection pill */}
      <div className="mb-6 flex items-center justify-between pb-4 border-b border-[#5C3D2E]/10">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#7A9E7E]" />
          Season 01 Early Access
        </span>
        <span
          className={`text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
            isSupabaseLive
              ? 'bg-[#7A9E7E]/15 text-[#59755D] font-medium'
              : 'bg-[#C8A96E]/20 text-[#5C3D2E]'
          }`}
          title={
            isSupabaseLive
              ? 'Connected to live Supabase backend'
              : 'Supabase keys can be supplied via .env file'
          }
        >
          <Database className="w-3 h-3" />
          {isSupabaseLive ? 'Supabase Live' : 'Ready for Supabase .env'}
        </span>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#5C3D2E] font-light leading-snug">
          Get Early Access
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 mt-2.5 leading-relaxed">
          Tell us a little about yourself and what you're looking for. We'll keep you informed about our upcoming collection.
        </p>
      </div>

      {errors.general && (
        <div className="mb-6 p-4 bg-red-50/80 border border-red-200 text-red-800 text-xs rounded-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* 1. Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            1. Full Name <span className="text-[#B5714A]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            disabled={loading}
            placeholder="Your name"
            className={`w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border rounded-sm outline-none transition-colors placeholder:text-[#2A2420]/40 focus:bg-white ${
              errors.fullName
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#5C3D2E]/20 focus:border-[#5C3D2E]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-700 font-sans flex items-center gap-1">
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* 2. Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            2. Phone Number <span className="text-[#B5714A]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            disabled={loading}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border rounded-sm outline-none transition-colors placeholder:text-[#2A2420]/40 focus:bg-white ${
              errors.phone
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#5C3D2E]/20 focus:border-[#5C3D2E]'
            }`}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-xs text-red-700 font-sans">
              {errors.phone}
            </p>
          ) : (
            <span className="block mt-1 text-[11px] text-[#2A2420]/50">
              Indian (+91) &amp; international telephone numbers accepted
            </span>
          )}
        </div>

        {/* 3. Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            3. Email Address <span className="text-[#B5714A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            disabled={loading}
            placeholder="name@example.com"
            className={`w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border rounded-sm outline-none transition-colors placeholder:text-[#2A2420]/40 focus:bg-white ${
              errors.email
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#5C3D2E]/20 focus:border-[#5C3D2E]'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-700 font-sans font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* 4. Place */}
        <div>
          <label
            htmlFor="place"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            4. Place / City <span className="text-[#B5714A]">*</span>
          </label>
          <input
            id="place"
            name="place"
            type="text"
            value={values.place}
            onChange={handleChange}
            disabled={loading}
            placeholder="City / Town (e.g. Kochi, Bengaluru, Mumbai, Chennai)"
            className={`w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border rounded-sm outline-none transition-colors placeholder:text-[#2A2420]/40 focus:bg-white ${
              errors.place
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#5C3D2E]/20 focus:border-[#5C3D2E]'
            }`}
          />
          {errors.place && (
            <p className="mt-1.5 text-xs text-red-700 font-sans">
              {errors.place}
            </p>
          )}
        </div>

        {/* 5. Product Interested In (Free-text input, not a dropdown) */}
        <div>
          <label
            htmlFor="productInterested"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            5. Product Interested In <span className="text-[#B5714A]">*</span>
          </label>
          <input
            id="productInterested"
            name="productInterested"
            type="text"
            value={values.productInterested}
            onChange={handleChange}
            disabled={loading}
            placeholder="Tell us which furniture you're interested in..."
            className={`w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border rounded-sm outline-none transition-colors placeholder:text-[#2A2420]/40 focus:bg-white ${
              errors.productInterested
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#5C3D2E]/20 focus:border-[#5C3D2E]'
            }`}
          />
          {errors.productInterested ? (
            <p className="mt-1.5 text-xs text-red-700 font-sans">
              {errors.productInterested}
            </p>
          ) : (
            <span className="block mt-1 text-[11px] text-[#2A2420]/50 italic">
              Example: Foldable study table, rattan side table, convertible sofa bed, compact storage furniture
            </span>
          )}
        </div>

        {/* Form CTA & Notes */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full inline-flex items-center justify-center py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 shadow-sm ${
              loading
                ? 'bg-[#7A9E7E]/70 cursor-not-allowed text-white'
                : 'bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Securing Early Access...</span>
              </span>
            ) : (
              <span>Get Early Access</span>
            )}
          </button>

          <p className="text-center font-sans text-xs text-[#5C3D2E] font-medium mt-3">
            Be the first to know when our collection drops.
          </p>

          <p className="text-center font-sans text-[11px] text-[#2A2420]/50 mt-1 leading-relaxed">
            Your details will only be used for Nest &amp; Fold updates and early-access communication.
          </p>
        </div>
      </form>
    </div>
  );
};
