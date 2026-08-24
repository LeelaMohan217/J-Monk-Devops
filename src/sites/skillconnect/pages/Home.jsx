import HeroSection from "./home/HeroSection";
import OfferingsSection from "./home/OfferingsSection";
import WhyUsSection from "./home/WhyUsSection";
import TracksSection from "./home/TracksSection";
import AudienceStrip from "./home/AudienceStrip";

// Narrative order: say what SkillConnect is, list what you get out of it, say
// why it is built that way, route to the three tracks on the services page, then
// close on who qualifies. The closing CTA is deliberately absent, since
// SkillConnectApp already renders ContactCmp below every non-contact route.
//
// Surfaces step monotonically down into that CTA:
// white -> near-white -> white -> near-white -> sunken.
const Home = () => {
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
