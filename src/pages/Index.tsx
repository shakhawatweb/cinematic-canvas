import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <CustomCursor />
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <FeaturedProjects />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
