import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto items-center'
      : align === 'right'
      ? 'text-right ml-auto items-end'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`font-sans text-[11px] font-medium tracking-[0.28em] uppercase mb-3 ${
            isDark ? 'text-[#C8A96E]' : 'text-[#7A9E7E]'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] ${
          isDark ? 'text-[#F5EFE4]' : 'text-[#5C3D2E]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="font-serif italic text-lg sm:text-xl text-[#C8A96E] mt-2 font-light">
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`font-sans text-sm sm:text-base leading-relaxed mt-4 font-normal ${
            isDark ? 'text-[#F5EFE4]/70' : 'text-[#2A2420]/80'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
