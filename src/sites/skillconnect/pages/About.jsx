import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import AudienceSection from "./about/AudienceSection";

// Narrative order: state the positioning, explain why SkillConnect is its own
// brand and how it sits next to DigiConnect and EduConnect, then how it
// operates, then who qualifies. No closing CTA, because SkillConnectApp already
// renders ContactCmp below every non-contact route.
const About = () => {
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
