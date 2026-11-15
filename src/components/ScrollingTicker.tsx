import React from 'react';

export const ScrollingTicker: React.FC = () => {
  const tickerText = [
    'Furniture built for how India actually lives',
    'Season 01 — The Compressed City',
    '75 pieces. No restock.',
    'Kerala craft. D2C margins.',
    'Objects with function.',
  ];

  return (
    <div className="w-full bg-[#1A1208] text-[#F7F0E3] py-4 overflow-hidden border-y border-[#F7F0E3]/15 relative select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1A1208] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1A1208] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center text-[11px] font-sans font-medium uppercase tracking-[0.25em] whitespace-nowrap text-[#F7F0E3]/85">
        {[0, 1, 2].map((loopIdx) => (
          <span key={loopIdx} className="flex items-center gap-6 px-4">
            {tickerText.map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <span className="text-[#C8A96E]">·</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};
