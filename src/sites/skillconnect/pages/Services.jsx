import PageHeaderSection from "./services/PageHeaderSection";
import ProgramsSection from "./services/ProgramsSection";
import HowItWorksSection from "./services/HowItWorksSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: introduce the three tracks, break each one down, then
// explain that they are run by the same team as client work (not a separate
// program). No closing CTA — SkillConnectApp already renders ContactCmp below
// every non-contact route.
const Services = () => {
  useDocumentMeta(
    "Services | SkillConnect",
    "SkillConnect runs three tracks for people moving into software development: an internship placed on live client work, freelancing project work you take on directly, and training that gets you ready for either."
  );

  return (
    <>
      <PageHeaderSection />
      <ProgramsSection />
      <HowItWorksSection />
    </>
  );
};

export default Services;
