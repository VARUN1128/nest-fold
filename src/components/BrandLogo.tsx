import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isDark = variant === 'dark'; // Dark text on cream
  const textColor = isDark ? 'text-charcoal' : 'text-cream';
  const subtextColor = isDark ? 'text-charcoal/60' : 'text-cream/70';

  const markSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-xl' : 'text-xs sm:text-base';
  const subtextSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group tracking-tight select-none ${className}`}>
      {/* Brand Geometric Mark: Two collapsed/nesting angled rectangles */}
      <svg
        className={`${markSize} transition-transform duration-300 group-hover:scale-105 shrink-0`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Rectangle in Sage with subtle angle */}
        <rect
          x="6"
          y="6"
          width="22"
          height="22"
          rx="2"
          transform="rotate(-8 17 17)"
          stroke="#7A9E7E"
          strokeWidth="2.2"
          className="transition-colors duration-300"
        />
        {/* Inner Rectangle in Rattan Gold nested tightly */}
        <rect
          x="13"
          y="13"
          width="21"
          height="21"
          rx="2"
          stroke="#C8A96E"
          strokeWidth="2.2"
          className="transition-colors duration-300"
        />
        {/* Origin dot */}
        <circle cx="10" cy="10" r="1.5" fill="#7A9E7E" />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-sans font-light tracking-[0.16em] sm:tracking-[0.25em] uppercase leading-none ${textSize} ${textColor}`}
        >
          Nest &amp; Fold
        </span>
        {showSubtitle && (
          <span
            className={`hidden sm:block font-sans font-normal tracking-[0.22em] uppercase mt-1 leading-none ${subtextSize} ${subtextColor}`}
          >
            Kerala Origin · Artisan Drops
          </span>
        )}
      </div>
    </Link>
  );
};
