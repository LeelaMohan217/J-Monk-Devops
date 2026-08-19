import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { hero } from "./data";
import heroCollageJpg from "../../assets/educonnect-hero1.jpg";
import heroCollageWebp from "../../assets/educonnect-hero1.webp";

// Light, editorial hero rather than the previous full-bleed dark photo: white
// background, copy on the left, a single photo on the right with a rating
// badge overlapping its bottom edge. Same shape as a lot of premium
// SaaS/course-platform heroes, adapted to this site's red accent and
// hairline-and-type vocabulary instead of that genre's usual blue/rounded
// look.
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

            <motion.h1
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="max-w-xl text-display-sm font-semibold text-neutral-900 sm:text-display-md"
            >
              {hero.headingLead}
              <span className="text-red-600">{hero.headingAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-lg text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {hero.lead}
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.3)}
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

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-wrap items-start gap-x-10 gap-y-6"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            {/* mb-8 clears the rating card, which overlaps past the
                photo's bottom edge — without it the card would sit flush
                against whatever section follows. */}
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-2xl border border-neutral-200">
                <picture>
                  <source type="image/webp" srcSet={heroCollageWebp} />
                  <img
                    src={heroCollageJpg}
                    alt="Student holding university admission documents at the airport"
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Rating card, deliberately no avatar photos: we don't have
                  real reviewer headshots, and fabricated ones would read
                  as fake testimonials rather than a genuine metric. */}
              <div className="absolute -bottom-8 left-4 right-4 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-surface px-4 py-3 shadow-lg sm:right-auto sm:w-fit">
                <div className="flex items-center gap-1.5 text-red-600">
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span className="text-lg font-semibold text-neutral-900">
                    {hero.rating.value}
                  </span>
                  <span className="text-xs text-neutral-400">
                    /{hero.rating.outOf}
                  </span>
                </div>
                <div className="h-8 w-px bg-neutral-200" aria-hidden="true" />
                <span className="text-xs font-medium text-neutral-500">
                  {hero.rating.source}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
