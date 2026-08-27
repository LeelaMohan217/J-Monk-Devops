import PageHeaderSection from "./services/PageHeaderSection";
import StatementSection from "./services/StatementSection";
import OfferingsListSection from "./services/OfferingsListSection";
import CtaSection from "./services/CtaSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Services = () => {
  useDocumentMeta(
    "Services | DigiConnect",
    "The homepage covers this in a few lines. Here are the same six services with what each one actually includes."
  );

  return (
    <>
      <PageHeaderSection />
      <StatementSection />
      <OfferingsListSection />
      <CtaSection />
    </>
  );
};

export default Services;
