import { motion } from "framer-motion";
import { CENTER_MARGIN } from "../../../../shared/motionConfig";
import heroImg from "../../assets/educonnect-hero1.jpg";
import heroWebp from "../../assets/educonnect-hero1.webp";

// Pure pacing beat between ServicesSection and WhyChooseSection — full-bleed
// photo, no text overlay, no CTA. Reuses the hero photo since it's the
// site's one genuinely travel/journey-themed image.
// A plain fade rather than the riseIn every other section uses: this is
// full-bleed, and 16px of travel on an edge-to-edge photo reads as the layout
// shifting rather than as an element arriving. It fires on the standard
// centre-line trigger all the same.
const BannerSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: CENTER_MARGIN }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-64 w-full overflow-hidden md:h-120"
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
