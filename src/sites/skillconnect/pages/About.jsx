import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import AudienceSection from "./about/AudienceSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: state the positioning, explain why SkillConnect is its own
// brand and how it sits next to DigiConnect and EduConnect, then how it
// operates, then who qualifies. No closing CTA, because SkillConnectApp already
// renders ContactCmp below every non-contact route.
const About = () => {
  useDocumentMeta(
    "About | SkillConnect",
    "SkillConnect is the learning side of JMonkDevops, run out of Guntur, Andhra Pradesh. It exists so students and career-switchers can get onto real project work instead of collecting another certificate."
  );

  return (
    <>
      <PageHeaderSection />
      <StorySection />
      <ValuesSection />
      <AudienceSection />
    </>
  );
};

export default About;
