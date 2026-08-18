import HeroSection from "./home/HeroSection";
import WhatWeDoSection from "./home/WhatWeDoSection";
import OfferingsSection from "./home/OfferingsSection";
import HowWeWorkSection from "./home/HowWeWorkSection";
import AudiencePathsSection from "./home/AudiencePathsSection";
import StackStrip from "./home/StackStrip";

// Narrative order: say what DigiConnect builds, show the three shapes that work
// takes, list the full offering, explain how the work is run, then route to the
// two audience pages. The closing CTA is deliberately absent — DigiConnectApp
// already renders ContactCmp below every non-contact route.
//
// Surfaces step monotonically down into that CTA:
// white -> near-white -> white -> near-white -> white -> sunken.
const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <OfferingsSection />
      <HowWeWorkSection />
      <AudiencePathsSection />
      <StackStrip />
    </>
  );
};

export default Home;
