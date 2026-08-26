import HeroSection from "./home/HeroSection";
import WhatWeDoSection from "./home/WhatWeDoSection";
import OfferingsSection from "./home/OfferingsSection";
import HowWeWorkSection from "./home/HowWeWorkSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta(
    "DigiConnect | JMonkDevops",
    "DigiConnect designs, builds, and maintains custom software, SaaS products, cloud infrastructure, and the integrations that hold them together. One team, from architecture through to production."
  );

  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <OfferingsSection />
      <HowWeWorkSection />
    </>
  );
};

export default Home;
