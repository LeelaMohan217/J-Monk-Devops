import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import StatusPage from "../../shared/components/StatusPage";
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
        <Route
          path="*"
          element={
            <StatusPage
              code="404"
              headingLead="This page doesn't exist."
              subtext="The link might be broken, or the page may have moved."
              ctaLabel="Back to SkillConnect"
              ctaHref={skillConnectConfig.homeHref}
            />
          }
        />
      </Routes>
      {location.pathname !== "/skillconnect/contact" && (
        <ContactCmp {...skillConnectConfig.contactCta} />
      )}
    </>
  );
}

export default SkillConnectApp;
