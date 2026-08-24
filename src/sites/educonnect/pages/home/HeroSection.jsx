import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { fadeIn, riseIn } from "../../../../shared/variants";
import { hero } from "./data";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import WordReveal from "../../../../shared/components/WordReveal";
import CountUp from "../../../../shared/components/CountUp";
import splitAccentHeading from "../../../../shared/splitAccentHeading";
import {
  HERO_CTA_DELAY,
  HERO_LEAD_DELAY,
  HERO_TAIL_DELAY,
  STEP,
  groupContainer,
} from "../../../../shared/motionConfig";
// 1536px wide, encoded down from the 2.1MB educonnect-hero.png master that sits
// beside them. The previous pair was 735px for a slot that renders ~590px, so it
// was soft on any retina screen.
import heroPhotoJpg from "../../assets/educonnect-hero.jpg";
import heroPhotoWebp from "../../assets/educonnect-hero.webp";

const ACCENT_CLASS = "font-['Playfair_Display',serif] text-red-600 italic";

// One line, not two: unlike the umbrella landing hero this heading sits in a
// half-width column and wraps differently at every breakpoint, so forcing a
// break at a chosen word would leave an orphan at some of them.
const headingLines = [splitAccentHeading(hero.headingLead, hero.headingAccent)];

// Redesign pass: notched bottom-right corner on the photo is the site's one
// signature shape (see also ValuesSection's about portrait, if any, and the
// About page) — a literal turn in the path, echoing "shortlist to offer
// letter." Buttons are pill-shaped everywhere now instead of rounded-lg.
// Eyebrow and stat values switch to IBM Plex Mono, paired against Inter for
// headings/body, so numbers and labels read as precise/data-like rather than
// decorative — the type pairing this redesign is built around.
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
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500"
            >
              {hero.eyebrow}
            </motion.span>

            {/* PAGE_HEADING_SIZE, not HERO_HEADING_SIZE: this hero is split
                two-column from lg up, so the heading never gets more than half
                the rail and stops one step below the full-width heroes.

                The h1 itself no longer animates. Its words each lift out of
                their own mask instead, the same reveal the landing hero uses;
                a fadeIn here would slide the finished block on top of that. */}
            <h1
              className={`max-w-xl font-semibold text-neutral-900 ${PAGE_HEADING_SIZE}`}
            >
              <WordReveal lines={headingLines} accentClass={ACCENT_CLASS} />
            </h1>

            {/* Lead and CTAs wait for the last heading word to land, rather than
                the 0.2/0.3 they used to run at, which put them in motion while
                the heading was still arriving. */}
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
              className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            {/* The tail of the hero's entrance, like the platform cards on the
                landing page: last in, and rippling left to right on the index
                step rather than arriving as one block. The three sit in a row at
                every width, so they share this one mount timing. */}
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
                  {/* Counts up on the same delay its tile rises on. `start` is
                      left at its default: this is a hero, so it is mount-timed
                      rather than scroll-triggered, and there is no in-view
                      trigger to wait for the way the landing page's tiles have.

                      No tabular-nums here, unlike those tiles: IBM Plex Mono is
                      monospaced (as is its fallback), so the digits already hold
                      one width and the row cannot reflow as the number runs. */}
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

          {/* Deliberately early, alongside the heading, rather than waiting its
              turn in the reading order. It is its own column and half the hero's
              area at lg, so holding it back to the tail delay would leave the
              right side of the screen empty for over a second. */}
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
              {/* Notched bottom-right corner, 40px bite — the site's
                  signature shape, a literal turn in the frame. clip-path
                  clips the whole painted box, border included, so a plain
                  border still reads correctly along the cut edge. */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)]">
                <picture>
                  <source type="image/webp" srcSet={heroPhotoWebp} />
                  <img
                    src={heroPhotoJpg}
                    alt="Student holding university admission documents at the airport"
                    className="aspect-4/3 w-full object-cover"
                    width="1536"
                    height="1024"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Rating card, deliberately no avatar photos: we don't have
                  real reviewer headshots, and fabricated ones would read
                  as fake testimonials rather than a genuine metric.

                  Timed with the stat row, not with the photo it sits on: the
                  two are the hero's proof points, so they land together as the
                  last beat even though they are in different columns. */}
              <motion.div
                variants={riseIn(HERO_TAIL_DELAY)}
                initial="hidden"
                animate="show"
                className="absolute -bottom-8 left-4 right-4 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-surface px-4 py-3 shadow-lg sm:right-auto sm:w-fit"
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

                {/* Reviewer avatars, in place of the "Google Reviews" label.
                    Overlapping circles via -space-x-2, each ringed in the card's
                    own surface colour so the row reads as a stack rather than as
                    separate dots.

                    The source string moves to sr-only rather than being dropped:
                    faces carry no provenance, so without it a screen reader
                    would hear a bare 4.8 with nothing saying where it came
                    from. */}
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
