import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import GlobalNav from "./shared/components/GlobalNav";
import Navbar from "./shared/components/Navbar";
import GlobalFooter from "./shared/components/GlobalFooter";
import { digiConnectConfig } from "./sites/digiconnect/config";
import { skillConnectConfig } from "./sites/skillconnect/config";
import { eduConnectConfig } from "./sites/educonnect/config";

const NAV_OFFSET = 96;

const brandNavs = [
  { prefix: "/digiconnect", config: digiConnectConfig },
  { prefix: "/skillconnect", config: skillConnectConfig },
  { prefix: "/educonnect", config: eduConnectConfig },
];

const DigiConnectApp = lazy(() =>
  import("./sites/digiconnect/DigiConnectApp")
);
const SkillConnectApp = lazy(() =>
  import("./sites/skillconnect/SkillConnectApp")
);
const EduConnectApp = lazy(() =>
  import("./sites/educonnect/EduConnectApp")
);

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Wait a tick so the new route's content is in the DOM before we
    // measure it and scroll.
    const id = requestAnimationFrame(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          const target = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }
      }

      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(id);
  }, [location]);

  return null;
}

// All page chrome is rendered here, at the top level, so it persists across
// route changes instead of remounting with whichever page is active.
//
// GlobalNav is landing-only by design: brand pages get their own bar instead.
function SiteNav() {
  const location = useLocation();

  if (location.pathname === "/") return <GlobalNav />;

  const brand = brandNavs.find((entry) =>
    location.pathname.startsWith(entry.prefix)
  );
  if (!brand) return null;

  const {
    siteName,
    homeHref,
    navItems,
    navCtaLabel,
    navCtaHref,
    navMaxWidthClass,
  } = brand.config;

  return (
    <Navbar
      siteName={siteName}
      homeHref={homeHref}
      navItems={navItems}
      ctaLabel={navCtaLabel}
      ctaHref={navCtaHref}
      {...(navMaxWidthClass ? { maxWidthClass: navMaxWidthClass } : {})}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/digiconnect/*" element={<DigiConnectApp />} />
          <Route path="/skillconnect/*" element={<SkillConnectApp />} />
          <Route path="/educonnect/*" element={<EduConnectApp />} />
        </Routes>
      </Suspense>
      <GlobalFooter />
    </BrowserRouter>
  );
}

export default App;
