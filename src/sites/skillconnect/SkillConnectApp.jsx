import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { skillConnectConfig } from "./config";

function SkillConnectApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/skillconnect/contact" && (
        <ContactCmp {...skillConnectConfig.contactCta} />
      )}
    </>
  );
}

export default SkillConnectApp;
