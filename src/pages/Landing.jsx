import HeroSection from "./home/HeroSection";
import DashboardGridSection from "./home/DashboardGridSection";
import CollaborationSection from "./home/CollaborationSection";
import IntroSection from "./home/IntroSection";
import VisionMissionSection from "./home/VisionMissionSection";
import PlatformsSection from "./home/PlatformsSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import FAQSection from "./home/FAQSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <DashboardGridSection />
      <CollaborationSection />
      <IntroSection />
      <VisionMissionSection />
      <PlatformsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
