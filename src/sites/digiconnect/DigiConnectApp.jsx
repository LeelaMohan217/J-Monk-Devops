import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { digiConnectConfig } from "./config";

// Routes that render no closing CTA banner.
//
// Contact is obvious: the page is the form the banner points at.
//
// Careers is here because the banner's copy is "Tell us what you are trying to
// build", which is addressed to a prospective client. On a page someone is
// reading to find a job, it answers a question they did not ask. That page has
// its own CTA, "Send us your work", which is the candidate equivalent.
const ROUTES_WITHOUT_CONTACT_CTA = [
  "/digiconnect/contact",
  "/digiconnect/careers",
];

function DigiConnectApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {!ROUTES_WITHOUT_CONTACT_CTA.includes(location.pathname) && (
        <ContactCmp {...digiConnectConfig.contactCta} />
      )}
    </>
  );
}

export default DigiConnectApp;
