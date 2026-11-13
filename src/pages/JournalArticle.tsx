import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { journalArticles } from '../data/articles';
import { EarlyAccessCTA } from '../components/EarlyAccessCTA';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

export const JournalArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="bg-[#F5EFE4] text-[#2A2420] pt-24">
      {/* Back to Journal */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6">
        <Link
          to="/journal"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#2A2420]/60 hover:text-[#5C3D2E] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 pb-20">
        <div className="space-y-4 mb-8">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-medium text-[#7A9E7E]">
            {article.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#5C3D2E] leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#2A2420]/60 uppercase tracking-[0.18em] pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C8A96E]" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C8A96E]" />
              {article.readTime}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C8A96E]" />
              {article.author}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#5C3D2E]/20 mb-12 shadow-sm">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Excerpt Lead */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#5C3D2E] leading-relaxed border-b border-[#5C3D2E]/15 pb-8 mb-10 font-light">
          {article.excerpt}
        </p>

        {/* Body Sections */}
        <div className="space-y-10 font-sans text-sm sm:text-base text-[#2A2420]/85 leading-relaxed font-light">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-[#5C3D2E] font-light pt-4">
                  {sec.heading}
                </h2>
              )}

              {sec.body.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.quote && (
                <blockquote className="my-8 p-6 bg-[#FAF7F0] border-l-2 border-[#7A9E7E] rounded-r-sm">
                  <p className="font-serif italic text-lg sm:text-xl text-[#5C3D2E] leading-snug">
                    "{sec.quote}"
                  </p>
                  {sec.quoteAuthor && (
                    <cite className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C8A96E] block mt-2 not-italic font-medium">
                      — {sec.quoteAuthor}
                    </cite>
                  )}
                </blockquote>
              )}

              {sec.subImage && (
                <div className="my-8 aspect-[16/9] overflow-hidden rounded-sm bg-[#EAE1D2]">
                  <img
                    src={sec.subImage}
                    alt="Article visual reference"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Articles Footer Navigation */}
        <div className="mt-16 pt-10 border-t border-[#5C3D2E]/15 flex justify-between items-center text-xs uppercase tracking-[0.2em]">
          <Link
            to="/journal"
            className="text-[#5C3D2E] font-medium hover:text-[#2A2420] flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>More Journal Stories</span>
          </Link>
          <Link
            to="/early-access"
            className="text-[#7A9E7E] font-medium hover:text-[#59755D] flex items-center gap-1"
          >
            <span>Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      <EarlyAccessCTA variant="walnut" />
    </div>
  );
};
