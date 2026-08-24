import HeroSection from "./home/HeroSection";
import AboutIntroSection from "./home/AboutIntroSection";
import ServicesSection from "./home/ServicesSection";
import TestimonialsSection from "./home/TestimonialsSection";

// The full-bleed photo band that used to sit between the services grid and the
// testimonials is gone. It carried the same airport photo as the hero, so the
// page showed one image twice, and it was a pacing beat rather than content.
//
// The closing CTA is deliberately absent here: EduConnectApp renders ContactCmp
// below every non-contact route.
const Home = () => {
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
