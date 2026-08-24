import PageHeaderSection from "./careers/PageHeaderSection";
import OpenRolesSection from "./careers/OpenRolesSection";

// A header and the openings, nothing between them. This page used to run
// PageHeader -> WhatItIsLike -> Tools -> OpenRoles, which put two prose sections
// and about four hundred words between arriving and finding out whether there
// was a job. Someone on a careers page is looking for a list.
//
// No closing CTA, because DigiConnectApp already renders ContactCmp below every
// non-contact route.
const Careers = () => {
  return (
    <>
      <PageHeaderSection />
      <OpenRolesSection />
    </>
  );
};

export default Careers;
