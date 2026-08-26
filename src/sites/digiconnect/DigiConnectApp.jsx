import { Routes, Route } from "react-router-dom";
import StatusPage from "../../shared/components/StatusPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { digiConnectConfig } from "./config";

function DigiConnectApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <StatusPage
              code="404"
              headingLead="This page doesn't exist."
              subtext="The link might be broken, or the page may have moved."
              ctaLabel="Back to DigiConnect"
              ctaHref={digiConnectConfig.homeHref}
            />
          }
        />
      </Routes>
    </>
  );
}

export default DigiConnectApp;
