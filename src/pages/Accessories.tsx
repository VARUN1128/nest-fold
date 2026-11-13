import React from 'react';
import { Link } from 'react-router-dom';
import { accessories } from '../data/products';
import { CardCarousel } from '../components/CardCarousel';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export const Accessories: React.FC = () => {
  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#5C3D2E]/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#5C3D2E]/5 border border-[#5C3D2E]/15 text-[#7A9E7E] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Always-Available · Between Drops</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#5C3D2E] tracking-tight leading-[1.08]">
            Accessories &amp; Essentials
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#C8A96E] mt-3 font-light">
            "Small touches that earn their place."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 mt-6 leading-relaxed max-w-2xl font-light">
            Crafted from solid walnut offcuts and woven cane remnants from our primary seasonal furniture drops. Zero timber waste. Accessible between-season pieces priced between ₹800 and ₹3,000.
          </p>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <CardCarousel gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F0] border border-[#5C3D2E]/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#5C3D2E]/25 transition-all shadow-sm h-full"
            >
              <div>
                <div className="relative aspect-square bg-[#EAE1D2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#2A2420]/80 text-[#F5EFE4] text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl text-[#5C3D2E] font-light leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-[#5C3D2E] shrink-0 ml-2">
                      {item.price}
                    </span>
                  </div>

                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#C8A96E] mb-3">
                    {item.materials}
                  </p>

                  <p className="font-sans text-xs text-[#2A2420]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/early-access?product=${encodeURIComponent(item.name)}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-[#5C3D2E] hover:bg-[#472E22] text-[#F5EFE4] text-xs font-medium uppercase tracking-[0.18em] rounded-sm transition-colors"
                >
                  <span>Request Piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </CardCarousel>
      </section>

      {/* Sustainable Craft Footnote */}
      <section className="py-16 bg-[#FAF7F0] border-t border-[#5C3D2E]/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-3">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7A9E7E]/15 text-[#7A9E7E] mx-auto mb-2">
            <Check className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-2xl text-[#5C3D2E] font-light">
            Zero Timber Discard Promise
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed max-w-xl mx-auto">
            Every coat peg, hanger, and valet tray is shaped from offcuts generated during the turning of our large furniture tables and wardrobes. No timber is discarded.
          </p>
        </div>
      </section>

      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
