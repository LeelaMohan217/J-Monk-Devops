import PageHeaderSection from "./contact/PageHeaderSection";
import ContactSection from "./contact/ContactSection";
import MapSection from "./contact/MapSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Contact = () => {
  useDocumentMeta(
    "Contact | DigiConnect",
    "Send a few lines about what you're building or trying to fix and we'll get back to you directly. No account manager in between."
  );

  return (
    <>
      <PageHeaderSection />
      <ContactSection />
    </>
  );
};

export default Contact;
