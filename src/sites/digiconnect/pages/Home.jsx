import HeroSection from "./home/HeroSection";
import WhatWeDoSection from "./home/WhatWeDoSection";
import OfferingsSection from "./home/OfferingsSection";
import HowWeWorkSection from "./home/HowWeWorkSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: say what DigiConnect builds, show the three shapes that work
// takes, list the full offering, then explain how the work is run. The closing
// CTA is deliberately absent — DigiConnectApp already renders ContactCmp below
// every non-contact route.
//
// Two sections that used to close this page are gone. "Where you fit" forked
// visitors between business enquiries and student programs, and the student
// programs are SkillConnect's now, which left it forking one way. StackStrip
// listed the technologies behind the work, which said more about us than about
// what a client gets.
//
// Surfaces step monotonically down into that CTA:
// white -> near-white -> white -> near-white.
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
