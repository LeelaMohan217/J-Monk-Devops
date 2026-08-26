import HeroSection from "./home/HeroSection";
import OfferingsSection from "./home/OfferingsSection";
import WhyUsSection from "./home/WhyUsSection";
import TracksSection from "./home/TracksSection";
import AudienceStrip from "./home/AudienceStrip";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta(
    "SkillConnect | JMonkDevops",
    "A hands-on learning ecosystem where students, freshers, and career-switchers gain industry exposure, real-world experience, and career-building opportunities beyond traditional education."
  );

  return (
    <>
      <HeroSection />
      <OfferingsSection />
      <WhyUsSection />
      <TracksSection />
      <AudienceStrip />
    </>
  );
};

export default Home;
