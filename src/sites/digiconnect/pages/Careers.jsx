import PageHeaderSection from "./careers/PageHeaderSection";
import WhatItIsLikeSection from "./careers/WhatItIsLikeSection";
import ToolsSection from "./careers/ToolsSection";
import OpenRolesSection from "./careers/OpenRolesSection";

// Narrative order: state the hiring constraint up front, explain what the work
// actually is, show what you would work in, then the openings. Openings sit
// last deliberately, since right now that section's honest answer is that there
// are none posted. No closing CTA, because DigiConnectApp already renders
// ContactCmp below every non-contact route.
const Careers = () => {
  return (
    <>
      <PageHeaderSection />
      <WhatItIsLikeSection />
      <ToolsSection />
      <OpenRolesSection />
    </>
  );
};

export default Careers;
