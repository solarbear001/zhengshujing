import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHero from "@/components/FloatingHero";
import PhotobookGrid from "@/components/PhotobookGrid";
import CustomCursor from "@/components/CustomCursor";

const Work = () => {
  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <FloatingHero />
        <PhotobookGrid />
      </main>
      <div className="h-16 bg-background" />
      <Footer />
    </div>
  );
};

export default Work;
