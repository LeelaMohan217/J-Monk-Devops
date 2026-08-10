import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Landing from "./pages/Landing";
import GlobalNav from "./shared/components/GlobalNav";
import SmoothScroll from "./shared/components/SmoothScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const NAV_OFFSET = 96;

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

function LandingOnlyGlobalNav() {
  const location = useLocation();
  return location.pathname === "/" ? <GlobalNav /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LandingOnlyGlobalNav />
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
