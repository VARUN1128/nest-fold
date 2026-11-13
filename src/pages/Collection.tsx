import React from 'react';
import { season01Products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CardCarousel } from '../components/CardCarousel';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { Compass, Sparkles } from 'lucide-react';

export const Collection: React.FC = () => {
  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#5C3D2E]/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#5C3D2E]/5 border border-[#5C3D2E]/15 text-[#7A9E7E] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Season 01 · Limited Release</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#5C3D2E] tracking-tight leading-[1.08]">
            The Compressed City
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#C8A96E] mt-3 font-light">
            "Furniture that makes more of less."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 mt-6 leading-relaxed max-w-2xl font-light">
            Season 01 is designed for modern city dwellers living in apartments under 600 sq ft. Each piece balances three qualities: honest artisan woodworking from Kerala, space-saving engineering that folds or converts, and natural materials that breathe through the monsoons.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#5C3D2E]/80">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#7A9E7E]" />
              75 Numbered Pieces
            </span>
            <span>·</span>
            <span>Avg. Release Price: ₹20,000</span>
            <span>·</span>
            <span className="text-[#B5714A]">Waitlist Priority Mode</span>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <CardCarousel gridClassName="grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {season01Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardCarousel>
      </section>

      {/* Brand Note on Production */}
      <section className="py-16 bg-[#FAF7F0] border-y border-[#5C3D2E]/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#5C3D2E] font-light">
            Why We Never Run a Permanent Warehouse Catalogue
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed max-w-2xl mx-auto">
            Traditional retailers manufacture thousands of identical chipboard units in overseas factories, inflating margins to offset unsold inventory. Nest &amp; Fold operates on a drop model: we only build what is requested by our waitlist, allocating seasoned teak and walnut directly to our master craftsmen in Kerala.
          </p>
        </div>
      </section>

      {/* Early Access Bottom Banner */}
      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
