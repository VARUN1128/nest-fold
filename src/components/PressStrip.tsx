import React from 'react';

export const PressStrip: React.FC = () => {
  const publications = [
    { name: 'ARCHITECTURAL DIGEST', quote: 'Artisan space-saving design born in Kerala' },
    { name: 'ELLE DECOR', quote: 'Reimagining compact city apartments' },
    { name: 'DESIGN PATAKI', quote: 'The future of Indian modular furniture' },
    { name: 'MINT LOUNGE', quote: 'Furniture built for how India actually lives' },
  ];

  return (
    <div className="py-10 sm:py-14 bg-[#F7F0E3] border-y border-[#1A1208]/10 text-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-[#1A1208]/50 block mb-6">
          As Seen In
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 opacity-75 hover:opacity-100 transition-opacity">
          {publications.map((pub, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-lg sm:text-xl tracking-wider text-[#1A1208]/80 font-light select-none">
                {pub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
