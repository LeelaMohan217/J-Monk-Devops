import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";

// Narrative order: introduce DigiConnect, tell the origin story, then the
// operating values that explain how the work is run. No closing CTA —
// DigiConnectApp already renders ContactCmp below every non-contact route.
//
// This used to describe values covering "both a business and a student side".
// The student side is SkillConnect's, so this site is business only now.
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
