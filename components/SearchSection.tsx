"use client";

import Image from "next/image";

export default function SearchSection() {
  const logos = [
    { src: "/images/logo-1.webp", alt: "The Ridge" },
    { src: "/images/logo-2.webp", alt: "Equal Housing Opportunity" },
    { src: "/images/logo-3.png", alt: "Realtor" },
    { src: "/images/logo-4.png", alt: "Pahrump valley" },
  ];

  return (
    <section id="listings" className="relative w-full">
      <div className="relative py-20 md:py-28 px-4 md:px-6 flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/search-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-luxury-dark/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl animate-fade-in-up">
          <div className="text-center mb-8 md:mb-10 text-white space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif text-luxury-gold">
              Find Your Dream Home
            </h2>
            <p className="text-gray-200 font-light tracking-widest uppercase text-xs md:text-sm">
              Search exclusive listings in Pahrump
            </p>
          </div>

          <div className="bg-white p-6 md:p-10 shadow-2xl rounded-sm">
            <h3 className="text-xl md:text-2xl font-serif text-luxury-dark mb-6 tracking-wide">
              Search Listings
            </h3>

            <form className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-6 md:gap-6">
              <div className="col-span-2 lg:col-span-4">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Address, City, Zip"
                  className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors text-luxury-dark font-serif"
                />
              </div>

              <div className="col-span-2 lg:col-span-4">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Type
                </label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none bg-transparent text-luxury-dark font-serif cursor-pointer">
                  <option>Any Type</option>
                  <option>Single Family</option>
                  <option>Condo / Townhouse</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>

              <div className="col-span-2 lg:col-span-4">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Sort By
                </label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none bg-transparent text-luxury-dark font-serif cursor-pointer">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Least expensive to Most</option>
                  <option>Most expensive to Least</option>
                  <option>Bedrooms (Low to High)</option>
                  <option>Bedrooms (High to Low)</option>
                  <option>Bathrooms (Low to High)</option>
                  <option>Bathrooms (High to Low)</option>
                </select>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Bedrooms
                </label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none bg-transparent text-luxury-dark font-serif cursor-pointer">
                  <option>Any</option>
                  <option>Studio</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                  <option>6+</option>
                </select>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Baths
                </label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none bg-transparent text-luxury-dark font-serif cursor-pointer">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                  <option>6+</option>
                </select>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Min Price
                </label>
                <input
                  type="text"
                  placeholder="No Min"
                  className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors text-luxury-dark font-serif bg-transparent"
                />
              </div>

              <div className="col-span-1 lg:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Max Price
                </label>
                <input
                  type="text"
                  placeholder="No Max"
                  className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors text-luxury-dark font-serif bg-transparent"
                />
              </div>

              <div className="col-span-2 lg:col-span-4 flex items-end pt-2 lg:pt-0">
                <button
                  type="button"
                  className="w-full bg-luxury-gray text-luxury-dark border border-gray-300 py-3 uppercase tracking-[0.2em] text-xs font-bold hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 flex items-center justify-center gap-2 rounded-full"
                >
                  Search Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-luxury-gray py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-24">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative h-12 w-32 md:h-16 md:w-40 lg:h-24 lg:w-52 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
