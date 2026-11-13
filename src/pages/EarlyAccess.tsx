import React from 'react';
import { EarlyAccessForm } from '../components/EarlyAccessForm';
import { Compass, Sparkles, Clock, Check } from 'lucide-react';

export const EarlyAccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE4] text-[#2A2420] pt-20">
      {/* Premium Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Editorial Furniture Photography & Brand Narrative */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden rounded-sm bg-[#5C3D2E] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
                alt="Nest & Fold Season 01 handcrafted furniture"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2420] via-black/30 to-transparent"></div>

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#2A2420]/80 backdrop-blur-md border border-white/10 rounded-sm text-[#F5EFE4]">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C8A96E] font-medium mb-2">
                  <Sparkles className="w-3 h-3 text-[#7A9E7E]" />
                  <span>Season 01 Drop</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5EFE4] font-light leading-snug">
                  "A little space. A lot of possibility."
                </h3>
                <p className="font-sans text-xs text-[#F5EFE4]/80 mt-2 leading-relaxed font-light">
                  Get early access to our first collection, The Compressed City.
                </p>
              </div>
            </div>

            {/* Value Proposition Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#7A9E7E]/15 flex items-center justify-center shrink-0 text-[#7A9E7E] mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-[#5C3D2E]">
                    24-Hour Exclusive Access
                  </h4>
                  <p className="text-xs text-[#2A2420]/75 mt-0.5 leading-relaxed">
                    Registered members receive priority order links one full day before public launch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#7A9E7E]/15 flex items-center justify-center shrink-0 text-[#7A9E7E] mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-[#5C3D2E]">
                    Strict 75-Piece Cap
                  </h4>
                  <p className="text-xs text-[#2A2420]/75 mt-0.5 leading-relaxed">
                    Only 25 pieces per category are hand-made for Season 01 to maintain uncompromising craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#7A9E7E]/15 flex items-center justify-center shrink-0 text-[#7A9E7E] mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-[#5C3D2E]">
                    Kerala Origin &amp; Direct Delivery
                  </h4>
                  <p className="text-xs text-[#2A2420]/75 mt-0.5 leading-relaxed">
                    Shipped direct from our partner workshops in Thrissur and Nilambur straight into your living space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form on Warm Cream */}
          <div className="lg:col-span-7">
            <EarlyAccessForm />
          </div>
        </div>
      </div>
    </div>
  );
};
