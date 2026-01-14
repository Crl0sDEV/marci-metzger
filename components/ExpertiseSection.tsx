import Image from "next/image";

const services = [
  {
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    image: "/images/service-kitchen.jpg",
    align: "left",
  },
  {
    title: "Don't Just List it",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    image: "/images/service-house.jpg",
    align: "right",
  },
  {
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    image: "/images/service-keys.jpg",
    align: "left",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-16 md:py-20 lg:py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark">
            Get it Sold
          </h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-24 ${
              service.align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 relative group">
              <div
                className={`hidden md:block absolute top-4 w-full h-full border border-luxury-gold/30 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${
                  service.align === "right" ? "-right-4" : "-left-4"
                }`}
              ></div>

              <div className="relative h-64 md:h-80 lg:h-96 w-full z-10 overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif text-luxury-dark">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed font-light text-base md:text-base lg:text-lg">
                {service.description}
              </p>

              <button className="group inline-flex items-center text-luxury-gold text-xs md:text-sm uppercase tracking-widest font-bold hover:text-luxury-dark transition-colors mt-2 md:mt-4">
                Learn More
                <span className="ml-2 transform transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}