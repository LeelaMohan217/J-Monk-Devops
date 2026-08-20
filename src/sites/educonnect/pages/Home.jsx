import HeroSection from "./home/HeroSection";
import AboutIntroSection from "./home/AboutIntroSection";
import ServicesSection from "./home/ServicesSection";
import BannerSection from "./home/BannerSection";
import TestimonialsSection from "./home/TestimonialsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <ServicesSection />
      <BannerSection />
      {/* <WhyChooseSection /> */}
      <TestimonialsSection />
    </>
  );
};

export default Home;
