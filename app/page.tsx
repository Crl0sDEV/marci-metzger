import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SearchSection from "@/components/SearchSection";
import GallerySection from "@/components/GallerySection";
import OurServices from "@/components/OurServices";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ExpertiseSection />

      <SearchSection />

      <GallerySection />

      <OurServices />

      <ContactSection />

      <Footer />
    </main>
  );
}
