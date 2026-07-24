import HeroSection from "./home/HeroSection";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import CapabilitiesSection from "./home/CapabilitiesSection";
import ProcessSection from "./home/ProcessSection";
import TestimonialsSection from "./home/TestimonialsSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <PlatformsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
