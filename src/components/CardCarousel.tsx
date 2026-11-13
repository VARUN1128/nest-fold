import React, { useRef, useState, useEffect } from 'react';

interface CardCarouselProps {
  children: React.ReactNode[];
  className?: string;
  gridClassName?: string;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  children,
  className = '',
  gridClassName = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(newIndex, 0), children.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const childElement = scrollRef.current.children[index] as HTMLElement;
    if (childElement) {
      childElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [children.length]);

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile: Horizontally Scrollable Flex with Snap */}
      <div
        ref={scrollRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-4 pb-4 -mx-6 px-6 scroll-smooth"
      >
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[84vw] max-w-[340px] flex flex-col"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Mobile: Bubble / Dot Indicators */}
      {children.length > 1 && (
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 mb-2">
          {children.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-7 bg-[#7A9E7E]'
                  : 'w-2 bg-[#5C3D2E]/25 hover:bg-[#5C3D2E]/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Desktop / Tablet: Clean CSS Grid */}
      <div className={`hidden md:grid gap-8 ${gridClassName}`}>
        {children}
      </div>
    </div>
  );
};
