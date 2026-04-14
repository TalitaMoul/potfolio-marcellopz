"use client";

import { useEffect } from "react";

type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white text-5xl font-light transition-colors z-50 leading-none cursor-pointer"
        onClick={onClose}
        title="Close Gallery"
      >
        &times;
      </button>
      <div className="absolute top-8 left-8 text-white/70 text-sm tracking-widest font-serif z-50">
        {currentIndex + 1} / {images.length}
      </div>

      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-[80vw] max-h-[90vh] object-contain pointer-events-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-5xl md:text-7xl p-4 transition-all pointer-events-auto font-light drop-shadow-lg hover:-translate-x-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              &#8592;
            </button>
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-5xl md:text-7xl p-4 transition-all pointer-events-auto font-light drop-shadow-lg hover:translate-x-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              &#8594;
            </button>
          </>
        )}
      </div>
    </div>
  );
}
