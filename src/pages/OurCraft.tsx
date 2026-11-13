import React from 'react';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { Compass, Hammer, TreePine, Droplets, Layers } from 'lucide-react';

export const OurCraft: React.FC = () => {
  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#5C3D2E]/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#5C3D2E]/5 border border-[#5C3D2E]/15 text-[#7A9E7E] text-[11px] uppercase tracking-[0.25em] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Kerala Origin · Lineage &amp; Materials</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#5C3D2E] tracking-tight leading-[1.08]">
            Good furniture takes time.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#C8A96E] mt-3 font-light">
            "Old soul. Modern voice."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 mt-6 leading-relaxed max-w-2xl font-light">
            In an industry obsessed with plastic laminates and instant flat-packs, we build slow. We work directly with master timber artisans in Kerala, combining centuries of joinery wisdom with space-saving mechanisms for compact Indian apartments.
          </p>
        </div>
      </section>

      {/* 1. Kerala Origin & Lineage */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#7A9E7E] block">
              01 · Kerala Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C3D2E] font-light leading-tight">
              A lineage shaped by monsoon and timber.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 leading-relaxed font-light">
              Kerala's relationship with timber is world-renowned. For generations, the Thatchu Shastra (traditional carpentry science) governed the building of timber houses, verandah daybeds, and ocean-going wooden vessels capable of enduring decades of saltwater and relentless monsoons.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 leading-relaxed font-light">
              Our partner workshops are concentrated in the traditional woodworking centers of Thrissur and Nilambur. We draw on deep supplier relationships cultivated over three decades, sourcing ethically seasoned hardwoods that withstand both high humidity and air-conditioned flats without warping.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#5C3D2E]/20 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
                alt="Kerala natural timber and rattan craft heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#2A2420]/80 backdrop-blur-sm text-[#F5EFE4] text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                Nilambur timber belt &amp; Alappuzha weaving
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Craftsmen */}
      <section className="py-20 sm:py-28 bg-[#2A2420] text-[#F5EFE4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#5C3D2E]/40 border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Master woodworker hand-turning furniture on a lathe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#2A2420]/85 backdrop-blur-sm border border-white/10 rounded-sm">
                  <span className="font-serif italic text-base text-[#C8A96E] block">
                    "Every bevel is smoothed by touch, not by a digital sensor."
                  </span>
                  <span className="text-[10px] text-[#F5EFE4]/60 uppercase tracking-[0.2em] mt-1 block">
                    Thrissur Workshop Cluster
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#C8A96E] block">
                02 · The Craftsmen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE4] font-light leading-tight">
                Hands that feel the grain before the blade touches.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#F5EFE4]/80 leading-relaxed font-light">
                Our woodworkers aren't operators standing on a conveyor line. They are masters who learned their craft through years of apprenticeship, understanding how wood moves with changes in weather and season.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#F5EFE4]/70 leading-relaxed font-light">
                When you run your hand along the underside of our Vazha table or the frame of our Iruppu daybed, you won't find rough edges hidden out of sight. The same attention applied to the display surface is dedicated to the concealed joints.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#C8A96E] uppercase tracking-[0.2em]">
                <Hammer className="w-4 h-4 text-[#7A9E7E]" />
                <span>30+ Years Collective Guild Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Materials & Traditional Techniques */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#7A9E7E] block mb-2">
            03 &amp; 04 · Materials &amp; Techniques
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C3D2E] font-light leading-tight">
            Materials that grow more beautiful with every year.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Walnut & Solid Hardwoods */}
          <div className="bg-[#FAF7F0] p-8 border border-[#5C3D2E]/10 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#5C3D2E]/10 flex items-center justify-center text-[#5C3D2E]">
              <TreePine className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#5C3D2E] font-light">
              Seasoned Solid Hardwood
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed">
              We use kiln-dried, seasoned walnut and teak. Dense grain structure prevents cracking, while natural oil finishes allow the wood to breathe and develop a rich patina over the decades.
            </p>
          </div>

          {/* Handwoven Rattan Cane */}
          <div className="bg-[#FAF7F0] p-8 border border-[#5C3D2E]/10 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#C8A96E]/20 flex items-center justify-center text-[#5C3D2E]">
              <Droplets className="w-5 h-5 text-[#C8A96E]" />
            </div>
            <h3 className="font-serif text-2xl text-[#5C3D2E] font-light">
              Rainwater-Soaked Cane
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed">
              Before weaving, natural rattan peels are immersed in rainwater cisterns for 24 hours. Once woven wet into octagonal lattices, the fibers shrink taut as they dry, creating enduring natural elasticity.
            </p>
          </div>

          {/* Joinery without shortcuts */}
          <div className="bg-[#FAF7F0] p-8 border border-[#5C3D2E]/10 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#7A9E7E]/15 flex items-center justify-center text-[#7A9E7E]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#5C3D2E] font-light">
              Traditional Mortise Joinery
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 leading-relaxed">
              Instead of relying on plastic dowels or weak glue, our craftsmen hand-cut interlocking mortise-and-tenon joints that withstand repeated movements and shifting apartments.
            </p>
          </div>
        </div>
      </section>

      {/* 5 & 6. Contemporary Design & From Workshop to Home */}
      <section className="py-20 sm:py-28 bg-[#FAF7F0] border-t border-[#5C3D2E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#7A9E7E] block">
                05 · Contemporary Space-First Design
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#5C3D2E] font-light">
                Heritage woodworking meets the realities of 500 sq ft.
              </h3>
              <p className="font-sans text-sm text-[#2A2420]/80 leading-relaxed font-light">
                Traditional furniture was designed for expansive verandahs and sprawling family estates. We take those exact same materials—warm walnut, breathable cane, solid brass—and re-engineer them into compact footprints that nest, fold away, and convert.
              </p>
            </div>

            <div className="space-y-6">
              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#7A9E7E] block">
                06 · From Workshop Direct to Home
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#5C3D2E] font-light">
                Zero middleman markups. Direct artisan support.
              </h3>
              <p className="font-sans text-sm text-[#2A2420]/80 leading-relaxed font-light">
                By manufacturing in strict seasonal drops of 75 pieces, we ensure our craftsmen receive fair, predictable compensation without the pressure of predatory factory quotas. Finished pieces ship directly from Kerala straight into your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
