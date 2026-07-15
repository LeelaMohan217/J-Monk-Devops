import { Routes, Route } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import { skillConnectConfig } from "./config";

function SkillConnectApp() {
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
      </Routes>
      <ContactCmp {...skillConnectConfig.contactCta} />
      <Footer siteName={skillConnectConfig.siteName} {...skillConnectConfig.footer} />
    </>
  );
}

export default SkillConnectApp;
