import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto -mt-10 bg-white shadow-2xl p-6 md:p-8 lg:p-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 items-center">
          <div className="relative h-96 w-full md:h-100 lg:h-125 group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-luxury-gold z-0 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative h-full w-full z-10 overflow-hidden shadow-lg">
              <Image
                src="/images/marci.png"
                alt="Marci Metzger"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-luxury-gold tracking-[0.2em] text-xs font-bold uppercase">
              Meet Your Realtor
            </h4>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-luxury-dark leading-tight">
              Marci Metzger
            </h2>

            <div className="w-24 h-1 bg-luxury-gold mx-auto md:mx-0"></div>

            <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
              REALTOR FOR NEARLY 3 DECADES!
              <br />
              <br />
              <span className="font-medium text-luxury-dark text-lg md:text-xl">
                206-919-6886
              </span>
            </p>

            <div className="pt-2 md:pt-4">
              <button className="px-8 py-3 bg-luxury-dark text-white text-xs md:text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300 shadow-md">
                Read Full Bio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}