import PageHeaderSection from "./businessman/PageHeaderSection";
import OfferingsListSection from "./businessman/OfferingsListSection";

// Narrative order: introduce the page as the expanded version of home's
// offerings section, then list all six in the same order home does. No
// closing CTA — DigiConnectApp already renders ContactCmp below every
// non-contact route.
const Businessman = () => {
  return (
    <>
      <PageHeaderSection />
      <OfferingsListSection />
    </>
  );
};

export default Businessman;
