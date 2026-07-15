import { Routes, Route } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import { eduConnectConfig } from "./config";

function EduConnectApp() {
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
      </Routes>
      <ContactCmp {...eduConnectConfig.contactCta} />
      <Footer siteName={eduConnectConfig.siteName} {...eduConnectConfig.footer} />
    </>
  );
}

export default EduConnectApp;
