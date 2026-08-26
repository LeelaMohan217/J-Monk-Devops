import HeroSection from "./home/HeroSection";
import IntroSection from "./home/IntroSection";
import StatsSection from "./home/StatsSection";
import FAQSection from "./home/FAQSection";
import useDocumentMeta from "../shared/hooks/useDocumentMeta";

const Landing = () => {
  useDocumentMeta(
    "JMonkDevops | Digitalizing Local Bhaarat",
    "We build focused platforms that help businesses grow digitally, give students practical skills, and support individuals reaching global opportunities."
  );

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default Landing;
