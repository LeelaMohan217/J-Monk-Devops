import HeroSection from "./home/HeroSection";
import TrustMarquee from "./home/TrustMarquee";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import CapabilitiesSection from "./home/CapabilitiesSection";
import ProcessSection from "./home/ProcessSection";
import TestimonialsSection from "./home/TestimonialsSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <TrustMarquee />
      <IntroSection />
      <PlatformsSection />
      <WhyChooseUsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
