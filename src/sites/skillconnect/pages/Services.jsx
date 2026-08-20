import PageHeaderSection from "./services/PageHeaderSection";
import ProgramsSection from "./services/ProgramsSection";
import HowItWorksSection from "./services/HowItWorksSection";

// Narrative order: introduce the three tracks, break each one down, then
// explain that they are run by the same team as client work (not a separate
// program). No closing CTA — SkillConnectApp already renders ContactCmp below
// every non-contact route.
const Services = () => {
  return (
    <>
      <PageHeaderSection />
      <ProgramsSection />
      <HowItWorksSection />
    </>
  );
};

export default Services;
