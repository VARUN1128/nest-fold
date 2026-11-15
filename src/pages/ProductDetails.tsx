import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { season01Products } from '../data/products';
import { ProductGallery } from '../components/ProductGallery';
import { CardCarousel } from '../components/CardCarousel';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Maximize2,
  Hammer,
} from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = season01Products.find(
    (p) => p.slug === slug || (slug === 'convertible-sofa-bed' && p.slug === 'the-flip-lounge')
  );

  if (!product) {
    return <Navigate to="/collection" replace />;
  }

  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2A2420]/60">
        <Link to="/collection" className="hover:text-[#5C3D2E] flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Collection</span>
        </Link>
        <span>/</span>
        <span className="text-[#5C3D2E] font-medium">{product.name}</span>
      </div>

      {/* Primary Showcase */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images.gallery}
              productName={product.name}
            />
          </div>

          {/* Right Column: Product Narrative & Specs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-3">
                <span>{product.subtitle}</span>
                <span className="flex items-center gap-1 text-[#2A2420]/60">
                  <Compass className="w-3.5 h-3.5 text-[#7A9E7E]" />
                  {product.craftLocation}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#5C3D2E] leading-tight">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm font-sans tracking-wide text-[#2A2420]">
                  Indicative Price: <span className="font-medium text-[#5C3D2E] text-lg">{product.indicativePrice}</span>
                </span>
                <span className="px-2.5 py-0.5 bg-[#B5714A]/15 text-[#B5714A] text-[10px] uppercase tracking-[0.15em] font-medium rounded-sm">
                  {product.dropStatus}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 font-sans text-sm text-[#2A2420]/80 leading-relaxed font-light">
              <p>{product.fullDescription}</p>
            </div>

            {/* Space Solving Highlight Box */}
            <div className="p-5 bg-[#FAF7F0] border border-[#5C3D2E]/15 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5C3D2E]">
                <Maximize2 className="w-4 h-4 text-[#7A9E7E]" />
                <span>Space-First Engineering</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed">
                {product.spaceSolvingFeature}
              </p>
            </div>

            {/* Craft Details */}
            <div className="p-5 bg-[#FAF7F0] border border-[#5C3D2E]/15 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5C3D2E]">
                <Hammer className="w-4 h-4 text-[#C8A96E]" />
                <span>Artisan Woodworking</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed">
                {product.craftDetails}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="border-t border-[#5C3D2E]/10 pt-6 space-y-3.5 text-xs font-sans">
              {product.dimensions && (
                <div className="flex justify-between py-1 border-b border-[#5C3D2E]/5">
                  <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Dimensions</span>
                  <span className="text-[#2A2420] font-medium text-right">{product.dimensions}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-[#5C3D2E]/5">
                <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Materials</span>
                <span className="text-[#2A2420] text-right max-w-xs">{product.materials.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#5C3D2E]/5">
                <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Lead Time</span>
                <span className="text-[#2A2420] font-medium text-right">{product.leadTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#5C3D2E]/5">
                <span className="text-[#2A2420]/60 uppercase tracking-wider text-[10px]">Batch Cap</span>
                <span className="text-[#B5714A] font-medium text-right">{product.batchSize} numbered units</span>
              </div>
            </div>

            {/* Primary Action */}
            <div className="pt-4 space-y-3">
              <Link
                to={`/early-access?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Early Access For This Piece</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-[11px] text-[#2A2420]/60 italic">
                * No immediate payment required. Secures 24h drop reservation before public release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Feature Spotlight: e.g. "Tray-dition" — Lift-Off & Serve */}
      {product.featureSpotlight && (
        <section className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-[#5C3D2E]/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {product.featureSpotlight.image && (
                <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] rounded-sm overflow-hidden bg-[#EAE1D2] border border-[#5C3D2E]/15 shadow-md">
                  <img
                    src={product.featureSpotlight.image}
                    alt={product.featureSpotlight.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-[#2A2420]/80 backdrop-blur-sm text-[#F5EFE4] text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    In Action · Compact Living
                  </div>
                </div>
              )}

              <div className={`${product.featureSpotlight.image ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
                <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#7A9E7E] block">
                  Spatial Innovation · Signature Feature
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C3D2E] font-light leading-tight">
                  {product.featureSpotlight.title}
                </h2>

                {product.featureSpotlight.subtitle && (
                  <p className="font-serif italic text-xl text-[#C8A96E]">
                    {product.featureSpotlight.subtitle}
                  </p>
                )}

                <p className="font-sans text-sm sm:text-base text-[#2A2420]/85 leading-relaxed font-light">
                  {product.featureSpotlight.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to={`/early-access?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all shadow-sm"
                  >
                    <span>Reserve Early Access</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Season 01 Pieces */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 border-t border-[#5C3D2E]/10">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#5C3D2E] font-light mb-10">
          Other pieces in Season 01
        </h3>
        <CardCarousel gridClassName="grid-cols-1 md:grid-cols-2 gap-8">
          {season01Products
            .filter((p) => p.slug !== product.slug)
            .map((other) => (
              <Link
                key={other.id}
                to={`/collection/${other.slug}`}
                className="group flex flex-col sm:flex-row bg-[#FAF7F0] border border-[#5C3D2E]/10 hover:border-[#5C3D2E]/25 transition-all overflow-hidden rounded-sm h-full"
              >
                <div className="sm:w-1/2 aspect-[4/3] bg-[#EAE1D2] overflow-hidden">
                  <img
                    src={other.images.hero}
                    alt={other.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96E] block mb-1">
                      {other.subtitle}
                    </span>
                    <h4 className="font-serif text-xl text-[#5C3D2E] group-hover:text-[#472E22]">
                      {other.name}
                    </h4>
                    <p className="text-xs text-[#2A2420]/75 mt-2 line-clamp-2">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs text-[#5C3D2E]">
                    <span>{other.indicativePrice}</span>
                    <span className="text-[#7A9E7E] font-medium flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </CardCarousel>
      </section>

      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
