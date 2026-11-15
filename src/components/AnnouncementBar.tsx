import React from 'react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#1A1208] text-[#F7F0E3] py-2.5 px-4 border-b border-[#F7F0E3]/10 relative z-50 text-center">
      <Link
        to="/early-access"
        className="inline-flex items-center justify-center gap-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#F7F0E3]/90 hover:text-white transition-colors"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A9E7E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7A9E7E]"></span>
        </span>
        <span>Season 01 Waitlist Open — 247 Spots Claimed</span>
        <span className="text-[#C8A96E] ml-1">→</span>
      </Link>
    </div>
  );
};
