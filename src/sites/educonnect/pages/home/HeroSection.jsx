import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, User } from "lucide-react";
import { fadeIn, riseIn } from "../../../../shared/variants";
import { hero } from "./data";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import WordReveal from "../../../../shared/components/WordReveal";
import CountUp from "../../../../shared/components/CountUp";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import splitAccentHeading from "../../../../shared/splitAccentHeading";
import {
  HERO_CTA_DELAY,
  HERO_LEAD_DELAY,
  HERO_TAIL_DELAY,
  STEP,
  groupContainer,
} from "../../../../shared/motionConfig";
import heroPhotoWebp from "../../assets/educonnect-hero.webp";

const ACCENT_CLASS = "font-['Playfair_Display',serif] text-red-600 italic";

const headingLines = [splitAccentHeading(hero.headingLead, hero.headingAccent)];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-6 text-left lg:col-span-6">
            <motion.span
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate="show"
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              {hero.eyebrow}
            </motion.span>

            <h1
              className={`max-w-xl font-semibold text-neutral-900 ${PAGE_HEADING_SIZE}`}
            >
              <WordReveal lines={headingLines} accentClass={ACCENT_CLASS} />
            </h1>

            <motion.p
              variants={fadeIn("up", HERO_LEAD_DELAY)}
              initial="hidden"
              animate="show"
              className="max-w-lg text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {hero.lead}
            </motion.p>

            <motion.div
              variants={fadeIn("up", HERO_CTA_DELAY)}
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
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <GlazeSweep className="bg-white/30" />
                {hero.secondaryCta.label}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={groupContainer}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-wrap items-start gap-x-10 gap-y-6"
            >
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={riseIn(HERO_TAIL_DELAY + index * STEP)}
                >
                  <div className="font-['IBM_Plex_Mono',monospace] text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                    <CountUp
                      value={stat.value}
                      delay={HERO_TAIL_DELAY + index * STEP}
                    />
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)]">
                <img
                  src={heroPhotoWebp}
                  alt="Student holding university admission documents at the airport"
                  className="aspect-4/3 w-full object-cover"
                  width="1536"
                  height="1024"
                  decoding="async"
                />
              </div>

              <motion.div
                variants={riseIn(HERO_TAIL_DELAY)}
                initial="hidden"
                animate="show"
                className="absolute -bottom-8 left-1/2 w-fit -translate-x-1/2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-surface px-4 py-3 shadow-lg sm:left-4 sm:translate-x-0"
              >
                <div className="flex items-center gap-1.5 text-red-600">
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span className="font-['IBM_Plex_Mono',monospace] text-lg font-semibold text-neutral-900">
                    {hero.rating.value}
                  </span>
                  <span className="text-xs text-neutral-400">
                    /{hero.rating.outOf}
                  </span>
                </div>
                <div className="h-8 w-px bg-neutral-200" aria-hidden="true" />

                <div className="flex items-center">
                  <span className="sr-only">{hero.rating.source}</span>

                  <div
                    className="flex items-center -space-x-2"
                    aria-hidden="true"
                  >
                    {hero.rating.reviewers.map((reviewer, index) => (
                      <span
                        key={reviewer.name ?? index}
                        className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-neutral-100"
                      >
                        {reviewer.image ? (
                          <img
                            src={reviewer.image}
                            alt=""
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <User
                            className="h-3.5 w-3.5 text-neutral-400"
                            strokeWidth={1.75}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
