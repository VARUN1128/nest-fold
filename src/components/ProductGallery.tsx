import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!images || images.length === 0) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45 && selectedIndex < images.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    } else if (diff < -45 && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
    touchStartX.current = null;
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Focus Image */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden bg-[#EAE1D2] border border-[#5C3D2E]/10 rounded-sm group select-none"
      >
        <img
          src={images[selectedIndex]}
          alt={`${productName} view ${selectedIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />

        {/* Desktop Prev / Next hover arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center bg-[#2A2420]/75 hover:bg-[#2A2420] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center bg-[#2A2420]/75 hover:bg-[#2A2420] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Angle / Counter Badge */}
        <div className="absolute bottom-4 left-4 bg-[#2A2420]/75 backdrop-blur-sm text-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] rounded-sm">
          Angle {selectedIndex + 1} of {images.length}
        </div>
      </div>

      {/* Mobile Bubble / Dot Indicator */}
      {images.length > 1 && (
        <div className="flex sm:hidden items-center justify-center gap-2 py-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View angle ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                selectedIndex === idx
                  ? 'w-7 bg-[#7A9E7E]'
                  : 'w-2 bg-[#5C3D2E]/25 hover:bg-[#5C3D2E]/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-[4/3] w-20 sm:w-24 shrink-0 overflow-hidden border rounded-sm transition-all duration-200 ${
                selectedIndex === idx
                  ? 'border-[#5C3D2E] ring-2 ring-[#C8A96E]/50 opacity-100 scale-102'
                  : 'border-[#5C3D2E]/20 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
