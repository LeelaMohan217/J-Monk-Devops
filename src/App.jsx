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

  // useLayoutEffect (not useEffect) so this runs synchronously right after
  // the new route's DOM commits but before the browser paints — otherwise
  // the new page briefly paints at the old scroll offset first (landing on
  // the persistent footer if you'd scrolled down) before jumping to top.
  useLayoutEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const target = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
      }
    }

    // index.html sets scroll-behavior: smooth on <html> for in-page anchor
    // links, but scrollTo's default "auto" behavior defers to that CSS
    // property — so without an explicit "instant" override here, this
    // reset would itself animate smoothly up from wherever the page was
    // scrolled, visibly scrolling past the footer instead of snapping to
    // the top instantly.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}

// All page chrome is rendered here, at the top level, so it persists across
// route changes instead of remounting with whichever page is active.
//
// GlobalNav is landing-only by design: brand pages get their own bar instead.
// It's also the fallback for a path matching no brand prefix at all (the
// top-level 404) — the alternative was no navbar whatsoever on that page.
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
      {/* fallback is not null: while a brand's lazy chunk is loading, an empty
          fallback collapses the routed content to nothing, so the footer
          (always mounted, below this boundary) rides up next to the navbar
          until the real page pops in and pushes it back down. A min-h-screen
          spacer keeps the footer off-screen for that gap instead. */}
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
