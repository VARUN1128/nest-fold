import React from 'react';
import { Link } from 'react-router-dom';
import { season01Products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CardCarousel } from '../components/CardCarousel';
import { SectionHeading } from '../components/SectionHeading';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { ScrollingTicker } from '../components/ScrollingTicker';
import { PressStrip } from '../components/PressStrip';
import { SectionDivider } from '../components/SectionDivider';
import { ArrowRight, Sparkles, Layers, Maximize2, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#F7F0E3] text-[#1A1208]">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[64vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1208]">
        {/* Full-width editorial furniture interior photograph with subtle vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
            alt="Warm Indian living space with artisan wood and rattan furniture"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.62] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-black/30 to-black/40"></div>
          <div className="absolute inset-0 bg-[#5C3D2E]/20 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center text-[#F7F0E3] pt-24 sm:pt-28 pb-10 sm:pb-16 flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] max-w-4xl">
            Every fold <br />
            <span className="italic font-light text-[#C8A96E]">
              is a decision.
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-base md:text-lg text-[#F7F0E3]/85 max-w-xl sm:max-w-2xl mt-4 sm:mt-6 leading-relaxed font-light">
            Furniture built for how India actually lives. Handcrafted in Kerala from walnut, rattan, and solid wood — designed for flats under 600 sq ft.
          </p>

          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
            <Link
              to="/early-access"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Join the Waitlist
            </Link>

            <Link
              to="/collection"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 border border-white/30 text-[#F7F0E3] hover:bg-white/10 text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-colors backdrop-blur-sm"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#C8A96E]" />
            </Link>
          </div>

          {/* Desktop & Tablet: Centered Badges */}
          <div className="hidden sm:flex mt-14 pt-8 border-t border-white/15 flex-wrap items-center justify-center gap-6 sm:gap-12 text-[11px] uppercase tracking-[0.2em] text-[#F7F0E3]/70">
            <span>Only 75 numbered units</span>
            <span className="text-[#C8A96E]">·</span>
            <span>Nilambur Walnut &amp; Cane</span>
            <span className="text-[#C8A96E]">·</span>
            <span>Made for flats under 600 sq ft</span>
          </div>
        </div>
      </section>

      {/* CONTINUOUS HORIZONTAL TICKER BELOW HERO */}
      <ScrollingTicker />

      {/* AS SEEN IN PRESS STRIP */}
      <PressStrip />

      <SectionDivider />

      {/* SECTION 2 — BRAND PHILOSOPHY */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#D4541A] mb-3 block">
            01 — Brand Purpose
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1208] font-light leading-tight">
            "Your home is small. Your standards aren't."
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#C8A96E] mt-3">
            No plastic laminates. No clumsy hospital beds. Real craft for modern apartments.
          </p>
        </div>

        <CardCarousel gridClassName="grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Principle 1 */}
          <div className="bg-[#FAF7F0] p-8 sm:p-10 border border-[#1A1208]/10 flex flex-col justify-between hover:border-[#1A1208]/25 transition-colors h-full rounded-sm">
            <div>
              <span className="font-serif text-3xl text-[#C8A96E] block mb-4">01</span>
              <h3 className="font-sans text-xs uppercase tracking-[0.22em] font-semibold text-[#1A1208] mb-3">
                Space-First Design
              </h3>
              <p className="font-sans text-sm text-[#1A1208]/80 leading-relaxed font-light">
                Furniture that folds, stacks and converts. Every joint and hinge is designed specifically for city apartments under 600 sq ft.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1A1208]/10 flex items-center gap-2 text-xs text-[#7A9E7E] font-medium">
              <Maximize2 className="w-4 h-4" />
              <span>Multi-utility footprints</span>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="bg-[#FAF7F0] p-8 sm:p-10 border border-[#1A1208]/10 flex flex-col justify-between hover:border-[#1A1208]/25 transition-colors h-full rounded-sm">
            <div>
              <span className="font-serif text-3xl text-[#C8A96E] block mb-4">02</span>
              <h3 className="font-sans text-xs uppercase tracking-[0.22em] font-semibold text-[#1A1208] mb-3">
                Artisan Quality
              </h3>
              <p className="font-sans text-sm text-[#1A1208]/80 leading-relaxed font-light">
                Walnut, rattan and solid wood. Lathe-turned and jointed by skilled craftsmen in Kerala with 30+ years of timber heritage.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1A1208]/10 flex items-center gap-2 text-xs text-[#7A9E7E] font-medium">
              <Layers className="w-4 h-4" />
              <span>Solid timber &amp; hand-woven cane</span>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="bg-[#FAF7F0] p-8 sm:p-10 border border-[#1A1208]/10 flex flex-col justify-between hover:border-[#1A1208]/25 transition-colors h-full rounded-sm">
            <div>
              <span className="font-serif text-3xl text-[#C8A96E] block mb-4">03</span>
              <h3 className="font-sans text-xs uppercase tracking-[0.22em] font-semibold text-[#1A1208] mb-3">
                Limited Drops
              </h3>
              <p className="font-sans text-sm text-[#1A1208]/80 leading-relaxed font-light">
                Seasonal collections in restricted quantities. We manufacture with care, eliminating warehouse waste and inventory markups.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1A1208]/10 flex items-center gap-2 text-xs text-[#7A9E7E] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Capped at 75 numbered pieces</span>
            </div>
          </div>
        </CardCarousel>
      </section>

      <SectionDivider />

      {/* SECTION 3 — SEASON 01 COLLECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Season 01 — The Compressed City"
            title="Objects for compact living."
            subtitle="Three considered furniture systems designed for compact living rooms and bedrooms."
            description="Average collection selling price: ₹20,000. Limited to 25 units per category."
          />
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#1A1208] hover:text-[#D4541A] self-start md:self-end pb-1 border-b border-[#1A1208]/30 transition-colors"
          >
            <span>View Full Collection</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96E]" />
          </Link>
        </div>

        {/* 3 Season 01 Categories */}
        <CardCarousel gridClassName="grid-cols-1 lg:grid-cols-3 gap-8">
          {season01Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardCarousel>
      </section>

      {/* SECTION 4 — CRAFT STORY */}
      <section className="py-24 sm:py-32 bg-[#1A1208] text-[#F7F0E3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Split Screen Left: Craftsman Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#5C3D2E]/40 border border-[#5C3D2E]/30">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Kerala artisan hand-shaping seasoned wood in workshop"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1A1208]/85 backdrop-blur-sm border border-white/10 rounded-sm">
                  <p className="font-serif italic text-[#C8A96E] text-base">
                    "Turned on a lathe by our woodworker in Thrissur."
                  </p>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#F7F0E3]/60 block mt-1">
                    Multi-generational timber guild, Kerala
                  </span>
                </div>
              </div>
            </div>

            {/* Split Screen Right: Editorial Story */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#C8A96E]">
                Made in Kerala
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F0E3] font-light leading-tight">
                Made by hands that know wood.
              </h2>

              <p className="font-serif italic text-xl text-[#C8A96E]">
                Old soul. Modern voice.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#F7F0E3]/80 leading-relaxed font-light">
                Every piece begins with material, patience and skill. We work with craftsmen in Kerala, drawing on long-standing supplier relationships and decades of experience.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#F7F0E3]/70 leading-relaxed font-light">
                No veneers over pressed sawdust. No automated short-cuts. We build the furniture you live with through the decade you spend renting before you can own.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/our-craft"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#7A9E7E] hover:bg-[#688B6C] text-[#FAF7F0] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all"
                >
                  Discover Our Craft
                </Link>

                <Link
                  to="/early-access"
                  className="inline-flex items-center justify-center px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C8A96E] hover:text-white transition-colors"
                >
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5 — SPACE-FIRST DESIGN */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#D4541A] mb-3 block">
            Spatial Intelligence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1208] font-light leading-tight">
            Make room for more living.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#1A1208]/80 mt-4 leading-relaxed font-light">
            In compact urban flats, a room must serve multiple roles across the day: a workspace by morning, a dining area by evening, and a calm bedroom by night.
          </p>
        </div>

        <CardCarousel gridClassName="grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fold Away */}
          <div className="group overflow-hidden bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm h-full flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] bg-[#EAE1D2] overflow-hidden rounded-sm mb-6">
                <img
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
                  alt="Furniture that folds away smoothly"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-[#1A1208]/80 text-[#F7F0E3] px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  01 · Fold Away
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1208] mb-2 font-light">
                Folds Away Without Effort
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1208]/75 leading-relaxed font-light">
                Surfaces engineered to tuck flat into recessed niches or slide flush against walls when not in use. Reclaim square footage in seconds.
              </p>
            </div>
          </div>

          {/* Stack Smart */}
          <div className="group overflow-hidden bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm h-full flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] bg-[#EAE1D2] overflow-hidden rounded-sm mb-6">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
                  alt="Nesting side tables and smart stacking furniture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-[#1A1208]/80 text-[#F7F0E3] px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  02 · Stack Smart
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1208] mb-2 font-light">
                Stacks Smart &amp; Quietly
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1208]/75 leading-relaxed font-light">
                Geometric nesting clearances hand-shaved so companion tables and stools sit neatly within each other with zero mechanical friction.
              </p>
            </div>
          </div>

          {/* Convert When Needed */}
          <div className="group overflow-hidden bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm h-full flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] bg-[#EAE1D2] overflow-hidden rounded-sm mb-6">
                <img
                  src="/products/the-flip-lounge.jpg"
                  alt="The Flip Lounge - The Fold-Out Floor Cloud"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-[#1A1208]/80 text-[#F7F0E3] px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  03 · Fold-Out Cloud
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1208] mb-2 font-light">
                The Flip Lounge
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1208]/75 leading-relaxed font-light">
                Designed for small spaces and big lounging. Fold it up to save space, or stretch it out to kick back and relax in rich, retro-inspired fabric.
              </p>
            </div>
          </div>
        </CardCarousel>
      </section>

      {/* SECTION 6 — DROP ANNOUNCEMENT */}
      <EarlyAccessCTA variant="walnut" />

      {/* SECTION 7 — WAITLIST CONVERSION SECTION (BRAND BOOK SECTION 08) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF7F0] border border-[#1A1208]/15 rounded-sm p-8 sm:p-16 lg:p-20 shadow-sm relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Book Avatar Stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1208] text-[11px] font-medium text-[#C8A96E] ring-2 ring-[#FAF7F0]">A</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7A9E7E] text-[11px] font-medium text-white ring-2 ring-[#FAF7F0]">K</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A96E] text-[11px] font-medium text-[#1A1208] ring-2 ring-[#FAF7F0]">R</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#B5714A] text-[11px] font-medium text-white ring-2 ring-[#FAF7F0]">M</span>
                </div>
                <span className="text-xs font-sans text-[#1A1208]/80 font-medium">
                  <strong className="text-[#1A1208] font-semibold">247 people</strong> already on the list
                </span>
              </div>

              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-[#D4541A] block">
                Season 01 — Limited Drop
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A1208] font-light leading-[1.1]">
                Season 01 drops soon.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#1A1208]/80 max-w-xl leading-relaxed font-light">
                75 pieces. Waitlist members get 24-hour early access before anyone else. No permanent catalogue. Once Season 01 is spoken for, these objects will not be restocked.
              </p>

              {/* Minimal visual indicating the limited Season 01 collection */}
              <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-sans text-[#1A1208]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-pulse"></span>
                  <span>75 Units Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C8A96E]" />
                  <span>24hr Early Booking Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C8A96E]" />
                  <span>Numbered Maker Certificate</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/early-access"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <span className="text-xs text-[#1A1208]/60 font-sans text-center sm:text-left self-center">
                  Takes 30 seconds · No payment required
                </span>
              </div>
            </div>

            {/* Right: Limited drop visual graphic card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F7F0E3] p-8 border border-[#1A1208]/15 rounded-sm space-y-5">
                <div className="flex justify-between items-center text-xs tracking-wider uppercase text-[#C8A96E] font-medium border-b border-[#1A1208]/10 pb-3">
                  <span>Batch Allocation</span>
                  <span className="text-[#D4541A] font-semibold">Strict 75-Unit Cap</span>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[#1A1208]/80 font-medium">Vazha Nesting Side Table</span>
                      <span className="font-mono text-[#1A1208]">25 of 25 Allocated</span>
                    </div>
                    <div className="w-full bg-[#EAE1D2] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#7A9E7E] h-full w-[65%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[#1A1208]/80 font-medium">Koodu Valet &amp; Ottoman</span>
                      <span className="font-mono text-[#1A1208]">25 of 25 Allocated</span>
                    </div>
                    <div className="w-full bg-[#EAE1D2] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#7A9E7E] h-full w-[48%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[#1A1208]/80 font-medium">The Flip Lounge</span>
                      <span className="font-mono text-[#1A1208]">25 of 25 Allocated</span>
                    </div>
                    <div className="w-full bg-[#EAE1D2] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#7A9E7E] h-full w-[80%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1A1208]/10 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#1A1208]/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A9E7E]" />
                    <span>Share with 2 friends = move up 10 spots</span>
                  </div>
                  <p className="text-[11px] text-[#1A1208]/60 italic">
                    * Waitlist members get early access 24 hours before public drop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
