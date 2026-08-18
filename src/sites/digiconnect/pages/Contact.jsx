import PageHeaderSection from "./contact/PageHeaderSection";
import ContactSection from "./contact/ContactSection";
import MapSection from "./contact/MapSection";

// DigiConnectApp does not render ContactCmp on this route, so this page
// carries its own conversion path end to end.
const Contact = () => {
  return (
    <>
      <PageHeaderSection />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default Contact;
