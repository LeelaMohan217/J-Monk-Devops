import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import { hero } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import heroPhotoJpg from "../../assets/digiconnect-hero.jpg";
import heroPhotoWebp from "../../assets/digiconnect-hero.webp";

const HeroSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-6 text-left lg:col-span-6">
            <motion.div
              variants={fadeIn("up", 0.05)}
              initial="hidden"
              animate="show"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              animate="show"
              className={`max-w-xl font-semibold text-neutral-900 ${PAGE_HEADING_SIZE}`}
            >
              {hero.headingLead}
              <span className={`${ACCENT_CLASS} whitespace-nowrap`}>{hero.headingAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-lg text-base leading-relaxed text-neutral-600"
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
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <div className="group overflow-hidden rounded-2xl border border-neutral-200">
              <picture>
                <source type="image/webp" srcSet={heroPhotoWebp} />
                <img
                  src={heroPhotoJpg}
                  alt="DigiConnect engineers reviewing a software project"
                  className="aspect-5/4 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width="1000"
                  height="800"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
