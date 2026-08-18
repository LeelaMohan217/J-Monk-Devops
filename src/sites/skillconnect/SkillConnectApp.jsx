import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { skillConnectConfig } from "./config";

function SkillConnectApp() {
  const location = useLocation();

  return (
    <>
      <Navbar
        siteName={skillConnectConfig.siteName}
        homeHref={skillConnectConfig.homeHref}
        navItems={skillConnectConfig.navItems}
        ctaLabel={skillConnectConfig.navCtaLabel}
        ctaHref={skillConnectConfig.navCtaHref}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/skillconnect/contact" && (
        <ContactCmp {...skillConnectConfig.contactCta} />
      )}
      <Footer siteName={skillConnectConfig.siteName} {...skillConnectConfig.footer} />
    </>
  );
}

export default SkillConnectApp;
