import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 sm:px-8 py-6 ${className}`}>
      <div className="border-t border-dashed border-[#1A1208]/20 w-full"></div>
    </div>
  );
};
