export default function HeroSection() {
  return (
    <section className="relative h-dvh w-full flex items-center justify-center text-center px-4 md:px-8">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-white max-w-5xl mx-auto space-y-6 animate-fade-in-up mt-24 md:mt-0">
        <p className="text-[10px] md:text-sm lg:text-base uppercase tracking-[0.2em] md:tracking-[0.3em] text-luxury-gold font-medium">
          Welcome to Pahrump, Nevada
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          Exquisite Living <br />
          <span className="italic font-light">Defined.</span>
        </h1>

        <p className="text-sm md:text-lg lg:text-xl font-light text-gray-200 max-w-md md:max-w-2xl mx-auto px-4 md:px-0">
          Experience the finest luxury real estate services with Marci Metzger.
        </p>

        <div className="pt-6 md:pt-8">
          <button className="bg-transparent border border-white px-6 py-3 md:px-8 md:py-3 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-luxury-dark transition-all duration-300">
            View Properties
          </button>
        </div>
      </div>
    </section>
  );
}