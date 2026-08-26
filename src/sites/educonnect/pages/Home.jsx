import HeroSection from "./home/HeroSection";
import AboutIntroSection from "./home/AboutIntroSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta(
    "EduConnect | JMonkDevops",
    "EduConnect pairs every student with a dedicated counsellor for university selection, applications, visas, and the practical work of settling in abroad. One team from start to finish."
  );

  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
