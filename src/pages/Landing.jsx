import HeroSection from "./home/HeroSection";
import TechStackSection from "./home/TechStackSection";
import IntroSection from "./home/IntroSection";
import VisionMissionSection from "./home/VisionMissionSection";
import PlatformsSection from "./home/PlatformsSection";
import ServicesSection from "./home/ServicesSection";
import CommitmentsSection from "./home/CommitmentsSection";
import FAQSection from "./home/FAQSection";
import LandingFooter from "./home/LandingFooter";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <TechStackSection />
      <IntroSection />
      <VisionMissionSection />
      <PlatformsSection />
      <ServicesSection />
      <CommitmentsSection />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
