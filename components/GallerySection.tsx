"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const images = [
    {
      id: 1,
      src: "/images/gallery-1.webp",
      alt: "Sunlit room with red leather armchair and panoramic desert views",
      label: "Panoramic Views",
    },
    {
      id: 2,
      src: "/images/gallery-2.webp",
      alt: "Luxury backyard featuring a swimming pool, spa, and mountain backdrop",
      label: "Desert Retreat",
    },
    {
      id: 3,
      src: "/images/gallery-3.webp",
      alt: "Aerial view of a private home with pool near the golf course",
      label: "Private Sanctuary",
    },
    {
      id: 4,
      src: "/images/gallery-4.webp",
      alt: "Community clubhouse entrance with tennis courts and mountain views",
      label: "Active Lifestyle",
    },
    {
      id: 5,
      src: "/images/gallery-5.webp",
      alt: "Large community resort-style pool and lake overlooking the mountains",
      label: "Resort-Style Living",
    },
    {
      id: 6,
      src: "/images/gallery-6.webp",
      alt: "Modern homes located directly on the golf course with water features",
      label: "Golf Course Frontage",
    },
    {
      id: 7,
      src: "/images/gallery-7.webp",
      alt: "Aerial overview of the community center, tennis courts, and amenities",
      label: "World-Class Amenities",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeImage = images[currentIndex];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 space-y-2 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark">
            Gallery
          </h2>
        </div>

        <div
          className="flex flex-col gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-100 md:h-125 lg:h-150 bg-gray-900 shadow-2xl overflow-hidden group rounded-sm">
            <div key={`bg-${activeImage.id}`} className="absolute inset-0 z-0">
              <Image
                src={activeImage.src}
                alt="Background Blur"
                fill
                className="object-cover blur-2xl opacity-60 scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div
              key={activeImage.id}
              className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8 animate-fade-in"
            >
              <div className="relative w-full h-full shadow-2xl">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none"></div>

            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
              <span className="text-white font-serif text-2xl md:text-3xl font-light opacity-90 drop-shadow-md">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-white/70 font-sans text-xs md:text-sm ml-2 drop-shadow-md">
                / {String(images.length).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full text-white transition-all duration-300 transform opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:-translate-x-4 lg:group-hover:translate-x-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full text-white transition-all duration-300 transform opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-4 lg:group-hover:translate-x-0"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 z-20 animate-fade-in-up">
              <div className="w-8 md:w-12 h-1 bg-luxury-gold mb-2 md:mb-4 shadow-sm"></div>

              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif italic tracking-wide drop-shadow-lg">
                {activeImage.label}
              </h3>

              <p className="text-gray-200 text-[10px] md:text-xs lg:text-sm tracking-wide md:tracking-widest uppercase mt-2 opacity-90 drop-shadow-md w-full max-w-[90%] md:max-w-lg line-clamp-2 md:line-clamp-none">
                {activeImage.alt}
              </p>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-7 gap-2 lg:gap-3 mt-4">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 lg:h-20 w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  currentIndex === index
                    ? "opacity-100 ring-2 ring-luxury-gold ring-offset-2"
                    : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 15vw, 10vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-luxury-gold"
                    : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
