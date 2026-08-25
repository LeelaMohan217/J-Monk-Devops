import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { hero } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { HERO_HEADING_SIZE } from "../../../../shared/headingSizes";

// Same shape as DigiConnect's home hero rather than EduConnect's: both of those
// are full-width and text-only because neither brand has photography, where
// EduConnect's splits into two columns around its hero image. SkillConnect has
// no assets folder at all, so a stock photo here would be filler.
const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Masked grid, the same backdrop the about and services headers on this
          site use. The pattern id is namespaced per section because more than
          one of them can mount in a single site. */}
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
              id="skillconnect-home-grid"
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
          <rect width="100%" height="100%" fill="url(#skillconnect-home-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
          {/* No eyebrow, unlike the inner page headers: the sub-navbar directly
              above already reads "SkillConnect", and the old hero's eyebrow was
              that word a second time. */}
          <motion.h1
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className={`max-w-4xl font-semibold text-neutral-900 ${HERO_HEADING_SIZE}`}
          >
            {hero.headingLead}
            <span className={ACCENT_CLASS}>{hero.headingAccent}</span>
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
            className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            {/* The secondary used to be a #offerings jump on this same page.
                It goes to the services page now, so both CTAs lead somewhere,
                matching DigiConnect. */}
            <Link
              to={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {hero.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {hero.secondaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
