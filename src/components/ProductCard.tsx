import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { ArrowRight, Compass } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group bg-[#FAF7F0] border border-[#5C3D2E]/10 flex flex-col justify-between transition-all duration-300 hover:border-[#5C3D2E]/25 hover:shadow-[0_8px_30px_rgba(42,36,32,0.06)]">
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
          <span className="px-3 py-1 bg-[#2A2420]/80 backdrop-blur-sm text-[#F5EFE4] text-[10px] font-sans uppercase tracking-[0.2em] rounded-sm">
            {product.dropStatus}
          </span>
          <span className="px-2.5 py-1 bg-[#B5714A] text-[#FAF7F0] text-[10px] font-sans uppercase tracking-[0.15em] rounded-sm">
            {product.batchSize} Units
          </span>
        </div>

        {/* Indicative pricing overlay pill */}
        <div className="absolute bottom-4 right-4 bg-[#F5EFE4]/90 backdrop-blur-sm px-3 py-1 text-xs font-sans tracking-wide text-[#2A2420] border border-[#5C3D2E]/10">
          Indicative: <span className="font-medium text-[#5C3D2E]">{product.indicativePrice}</span>
        </div>
      </div>

      {/* Product Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#C8A96E] mb-2">
            <span>{product.subtitle}</span>
            <span className="flex items-center gap-1 text-[#2A2420]/50 lowercase">
              <Compass className="w-3 h-3 text-[#7A9E7E]" /> Kerala
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#5C3D2E] font-light leading-snug group-hover:text-[#472E22] transition-colors">
            <Link to={`/collection/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#2A2420]/80 mt-3 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Materials Tag List */}
          <div className="mt-5 pt-4 border-t border-[#5C3D2E]/10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2A2420]/60 block mb-2 font-medium">
              Materials &amp; Craft:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.materials.map((material, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-[#EAE1D2]/60 text-[#2A2420]/90 px-2.5 py-0.5 rounded-sm font-light"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions: Details Link + Get Early Access CTA */}
        <div className="mt-8 pt-6 border-t border-[#5C3D2E]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to={`/collection/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#5C3D2E] hover:text-[#2A2420] transition-colors py-2"
          >
            <span>Product Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to={`/early-access?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.18em] rounded-sm transition-all duration-300 shadow-sm hover:shadow"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </article>
  );
};
