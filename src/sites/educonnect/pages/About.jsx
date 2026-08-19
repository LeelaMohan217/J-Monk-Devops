import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";

// Narrative order: introduce EduConnect, tell the origin story, then the
// concrete promises that explain how the guidance actually works. No
// closing CTA — EduConnectApp already renders ContactCmp below every
// non-contact route.
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
