import PageHeaderSection from "./services/PageHeaderSection";
import OfferingsListSection from "./services/OfferingsListSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: introduce the page as the expanded version of home's
// services section, then list all six in the same order home does. No
// closing CTA — DigiConnectApp already renders ContactCmp below every
// non-contact route.
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
