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
  const isWalnut = variant === 'walnut';

  return (
    <section
      className={`relative py-24 sm:py-32 overflow-hidden ${
        isWalnut ? 'bg-[#5C3D2E] text-[#F5EFE4]' : 'bg-[#FAF7F0] text-[#2A2420] border-y border-[#5C3D2E]/10'
      } ${className}`}
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C8A96E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#C8A96E]/15 border border-[#C8A96E]/30 text-[#C8A96E] text-[11px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#7A9E7E]" />
          <span>Season 01 · The Compressed City</span>
        </div>

        {/* Headline */}
        <h2
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-3xl ${
            isWalnut ? 'text-[#F5EFE4]' : 'text-[#5C3D2E]'
          }`}
        >
          75 pieces. One considered collection.
        </h2>

        {/* Supporting description */}
        <p
          className={`font-sans text-sm sm:text-base max-w-xl mt-5 leading-relaxed ${
            isWalnut ? 'text-[#F5EFE4]/80' : 'text-[#2A2420]/75'
          }`}
        >
          Season 01 is a limited release of furniture designed for compact city living. Built in Kerala with multi-generational woodworkers and delivered directly to your apartment door.
        </p>

        {/* Drop status indicator */}
        <div className="my-8 flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C8A96E] mb-1">
              Launch Phase
            </span>
            {/* Display Coming Soon when no exact hard launch date is finalized */}
            <span className="font-serif italic text-2xl sm:text-3xl font-light">
              Coming Soon
            </span>
          </div>

          <div className="h-10 w-[1px] bg-[#C8A96E]/30"></div>

          <div className="flex flex-col items-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C8A96E] mb-1">
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.22em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/our-craft"
            className={`inline-flex items-center justify-center px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              isWalnut ? 'text-cream/80 hover:text-white' : 'text-[#5C3D2E] hover:text-[#2A2420]'
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
