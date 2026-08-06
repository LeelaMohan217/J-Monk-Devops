import { useEffect } from "react";
import HeroSection from "./home/HeroSection";
import CollaborationSection from "./home/CollaborationSection";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <HeroSection />
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
