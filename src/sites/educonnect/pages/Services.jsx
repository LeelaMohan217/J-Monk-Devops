import PageHeaderSection from "./services/PageHeaderSection";
import ServicesListSection from "./services/ServicesListSection";
import ProcessSection from "./services/ProcessSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Services = () => {
  useDocumentMeta(
    "Services | EduConnect",
    "From your first shortlist to your first week abroad, here's where EduConnect helps."
  );

  return (
    <>
      <PageHeaderSection />
      <ServicesListSection />
      <ProcessSection />
    </>
  );
};

export default Services;
