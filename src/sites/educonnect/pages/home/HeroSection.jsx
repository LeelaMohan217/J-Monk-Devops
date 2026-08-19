import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { hero } from "./data";

// Same editorial hero pattern as DigiConnect's — masked grid backdrop,
// display type scale, surface tokens — so the two platforms read as one
// design system. Pattern id is namespaced per-site to avoid collisions.
const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_0px,black_420px,transparent_640px)]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          focusable="false"
        >
          <defs>
            <pattern
              id="educonnect-hero-grid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                className="stroke-neutral-400"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#educonnect-hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
          <motion.h1
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className="max-w-4xl text-display-sm font-semibold text-neutral-900 sm:text-display-md lg:text-display-lg"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
