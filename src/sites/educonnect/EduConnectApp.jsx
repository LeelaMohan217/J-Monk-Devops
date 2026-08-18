import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { eduConnectConfig } from "./config";

function EduConnectApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/educonnect/contact" && (
        <ContactCmp {...eduConnectConfig.contactCta} />
      )}
    </>
  );
}

export default EduConnectApp;
