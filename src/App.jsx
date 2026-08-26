import { Suspense, lazy, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Landing from "./pages/Landing";
import StatusPage from "./shared/components/StatusPage";
import GlobalNav from "./shared/components/GlobalNav";
import Navbar from "./shared/components/Navbar";
import MobileNavMenu from "./shared/components/MobileNavMenu";
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

  useLayoutEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const target = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}

function SiteNav() {
  const location = useLocation();

  const brand = brandNavs.find((entry) =>
    location.pathname.startsWith(entry.prefix)
  );
  if (!brand) return <GlobalNav />;

  const {
    siteName,
    homeHref,
    navItems,
    navCtaLabel,
    navCtaHref,
    navMaxWidthClass,
    navVariant,
    navCtaArrow,
  } = brand.config;

  return (
    <Navbar
      siteName={siteName}
      homeHref={homeHref}
      navItems={navItems}
      ctaLabel={navCtaLabel}
      ctaHref={navCtaHref}
      {...(navMaxWidthClass ? { maxWidthClass: navMaxWidthClass } : {})}
      {...(navVariant ? { variant: navVariant } : {})}
      {...(navCtaArrow
        ? {
            ctaAdornment: (
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            ),
          }
        : {})}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteNav />
      <MobileNavMenu />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/digiconnect/*" element={<DigiConnectApp />} />
          <Route path="/skillconnect/*" element={<SkillConnectApp />} />
          <Route path="/educonnect/*" element={<EduConnectApp />} />
          <Route
            path="*"
            element={
              <StatusPage
                code="404"
                headingLead="This page doesn't exist."
                subtext="The link might be broken, or the page may have moved. Let's get you back on track."
                ctaLabel="Back to JMonkDevops"
                ctaHref="/"
              />
            }
          />
        </Routes>
      </Suspense>
      <GlobalFooter />
    </BrowserRouter>
  );
}

export default App;
