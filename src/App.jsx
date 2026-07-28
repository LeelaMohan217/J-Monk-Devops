import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import GlobalNav from "./shared/components/GlobalNav";

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
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalNav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/digiconnect/*" element={<DigiConnectApp />} />
          <Route path="/skillconnect/*" element={<SkillConnectApp />} />
          <Route path="/educonnect/*" element={<EduConnectApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
