import HeroSection from "./home/HeroSection";
import AboutIntroSection from "./home/AboutIntroSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// The full-bleed photo band that used to sit between the services grid and the
// testimonials is gone. It carried the same airport photo as the hero, so the
// page showed one image twice, and it was a pacing beat rather than content.
//
// The closing CTA is deliberately absent here: EduConnectApp renders ContactCmp
// below every non-contact route.
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
