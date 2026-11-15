import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useEarlyAccess, type FormValues } from '../hooks/useEarlyAccess';
import { CheckCircle2, AlertCircle, ArrowLeft, Loader2, Sparkles, Database, Copy, Check, Share2 } from 'lucide-react';

interface EarlyAccessFormProps {
  initialProductInterest?: string;
  onSuccess?: () => void;
}

export const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({
  initialProductInterest = '',
}) => {
  const [searchParams] = useSearchParams();
  const queryProduct = searchParams.get('product') || '';
  const [copied, setCopied] = useState(false);

  const { loading, errors, result, submit, reset, isSupabaseLive } = useEarlyAccess();

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    place: '',
    productInterested: initialProductInterest || queryProduct || '',
    howDidYouFindUs: '',
  });

  // Keep state updated if query param changes
  useEffect(() => {
    if (queryProduct && !values.productInterested) {
      setValues((prev) => ({ ...prev, productInterested: queryProduct }));
    }
  }, [queryProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const shareUrl = `${window.location.origin}/early-access?ref=${result.referenceId}`;

    return (
      <div className="bg-[#FAF7F0] border border-[#5C3D2E]/15 p-8 sm:p-12 rounded-sm shadow-md animate-fadeIn">
        <div className="w-12 h-12 bg-[#7A9E7E]/15 rounded-full flex items-center justify-center text-[#7A9E7E] mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-[#7A9E7E] block mb-2">
          Registration Confirmed
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1208] font-light leading-tight">
          You're on the list.
        </h2>

        <p className="font-sans text-sm text-[#2A2420]/80 mt-3 leading-relaxed">
          {result.message}
        </p>

        {/* Queue Position Card */}
        <div className="my-6 bg-[#1A1208] text-[#F7F0E3] p-6 rounded-sm flex items-center justify-between border border-[#1A1208]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] block font-medium mb-1">
              Your Waitlist Position
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#F7F0E3] font-light">
              #{result.queuePosition || 248}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#7A9E7E] font-medium block">Priority Access Confirmed</span>
            <span className="text-[11px] text-[#F7F0E3]/60 mt-0.5 block">Season 01 · 75 units</span>
          </div>
        </div>

        {/* What Happens Next Card */}
        <div className="mb-6 p-5 bg-[#F5EFE4] border border-[#5C3D2E]/10 rounded-sm space-y-3 text-xs font-sans">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#5C3D2E]">
            What Happens Next
          </h4>
          <ul className="space-y-2 text-[#2A2420]/80 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#D4541A] font-bold">1.</span>
              <span><strong>24hr Early Access:</strong> You'll receive a private checkout link 24 hours before public release.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4541A] font-bold">2.</span>
              <span><strong>48hr Window:</strong> Your reserved drop spot is held for 48 hours once notified.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4541A] font-bold">3.</span>
              <span><strong>Direct Maker Delivery:</strong> Handcrafted in Kerala and shipped direct to your apartment.</span>
            </li>
          </ul>
        </div>

        {/* Share to unlock: Move up 10 spots */}
        <div className="mb-8 p-6 bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1208] flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-[#D4541A]" />
              Share to Unlock — Move Up 10 Spots
            </span>
            <span className="text-[10px] font-mono text-[#D4541A] uppercase tracking-wider font-medium">Perk</span>
          </div>
          <p className="text-xs text-[#1A1208]/80 leading-relaxed">
            Share your waitlist link with friends in compact apartments. When they register, your queue position jumps up 10 spots.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="text-xs bg-white px-3.5 py-2.5 border border-[#1A1208]/15 rounded-sm w-full font-mono text-[#1A1208]/85 outline-none select-all"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
              className="px-4 py-2.5 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.16em] rounded-sm shrink-0 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Registration Details Summary */}
        <div className="my-6 p-5 bg-[#F5EFE4] border border-[#5C3D2E]/10 rounded-sm space-y-3 text-xs font-sans">
          <div className="flex justify-between items-center border-b border-[#5C3D2E]/10 pb-2">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Reference ID</span>
            <span className="font-mono font-medium text-[#5C3D2E] text-xs bg-white/70 px-2 py-0.5 rounded">
              {result.referenceId}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-[#5C3D2E]/10 pb-2">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Registered Name</span>
            <span className="font-medium text-[#2A2420]">{result.name}</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Product / Space Interest</span>
            <span className="font-medium text-[#5C3D2E] italic font-serif text-base">
              "{result.productInterested}"
            </span>
          </div>

          <div className="flex justify-between items-center pt-1 text-[10px] text-[#2A2420]/50">
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1208] hover:bg-[#2A2420] text-[#F7F0E3] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all"
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
                howDidYouFindUs: '',
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
          <Sparkles className="w-3.5 h-3.5 text-[#D4541A]" />
          Season 01 · Limited Drop
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

      {/* Brand Book Avatar Stack */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex -space-x-2 overflow-hidden">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1208] text-[11px] font-medium text-[#C8A96E] ring-2 ring-[#FAF7F0]">A</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7A9E7E] text-[11px] font-medium text-white ring-2 ring-[#FAF7F0]">K</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A96E] text-[11px] font-medium text-[#1A1208] ring-2 ring-[#FAF7F0]">R</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#B5714A] text-[11px] font-medium text-white ring-2 ring-[#FAF7F0]">M</span>
        </div>
        <span className="text-xs font-sans text-[#1A1208]/80 font-medium">
          <strong className="text-[#1A1208] font-semibold">247 people</strong> already on the list
        </span>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1208] font-light leading-snug">
          Season 01 drops soon.
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 mt-2 leading-relaxed">
          75 pieces. Waitlist members get 24-hour early access before anyone else.
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
            1. Full Name <span className="text-[#D4541A]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            disabled={loading}
            placeholder="Your full name"
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
            2. Phone Number <span className="text-[#D4541A]">*</span>
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
            3. Email Address <span className="text-[#D4541A]">*</span>
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

        {/* 4. Place / City */}
        <div>
          <label
            htmlFor="place"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            4. City / Town <span className="text-[#D4541A]">*</span>
          </label>
          <input
            id="place"
            name="place"
            type="text"
            value={values.place}
            onChange={handleChange}
            disabled={loading}
            placeholder="City / Town (e.g. Kochi, Bengaluru, Mumbai, Delhi)"
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

        {/* 5. Product Interested In / Space Problem */}
        <div>
          <label
            htmlFor="productInterested"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            5. What's your space problem? / Product Interested In <span className="text-[#D4541A]">*</span>
          </label>
          <input
            id="productInterested"
            name="productInterested"
            type="text"
            value={values.productInterested}
            onChange={handleChange}
            disabled={loading}
            placeholder="Tell us what furniture or space challenge you have..."
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
              Example: Living in 450 sq ft flat; need a foldable desk, Vazha side table, or compact lounge bed.
            </span>
          )}
        </div>

        {/* 6. How did you find us? (Brand Book Optional Field) */}
        <div>
          <label
            htmlFor="howDidYouFindUs"
            className="block text-xs uppercase tracking-[0.18em] font-medium text-[#2A2420]/90 mb-1.5"
          >
            6. How did you find us? <span className="text-[#2A2420]/40 font-normal lowercase">(optional)</span>
          </label>
          <select
            id="howDidYouFindUs"
            name="howDidYouFindUs"
            value={values.howDidYouFindUs || ''}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-4 py-3 bg-[#F5EFE4] text-[#2A2420] text-sm border border-[#5C3D2E]/20 rounded-sm outline-none transition-colors focus:bg-white focus:border-[#5C3D2E]"
          >
            <option value="">Select an option</option>
            <option value="Instagram">Instagram / Creator recommendation</option>
            <option value="Architectural Digest">Architectural Digest</option>
            <option value="Elle Decor">Elle Decor</option>
            <option value="Design Pataki">Design Pataki</option>
            <option value="Mint Lounge">Mint Lounge</option>
            <option value="Friend">Friend / Word of mouth</option>
            <option value="Search">Google / Search engine</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Form CTA & Notes */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full inline-flex items-center justify-center py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 shadow-sm ${
              loading
                ? 'bg-[#D4541A]/70 cursor-not-allowed text-white'
                : 'bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Securing Spot...</span>
              </span>
            ) : (
              <span>Join the Waitlist</span>
            )}
          </button>

          <p className="text-center font-sans text-xs text-[#5C3D2E] font-medium mt-3">
            75 pieces. No restock once Season 01 closes.
          </p>

          <p className="text-center font-sans text-[11px] text-[#2A2420]/50 mt-1 leading-relaxed">
            Your details will only be used for Nest &amp; Fold drop notifications and early access.
          </p>
        </div>
      </form>
    </div>
  );
};
