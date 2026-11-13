import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A2420] text-[#F5EFE4] pt-20 pb-12 border-t border-[#5C3D2E]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5EFE4]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" />
            <p className="font-serif italic text-2xl text-[#C8A96E] leading-relaxed max-w-sm pt-2">
              Furniture built for how India actually lives.
            </p>
            <p className="font-sans text-xs tracking-wide text-[#F5EFE4]/70 leading-relaxed max-w-md">
              Artisan furniture designed for compact Indian city apartments. Crafted in Kerala from seasoned walnut, natural cane rattan, and solid timber. Released in limited seasonal drops.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C8A96E]">
              <Compass className="w-3.5 h-3.5" />
              <span>Nilambur · Thrissur · Kochi · Bengaluru</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-[#F5EFE4]/80">
              <li>
                <Link to="/collection" className="hover:text-white transition-colors">
                  Collection (S01)
                </Link>
              </li>
              <li>
                <Link to="/our-craft" className="hover:text-white transition-colors">
                  Our Craft
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/early-access"
                  className="text-[#7A9E7E] hover:text-[#9BB89E] font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Early Access</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Season 01 Info */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium">
              Season 01
            </h4>
            <ul className="space-y-3 text-xs tracking-wider text-[#F5EFE4]/80">
              <li>The Compressed City</li>
              <li>75 Numbered Pieces</li>
              <li>Hand-finished in Kerala</li>
              <li>Ships in 5–6 Weeks</li>
              <li className="text-[#B5714A] font-medium">Drop Status: Waitlist</li>
            </ul>
          </div>

          {/* Contact & Early Access Quick Access */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium">
              Early Access
            </h4>
            <p className="text-xs text-[#F5EFE4]/70 leading-relaxed">
              Season 01 is capped at 75 pieces. Register to secure first-day booking access before public release.
            </p>
            <Link
              to="/early-access"
              className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-colors"
            >
              Join Early Access
            </Link>
            <div className="pt-2 text-[11px] text-[#F5EFE4]/50 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7A9E7E]" />
              <span>No spam. Only seasonal drop alerts.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5EFE4]/50 tracking-wider space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <span>&copy; {new Date().getFullYear()} Nest &amp; Fold Design Studio. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#C8A96E]/80">Made with pride in Kerala</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <Link to="/early-access" className="hover:text-white transition-colors">
              Contact / Enquiries
            </Link>
            <Link to="/early-access" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
