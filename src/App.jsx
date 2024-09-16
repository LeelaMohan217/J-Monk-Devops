import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Student from "./pages/Student";
import Businessman from "./pages/Businessman";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactCmp from "./components/ContactCmp";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/businessman" element={<Businessman />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/contact" && <ContactCmp />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
