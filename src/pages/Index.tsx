import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <FeaturedWork />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
