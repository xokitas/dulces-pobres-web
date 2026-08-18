import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProductGrid from "@/components/ProductGrid";
import CustomOrderSection from "@/components/CustomOrderSection";
import ProcessGallery from "@/components/ProcessGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CartWidget from "@/components/CartWidget";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ProductGrid />
      <CustomOrderSection />
      <ProcessGallery />
      <TestimonialsSection />
      <Footer />
      <CartWidget />
    </main>
  );
}