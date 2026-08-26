import { Routes, Route } from "react-router-dom";
import StatusPage from "../../shared/components/StatusPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import { eduConnectConfig } from "./config";

function EduConnectApp() {
  return (
    <div className="font-['Geist',ui-sans-serif,system-ui,sans-serif]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <StatusPage
              code="404"
              headingLead="This page doesn't exist."
              subtext="The link might be broken, or the page may have moved."
              ctaLabel="Back to EduConnect"
              ctaHref={eduConnectConfig.homeHref}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default EduConnectApp;
