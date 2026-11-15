import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface EarlyAccessCTAProps {
  variant?: 'walnut' | 'cream';
  className?: string;
}

export const EarlyAccessCTA: React.FC<EarlyAccessCTAProps> = ({
  variant = 'walnut',
  className = '',
}) => {
  const isDark = variant === 'walnut';

  return (
    <section
      className={`relative py-24 sm:py-32 overflow-hidden ${
        isDark ? 'bg-[#1A1208] text-[#F7F0E3]' : 'bg-[#FAF7F0] text-[#1A1208] border-y border-[#1A1208]/10'
      } ${className}`}
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C8A96E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-[#C8A96E]/15 border border-[#C8A96E]/30 text-[#C8A96E] text-[11px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#D4541A]" />
          <span>Season 01 · The Compressed City</span>
        </div>

        {/* Headline */}
        <h2
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-3xl ${
            isDark ? 'text-[#F7F0E3]' : 'text-[#1A1208]'
          }`}
        >
          75 pieces. One considered collection.
        </h2>

        {/* Supporting description */}
        <p
          className={`font-sans text-sm sm:text-base max-w-xl mt-5 leading-relaxed ${
            isDark ? 'text-[#F7F0E3]/80' : 'text-[#1A1208]/75'
          }`}
        >
          Season 01 is a limited release of furniture designed for compact city living. Built in Kerala with multi-generational woodworkers and delivered directly to your apartment door.
        </p>

        {/* Drop status indicator */}
        <div className="my-8 flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C8A96E] mb-1 font-medium">
              Launch Phase
            </span>
            <span className="font-serif italic text-2xl sm:text-3xl font-light">
              Coming Soon
            </span>
          </div>

          <div className="h-10 w-[1px] bg-[#C8A96E]/30"></div>

          <div className="flex flex-col items-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C8A96E] mb-1 font-medium">
              Production Cap
            </span>
            <span className="font-serif italic text-2xl sm:text-3xl font-light">
              75 Units Only
            </span>
          </div>
        </div>

        {/* CTA Button leading to /early-access */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/early-access"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.22em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/our-craft"
            className={`inline-flex items-center justify-center px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              isDark ? 'text-cream/80 hover:text-white' : 'text-[#1A1208] hover:text-[#D4541A]'
            }`}
          >
            <Compass className="w-4 h-4 mr-2 text-[#C8A96E]" />
            <span>Discover Our Craft</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
