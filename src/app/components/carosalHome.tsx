"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HorizontalThumbnailsProps {
  images: string[];
}

export default function CarouselHome({ images }: HorizontalThumbnailsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle next/previous navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Optional: Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Adjust timing as needed
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      {/* Main Slides */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {images.map((src, idx) => (
          <button
            key={`thumb-${idx}`}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-[100px] h-[60px] rounded-md overflow-hidden border-2 ${
              idx === activeIndex ? "border-blue-500 opacity-100" : "border-transparent opacity-60"
            }`}
            aria-label={`Select slide ${idx + 1}`}
            aria-selected={idx === activeIndex}
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

      {/* Prev/Next Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center rounded-full shadow-md hover:bg-white disabled:opacity-50"
        disabled={images.length <= 1}
        aria-label="Previous slide"
      >
        <span className="inline-block w-5 h-5 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23000%27 stroke-width=%272%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 d=%27M15 19l-7-7 7-7%27/%3E%3C/svg%3E')] bg-center bg-cover" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center rounded-full shadow-md hover:bg-white disabled:opacity-50"
        disabled={images.length <= 1}
        aria-label="Next slide"
      >
        <span className="inline-block w-5 h-5 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23000%27 stroke-width=%272%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 d=%27M9 5l7 7-7 7%27/%3E%3C/svg%3E')] bg-center bg-cover" />
      </button>
    </div>
  );
}