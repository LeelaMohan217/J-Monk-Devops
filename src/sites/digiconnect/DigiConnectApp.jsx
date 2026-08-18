import { Routes, Route, useLocation } from "react-router-dom";
import ContactCmp from "../../shared/components/ContactCmp";
import Home from "./pages/Home";
import About from "./pages/About";
import Student from "./pages/Student";
import Businessman from "./pages/Businessman";
import Contact from "./pages/Contact";
import { digiConnectConfig } from "./config";

function DigiConnectApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="student" element={<Student />} />
        <Route path="businessman" element={<Businessman />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/digiconnect/contact" && (
        <ContactCmp {...digiConnectConfig.contactCta} />
      )}
    </>
  );
}

export default DigiConnectApp;
