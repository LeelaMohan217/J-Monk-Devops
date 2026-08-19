import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import { eduConnectConfig } from "./config";

function EduConnectApp() {
  const location = useLocation();

  return (
    // Geist scoped to EduConnect's own route tree via font-family
    // inheritance, rather than touching the shared --font-sans token (which
    // would silently reskin DigiConnect/SkillConnect too). Same pattern
    // already used for IBM Plex Mono, just cascading instead of per-element.
    <div className="font-['Geist',ui-sans-serif,system-ui,sans-serif]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/educonnect/contact" && (
        <ContactCmp {...eduConnectConfig.contactCta} />
      )}
    </div>
  );
}

export default EduConnectApp;
