import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0A04] text-[#F7F0E3] pt-20 sm:pt-28 pb-12 border-t border-[#1A1208] relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#C8A96E]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top 3-Column Minimal Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Column 1: Brand Statement & Origin */}
          <div className="md:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" />

            <div className="pt-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8A96E] block mb-2 font-medium">
                Origin &amp; Ethos
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F0E3] font-light leading-snug">
                This isn't storage. <br />
                <span className="italic font-light text-[#C8A96E]">It's structure.</span>
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#F7F0E3]/70 font-light leading-relaxed max-w-sm">
              Artisan furniture designed for how India actually lives. Turned, jointed, and woven in Kerala from seasoned Nilambur timber and natural cane rattan.
            </p>
          </div>

          {/* Column 2: Minimal Numbered Directory */}
          <div className="md:col-span-3 space-y-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8A96E] block font-medium">
              Directory
            </span>

            <ul className="space-y-3 font-sans text-xs uppercase tracking-[0.18em]">
              <li>
                <Link
                  to="/collection"
                  className="text-[#F7F0E3]/75 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>01 / The Collection</span>
                  <span className="text-[10px] text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity font-mono">S01</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-craft"
                  className="text-[#F7F0E3]/75 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>02 / Material &amp; Craft</span>
                  <span className="text-[10px] text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity font-mono">Kerala</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="text-[#F7F0E3]/75 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>03 / Space Accents</span>
                  <span className="text-[10px] text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity font-mono">Objects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-[#F7F0E3]/75 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>04 / Field Notes</span>
                  <span className="text-[10px] text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity font-mono">Essays</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/early-access"
                  className="text-[#D4541A] hover:text-[#BA4512] font-semibold transition-colors flex items-center justify-between group"
                >
                  <span>05 / Join Waitlist</span>
                  <span className="text-[10px] text-[#D4541A] font-mono">#247</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Workshop Coordinates & Early Access */}
          <div className="md:col-span-4 space-y-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C8A96E] block font-medium">
              Atelier Dispatch
            </span>

            <div className="p-4 bg-white/[0.03] border border-white/10 rounded-sm space-y-2.5 text-xs font-mono text-[#F7F0E3]/75">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C8A96E]">Atelier</span>
                <span>Thrissur &amp; Nilambur</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C8A96E]">Coordinates</span>
                <span>10.5276° N, 76.2144° E</span>
              </div>
              <div className="flex justify-between items-center text-[11px] pt-1 border-t border-white/5">
                <span className="text-[#C8A96E]">Batch Status</span>
                <span className="flex items-center gap-1.5 text-[#7A9E7E] font-sans font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A9E7E] animate-pulse"></span>
                  Season 01 · 75 Units
                </span>
              </div>
            </div>

            <Link
              to="/early-access"
              className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join Season 01 Waitlist</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Centerpiece: Oversized Sculptural Brand Typography Watermark */}
        <div className="overflow-hidden select-none py-10 sm:py-14 border-b border-white/10">
          <div className="text-[13vw] font-serif font-light tracking-tight leading-none text-white/[0.07] whitespace-nowrap text-center transition-colors hover:text-white/[0.12] duration-700">
            NEST &amp; FOLD
          </div>
        </div>

        {/* Colophon & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#F7F0E3]/55 tracking-[0.16em] uppercase space-y-4 md:space-y-0 font-sans">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Nest &amp; Fold Design Studio</span>
            <span>·</span>
            <span className="text-[#C8A96E]/90 font-medium">Kerala, India</span>
          </div>

          <div className="hidden lg:block text-xs font-serif italic normal-case tracking-normal text-[#F7F0E3]/70">
            "Every fold is a decision."
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/early-access" className="hover:text-white transition-colors">
              Privacy &amp; Drops
            </Link>
            <span className="text-white/20">/</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C8A96E] hover:text-white transition-colors group cursor-pointer"
              title="Return to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
