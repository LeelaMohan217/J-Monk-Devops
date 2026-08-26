import PageHeaderSection from "./services/PageHeaderSection";
import OfferingsListSection from "./services/OfferingsListSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Services = () => {
  useDocumentMeta(
    "Services | DigiConnect",
    "The homepage covers this in a few lines. Here are the same six services with what each one actually includes."
  );

  return (
    <>
      <PageHeaderSection />
      <OfferingsListSection />
    </>
  );
};

export default Services;
