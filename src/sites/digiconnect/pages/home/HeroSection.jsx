import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { fadeIn } from "../../../../shared/variants";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import { hero } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { HERO_HEADING_SIZE } from "../../../../shared/headingSizes";

const HeroSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
          <motion.div
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
          >
            <Link
              to={hero.eyebrowHref}
              className="group inline-flex rounded-full border border-black/5 bg-neutral-100 transition-colors duration-300 ease-in hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <AnimatedShinyText className="mx-0 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-medium tracking-wide text-neutral-800/70">
                <span aria-hidden="true">✨</span>
                {hero.eyebrow}
                <ArrowRight
                  className="ml-0.5 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </AnimatedShinyText>
            </Link>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className={`max-w-4xl font-semibold text-neutral-900 ${HERO_HEADING_SIZE}`}
          >
            {hero.headingLead}
            <span className={ACCENT_CLASS}>{hero.headingAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-base leading-relaxed text-neutral-600"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            animate="show"
            className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link
              to={hero.primaryCta.href}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <GlazeSweep className="bg-white/30" />
              {hero.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <GlazeSweep className="bg-red-600/15" />
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
