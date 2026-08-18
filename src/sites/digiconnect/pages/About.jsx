import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";

// Narrative order: introduce DigiConnect, tell the origin story, then the
// operating values that explain why the site has both a business and a
// student side. No closing CTA — DigiConnectApp already renders ContactCmp
// below every non-contact route.
const About = () => {
  return (
    <>
      <PageHeaderSection />
      <StorySection />
      <ValuesSection />
    </>
  );
};

export default About;
