import HeroSection from "./home/HeroSection";
import HeroImageSection from "./home/HeroImageSection";
import CollaborationSection from "./home/CollaborationSection";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <HeroImageSection />
      <CollaborationSection />
      <IntroSection />
      <PlatformsSection />
      <TestimonialsSection />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
