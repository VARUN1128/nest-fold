import React from 'react';
import { Link } from 'react-router-dom';
import { journalArticles } from '../data/articles';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Journal: React.FC = () => {
  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Header */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#5C3D2E]/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#5C3D2E]/5 border border-[#5C3D2E]/15 text-[#7A9E7E] text-[11px] uppercase tracking-[0.25em] font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Editorial Journal · Volume 01</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#5C3D2E] tracking-tight leading-[1.08]">
            Notes on Craft &amp; Space
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#C8A96E] mt-3 font-light">
            "Observations from city flats and Kerala workshops."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A2420]/80 mt-6 leading-relaxed max-w-2xl font-light">
            Essays on architectural proportion in compact Indian apartments, the botanical science of tropical rattan, and the lineage of timber joinery.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {journalArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#FAF7F0] border border-[#5C3D2E]/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#5C3D2E]/25 transition-all shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/11] bg-[#EAE1D2] overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#2A2420]/80 text-[#F5EFE4] text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-[10px] text-[#2A2420]/50 uppercase tracking-[0.2em] mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#5C3D2E] font-light leading-snug group-hover:text-[#472E22] transition-colors">
                    <Link to={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-xs sm:text-sm text-[#2A2420]/75 mt-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#7A9E7E] hover:text-[#59755D] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
