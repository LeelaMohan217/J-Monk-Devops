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
              The other twelve are text-xs uppercase tracking-[0.2em]; this one
              is lowercase and carries Magic UI's shiny sweep, so it is a
              deliberate exception for the home hero rather than a new spec.

              Two things follow from dropping `uppercase`. Tracking comes down
              from 0.2em to tracking-wide, because that much letterspacing is
              there to open up capitals and on lowercase it just looks broken.
              And the motion wrapper is now a separate element from the text:
              fadeIn animates opacity and transform on the wrapper while the
              shine animates background-position on the span inside, so the
              entrance and the sweep never touch the same property.

              text-neutral-800/70 rather than the component's own
              text-neutral-600/70. The alpha is load-bearing and cannot go: the
              sweep is a gradient clipped to the glyphs with bg-clip-text, so it
              is only visible through the text colour's own transparency, and an
              opaque colour here would paint over it and show nothing. But 600 at
              70% resolves to about #868686 on this white surface, roughly 3.5:1,
              which fails AA for 12px text. Darkening the base to 800 lands near
              #676767, about 5.3:1, and still leaves the same 30% window for the
              shine to come through. */}
          <motion.div
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
          >
            <AnimatedShinyText className="mx-0 text-xs font-medium tracking-wide text-neutral-800/70">
              {hero.eyebrow}
            </AnimatedShinyText>
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
