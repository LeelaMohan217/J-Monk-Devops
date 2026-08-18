import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Landing from "./pages/Landing";
import GlobalNav from "./shared/components/GlobalNav";
import Navbar from "./shared/components/Navbar";
import SmoothScroll from "./shared/components/SmoothScroll";
import { digiConnectConfig } from "./sites/digiconnect/config";
import { skillConnectConfig } from "./sites/skillconnect/config";
import { eduConnectConfig } from "./sites/educonnect/config";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
    // Wait a tick so the new route's content is in the DOM before
    // ScrollTrigger recalculates bounds and we jump/scroll.
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      const smoother = ScrollSmoother.get();

      if (location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          const target = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          if (smoother) {
            smoother.scrollTo(target, true);
          } else {
            window.scrollTo({ top: target, behavior: "smooth" });
          }
          return;
        }
      }

      if (smoother) {
        smoother.scrollTo(0, false);
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => cancelAnimationFrame(id);
  }, [location]);

  return null;
}

// All fixed page chrome is rendered here, OUTSIDE <SmoothScroll>. ScrollSmoother
// sets a transform on #smooth-content, and a transformed ancestor becomes the
// containing block for position:fixed descendants — so a bar rendered inside the
// wrapper pins to the 5000px-tall content block and scrolls out of view instead
// of staying put. GlobalNav already lived out here; the brand navbars did not,
// which is why they disappeared on scroll.
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
      <SmoothScroll>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/digiconnect/*" element={<DigiConnectApp />} />
            <Route path="/skillconnect/*" element={<SkillConnectApp />} />
            <Route path="/educonnect/*" element={<EduConnectApp />} />
          </Routes>
        </Suspense>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
