import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { skillConnectConfig } from "./config";

function SkillConnectApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/skillconnect/contact" && (
        <ContactCmp {...skillConnectConfig.contactCta} />
      )}
    </>
  );
}

export default SkillConnectApp;
