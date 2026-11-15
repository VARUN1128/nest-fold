import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { Compass } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isSoldOut = product.dropStatus === 'Sold Out';

  return (
    <article className="group bg-[#FAF7F0] border border-[#1A1208]/12 flex flex-col justify-between transition-all duration-300 hover:border-[#1A1208]/30 hover:shadow-[0_12px_36px_rgba(26,18,8,0.08)] rounded-sm overflow-hidden">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#EAE1D2]">
        <img
          src={product.images.hero}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Drop Status & Batch badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {isSoldOut ? (
            <span className="px-3 py-1 bg-[#8B4513] text-[#F7F0E3] text-[10px] font-sans font-medium uppercase tracking-[0.2em] rounded-sm shadow-sm">
              SOLD — S01
            </span>
          ) : (
            <span className="px-3 py-1 bg-[#1A1208]/85 backdrop-blur-sm text-[#F7F0E3] text-[10px] font-sans uppercase tracking-[0.2em] rounded-sm">
              {product.dropStatus}
            </span>
          )}
          <span className="px-2.5 py-1 bg-[#C8A96E] text-[#1A1208] text-[10px] font-sans font-semibold uppercase tracking-[0.15em] rounded-sm">
            {product.batchSize} Units
          </span>
        </div>

        {/* Indicative pricing overlay pill */}
        <div className="absolute bottom-4 right-4 bg-[#F7F0E3]/95 backdrop-blur-sm px-3 py-1 text-xs font-sans tracking-wide text-[#1A1208] border border-[#1A1208]/15 rounded-sm shadow-sm">
          Indicative: <span className="font-semibold text-[#1A1208]">{product.indicativePrice}</span>
        </div>
      </div>

      {/* Product Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#C8A96E] mb-2 font-medium">
            <span>{product.subtitle}</span>
            <span className="flex items-center gap-1 text-[#1A1208]/50 lowercase">
              <Compass className="w-3 h-3 text-[#D4541A]" /> Kerala
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1208] font-light leading-snug group-hover:text-[#D4541A] transition-colors">
            <Link to={`/collection/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#1A1208]/80 mt-3 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Materials Tag List */}
          <div className="mt-5 pt-4 border-t border-[#1A1208]/10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1208]/60 block mb-2 font-medium">
              Materials &amp; Craft:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.materials.map((material, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-[#EAE1D2]/70 text-[#1A1208]/90 px-2.5 py-0.5 rounded-sm font-light"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions: VIEW OBJECT → and JOIN WAITLIST CTA */}
        <div className="mt-8 pt-6 border-t border-[#1A1208]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to={`/collection/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1208] hover:text-[#D4541A] transition-colors py-2"
          >
            <span>View Object →</span>
          </Link>

          <Link
            to={`/early-access?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.18em] rounded-sm transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            {isSoldOut ? 'Sold — S01' : 'Join Waitlist'}
          </Link>
        </div>
      </div>
    </article>
  );
};
