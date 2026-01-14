"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-white py-8 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <Link
          href="/"
          className="relative h-12 w-40 md:h-14 md:w-48 group cursor-pointer"
        >
          <Image
            src="/images/logo.webp"
            alt="Marci Metzger Logo"
            fill
            sizes="(max-width: 768px) 160px, 210px"
            className="object-contain brightness-0 invert group-hover:opacity-70 transition-opacity duration-300"
          />
        </Link>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
          <Link
            href="#listings"
            className="hover:text-luxury-gold transition-colors"
          >
            Listings
          </Link>
          <Link
            href="#about"
            className="hover:text-luxury-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="#our-services"
            className="hover:text-luxury-gold transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:text-luxury-gold transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="text-[10px] md:text-xs text-gray-600 font-light tracking-wide text-center md:text-right">
          &copy; {currentYear} Marci METZGER Homes.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
