import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { fadeIn } from "../../../../shared/variants";
import { hero } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { HERO_HEADING_SIZE } from "../../../../shared/headingSizes";

const HeroSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
          {/* The one eyebrow on the site that is neither uppercase nor static.
              The other twelve are plain text-xs uppercase tracking-[0.2em]
              labels; this is Magic UI's shiny-text badge, so it is a deliberate
              exception for the home hero rather than a new eyebrow spec.

              Chrome is the badge from Magic UI's own demo: a pill with a hairline
              border-black/5 on bg-neutral-100, a sparkle, and an arrow that
              slides on group-hover. Two substitutions. The arrow is lucide's
              ArrowRight rather than the demo's radix icon, because every other
              CTA on this site already uses lucide and the two draw the glyph at
              different weights. And the demo's own `text-base text-white` on the
              pill is dropped: the white was dead (AnimatedShinyText sets its own
              colour) and the size is set below.

              It is a Link rather than a span because the arrow promises one.
              Pointing at the about page, not services: the label names the
              practice and that page is the one that defines it, and the two CTAs
              below already take contact and services, so this stays out of their
              way instead of giving the hero two routes to the same place.

              Tracking is down from 0.2em to tracking-wide. That much
              letterspacing exists to open up capitals; on lowercase it reads as
              broken.

              The motion wrapper is a separate element from the text on purpose:
              fadeIn animates opacity and transform out here while the shine
              animates background-position on the span inside, so the entrance
              and the sweep never contend for the same property.

              text-neutral-800/70 rather than the component's own
              text-neutral-600/70. The alpha is load-bearing and cannot go: the
              sweep is a gradient clipped to the glyphs with bg-clip-text, so it
              is only visible through the text colour's own transparency, and an
              opaque colour here would paint over it and show nothing. But 600 at
              70% resolves to roughly 3.6:1, which fails AA. Darkening the base to
              800 clears 4.5:1 against the pill's neutral-100 while leaving the
              same 30% window for the shine to come through. */}
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
                {/* Colour emoji paint their own glyph, so bg-clip-text leaves
                    this one alone and the sparkle keeps its gold while the words
                    beside it shimmer. Hidden from screen readers: it is
                    decoration, and announced it would just read "sparkles". */}
                <span aria-hidden="true">✨</span>
                {hero.eyebrow}
                <ArrowRight
                  className="ml-0.5 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </AnimatedShinyText>
            </Link>
          </motion.div>

          {/* The ramp shifted a step to make room above: 0.05 / 0.15 / 0.3 /
              0.45, matching the page headers' eyebrow-then-heading-then-lead
              timing rather than keeping the heading at the 0.05 it had when it
              was the first thing on the page. */}
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
            {/* Both carry the same ArrowRight the rest of the site's CTAs use,
                sliding on hover via the group class. */}
            <Link
              to={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {hero.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
