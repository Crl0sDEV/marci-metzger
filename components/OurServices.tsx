"use client";

import Image from "next/image";

const services = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: "/images/service-1.webp",
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: "/images/service-2.webp",
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: "/images/service-3.webp",
  },
];

export default function OurServices() {
  return (
    <section
      id="our-services"
      className="py-16 md:py-24 bg-luxury-gray border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-luxury-dark">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 justify-center items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-6 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white transition-all duration-500 group-hover:border-luxury-gold group-hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4 max-w-xs md:max-w-sm text-center">
                <h3 className="text-xl md:text-2xl font-serif text-luxury-dark group-hover:text-luxury-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}