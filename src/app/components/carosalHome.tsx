"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarouselHomeProps {
  images: string[];
}

export default function CarouselHome({ images }: CarouselHomeProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5s (pause on hover)
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, images.length]);

  // Keyboard navigation in preview mode
  useEffect(() => {
    if (!isPreviewOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsPreviewOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isPreviewOpen]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* --- Main Carousel --- */}
      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded shadow-lg bg-gray-100">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                idx === activeIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setIsPreviewOpen(true)}
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ))}

          {/* Prev / Next Buttons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white text-gray-800 rounded-full shadow-md transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white text-gray-800 rounded-full shadow-md transition"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-white shadow-md scale-110"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* --- Thumbnail Strip --- */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {images.map((src, idx) => (
              <button
                key={`thumb-${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-shrink-0 w-[100px] h-[65px] rounded overflow-hidden border-2 transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-[#086FB1] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* --- Full-Screen Preview Modal --- */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[9999]"
          onClick={() => setIsPreviewOpen(false)} // closes when clicking background
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent background click
              setIsPreviewOpen(false);
            }}
            className="absolute top-5 right-5 text-white hover:text-gray-300 p-2 z-50"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <Image
              src={images[activeIndex]}
              alt={`Preview ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full z-50"
                >
                  <ChevronLeft size={34} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full z-50"
                >
                  <ChevronRight size={34} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
