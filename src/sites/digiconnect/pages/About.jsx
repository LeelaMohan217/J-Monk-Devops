import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: introduce DigiConnect, tell the origin story, then the
// operating values that explain how the work is run. No closing CTA —
// DigiConnectApp already renders ContactCmp below every non-contact route.
//
// This used to describe values covering "both a business and a student side".
// The student side is SkillConnect's, so this site is business only now.
const About = () => {
  useDocumentMeta(
    "About | DigiConnect",
    "DigiConnect is JMonkDevops' software and cloud engineering practice, run out of Guntur, Andhra Pradesh. We keep the group small enough that the people who scope your project are the same people who ship it."
  );

  return (
    <>
      <PageHeaderSection />
      <StorySection />
      <ValuesSection />
    </>
  );
};

export default About;
