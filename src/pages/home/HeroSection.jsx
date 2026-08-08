import { motion } from "framer-motion";
import { fadeIn } from "../../shared/variants";

const wordReveal = (delay) => ({
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="relative z-10 w-full px-6 md:px-8 flex items-center justify-start">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-6xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] sm:leading-[1.05] lg:whitespace-nowrap">
            <span className="block sm:inline-block overflow-hidden align-bottom">
              <motion.span
                className="block"
                variants={wordReveal(0)}
                initial="hidden"
                animate="show"
              >
                Digitalizing
              </motion.span>
            </span>{' '}
            <span className="block sm:inline-block overflow-hidden align-bottom">
              <motion.span
                className="block"
                variants={wordReveal(0.45)}
                initial="hidden"
                animate="show"
              >
                Local
              </motion.span>
            </span>{' '}
            <span className="block sm:inline-block overflow-hidden align-bottom">
              <motion.span
                className="block font-playfair italic"
                variants={wordReveal(0.9)}
                initial="hidden"
                animate="show"
              >
                Bharath
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="max-w-md sm:max-w-lg text-base text-neutral-600 leading-relaxed"
            variants={fadeIn("up", 1.35)}
            initial="hidden"
            animate="show"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills, and support individuals reaching global
            opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
