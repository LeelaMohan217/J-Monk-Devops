import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { eduConnectConfig } from "./config";

function EduConnectApp() {
  const location = useLocation();

  return (
    <>
      <Navbar
        siteName={eduConnectConfig.siteName}
        homeHref={eduConnectConfig.homeHref}
        navItems={eduConnectConfig.navItems}
        ctaLabel={eduConnectConfig.navCtaLabel}
        ctaHref={eduConnectConfig.navCtaHref}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/educonnect/contact" && (
        <ContactCmp {...eduConnectConfig.contactCta} />
      )}
      <Footer siteName={eduConnectConfig.siteName} {...eduConnectConfig.footer} />
    </>
  );
}

export default EduConnectApp;
