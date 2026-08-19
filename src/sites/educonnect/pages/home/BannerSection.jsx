import { motion } from "framer-motion";
import heroImg from "../../assets/educonnect-hero1.jpg";
import heroWebp from "../../assets/educonnect-hero1.webp";

// Pure pacing beat between ServicesSection and WhyChooseSection — full-bleed
// photo, no text overlay, no CTA. Reuses the hero photo since it's the
// site's one genuinely travel/journey-themed image.
const BannerSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="h-64 w-full overflow-hidden md:h-80"
    >
      <picture>
        <source type="image/webp" srcSet={heroWebp} />
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </motion.section>
  );
};

export default BannerSection;
