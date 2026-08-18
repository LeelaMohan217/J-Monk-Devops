import PageHeaderSection from "./student/PageHeaderSection";
import ProgramsSection from "./student/ProgramsSection";
import HowItWorksSection from "./student/HowItWorksSection";

// Narrative order: introduce the three tracks, break each one down, then
// explain that they are run by the same team as client work (not a separate
// program). No closing CTA — DigiConnectApp already renders ContactCmp below
// every non-contact route.
const Student = () => {
  return (
    <>
      <PageHeaderSection />
      <ProgramsSection />
      <HowItWorksSection />
    </>
  );
};

export default Student;
