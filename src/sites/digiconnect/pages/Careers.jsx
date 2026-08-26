import PageHeaderSection from "./careers/PageHeaderSection";
import OpenRolesSection from "./careers/OpenRolesSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Careers = () => {
  useDocumentMeta(
    "Careers | DigiConnect",
    "We take on a limited number of engagements at a time, which shapes how we hire more than anything else does."
  );

  return (
    <>
      <PageHeaderSection />
      <OpenRolesSection />
    </>
  );
};

export default Careers;
