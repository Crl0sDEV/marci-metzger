"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Meet Marci", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Listings", href: "#listings" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#our-services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "py-4" : "py-6"
        } ${isScrolled ? "bg-luxury-white/95 backdrop-blur-md shadow-md text-luxury-dark" : "bg-transparent text-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative h-14 w-40 md:w-52 z-60">
            <Image
              src="/images/logo.webp"
              alt="Marci Metzger Logo"
              fill
              sizes="(max-width: 768px) 160px, 210px"
              className={`object-contain transition-all duration-300 ${
                !isScrolled && !isMobileMenuOpen ? "brightness-0 invert" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium hover:text-luxury-gold transition-colors duration-200 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-luxury-gold text-white px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-luxury-dark transition-colors">
              Work With Me
            </button>
          </div>

          <button
            className="lg:hidden z-60 focus:outline-none relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-luxury-dark" size={28} />
            ) : (
              <Menu className={isScrolled ? "text-luxury-dark" : "text-white"} size={28} />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              animation: "fadeIn 300ms ease-in-out",
            }}
          />

          <div
            className="fixed top-0 right-0 h-full w-[75%] md:w-[50%] max-w-100 bg-luxury-white text-luxury-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-28 px-8 space-y-6"
            style={{
              animation: "slideIn 300ms ease-in-out",
            }}
          >
            <button
              className="absolute top-8 right-6 lg:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="text-luxury-dark" size={28} />
            </button>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif tracking-wide border-b border-gray-100 pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <button
                className="w-full bg-luxury-dark text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work With Me
              </button>
            </div>
          </div>
        </>
      )}

    </>
  )
}
