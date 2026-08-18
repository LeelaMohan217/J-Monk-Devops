import HeroSection from "./home/HeroSection";
import AudienceRouter from "./home/AudienceRouter";
import IntroSection from "./home/IntroSection";
import PlatformsSection from "./home/PlatformsSection";
import CommitmentsSection from "./home/CommitmentsSection";
import TechStackSection from "./home/TechStackSection";
import FAQSection from "./home/FAQSection";
import ContactCTA from "./home/ContactCTA";
import LandingFooter from "./home/LandingFooter";

// Narrative order: who are we -> where do I belong -> why does J-Monk exist ->
// what do the verticals do -> why are they connected -> how do you work ->
// can you deliver -> what questions do I have -> what do I do next.
// Proof and Team sections are intentionally absent: there is no real proof or
// team data yet, and neither will be fabricated.
const Landing = () => {
  return (
    <div>
      <HeroSection />
      <AudienceRouter />
      <IntroSection />
      <PlatformsSection />
      <CommitmentsSection />
      <TechStackSection />
      <ContactCTA />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
