import HeroSection from "./home/HeroSection";
import WhatWeDoSection from "./home/WhatWeDoSection";
import OfferingsSection from "./home/OfferingsSection";
import HowWeWorkSection from "./home/HowWeWorkSection";
import StackStrip from "./home/StackStrip";

// Narrative order: say what DigiConnect builds, show the three shapes that work
// takes, list the full offering, then explain how the work is run. The closing
// CTA is deliberately absent — DigiConnectApp already renders ContactCmp below
// every non-contact route.
//
// The "Where you fit" section that used to sit before StackStrip is gone. It
// existed to fork visitors between business enquiries and student programs, and
// the student programs are SkillConnect's now, which left it forking one way.
//
// Surfaces step monotonically down into that CTA:
// white -> near-white -> white -> near-white -> sunken.
const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <OfferingsSection />
      <HowWeWorkSection />
      <StackStrip />
    </>
  );
};

export default Home;
