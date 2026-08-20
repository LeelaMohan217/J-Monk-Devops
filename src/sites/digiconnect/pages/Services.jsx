import PageHeaderSection from "./services/PageHeaderSection";
import OfferingsListSection from "./services/OfferingsListSection";

// Narrative order: introduce the page as the expanded version of home's
// services section, then list all six in the same order home does. No
// closing CTA — DigiConnectApp already renders ContactCmp below every
// non-contact route.
const Services = () => {
  return (
    <>
      <PageHeaderSection />
      <OfferingsListSection />
    </>
  );
};

export default Services;
