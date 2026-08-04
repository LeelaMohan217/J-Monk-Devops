import HeroSection from "./home/HeroSection";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <PlatformsSection />
      <TestimonialsSection />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
