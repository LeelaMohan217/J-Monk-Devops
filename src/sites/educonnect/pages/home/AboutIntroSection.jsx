import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { aboutIntro } from "./data";
import introImg from "../../assets/educonnect-intro.png";

// "Who We Are" intro: photo left, copy + CTA right.
//
// The photo is now this section's own, a counselling session with the
// destination map on screen, rather than the blog thumbnail it borrowed while
// the project had no dedicated photography.
//
// The grid previously declared only `grid gap-6`, with no column template for
// the `lg:col-span-5` / `lg:col-start-7` the children were asking for. The
// implicit grid then sized the first six tracks from content, and since the
// photo's frame is aspect-ratio driven with no intrinsic width it collapsed to
// nothing: the image was rendering at 94x94px on desktop. Declaring the twelve
// columns the children were always written against restores the intended
// two-column split.
const AboutIntroSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24 border-t">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Two equal halves on a 32px gutter, rather than a 12-track grid on a
            64px one. With twelve columns at gap-16 the eleven gutters ate 704 of
            the rail's 1265px, leaving each track 41px, so a five-column photo
            came out at 461px against 568px of copy. Equal columns on a smaller
            gutter give the photo 616px and match the two sides. */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* The photo keeps its own trigger. Below lg it stacks above the copy
              and the two never reach the centre line together. */}
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            className="relative"
          >
            {/* Stacked it holds 4:3, the source's own ratio. From lg the frame
                drops the fixed ratio and fills the row instead (h-full against
                the grid's default stretch), so the photo ends up exactly as tall
                as the copy beside it. object-cover then trims the top and bottom
                rather than the sides, which is the safe axis here: the student
                and the counsellor sit at opposite edges of the frame. */}
            <div className="aspect-4/3 overflow-hidden rounded-xl border border-neutral-200 lg:aspect-auto lg:h-full">
              <img
                src={introImg}
                alt="An EduConnect counsellor going through university options with a student"
                width="2400"
                height="1792"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Eyebrow, heading, paragraph, button: four beats on one trigger, so
              the sequence survives the reader stopping mid-section. The delays
              are written out per child rather than left to staggerChildren,
              because riseIn always emits its own `delay` and a child's explicit
              delay overrides the one a parent computes. */}
          <motion.div
            variants={groupContainer}
            {...centerTrigger}
            className="flex flex-col items-start justify-center"
          >
            {/* inline-block because riseIn animates y, and a transform does
                nothing to a plain inline element: this would only fade. */}
            <motion.span
              variants={riseIn(0)}
              className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              {aboutIntro.eyebrow}
            </motion.span>

            <motion.h2
              variants={riseIn(STEP)}
              // leading-[1.1] rather than leading-tight (1.25): at 48px that
              // was a 12px gap between the two lines of this heading, which
              // read as two separate statements rather than one sentence.
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-900"
            >
              {aboutIntro.headingLead}
              <span className="font-['Playfair_Display',serif] text-red-600 italic">
                {aboutIntro.headingAccent}
              </span>
            </motion.h2>

            <motion.p
              variants={riseIn(STEP * 2)}
              className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {aboutIntro.paragraph}
            </motion.p>

            {/* Text link rather than a filled pill. The red button competed with
                the section heading's red accent for the eye, and this is a
                secondary route to the about page, not the page's main action.
                Underline appears on hover so the resting state stays quiet, and
                the arrow slides the same distance the site's other text CTAs
                move theirs.

                decoration-1 / underline-offset-4 keep the rule off the
                descenders; without the offset it cuts through the 'y' in
                "Know more about us". */}
            <motion.div variants={riseIn(STEP * 3)} className="mt-8 w-fit">
              <Link
                to={aboutIntro.cta.href}
                className="group inline-flex items-center gap-2 py-1 text-sm font-medium text-neutral-900 underline-offset-4 transition-colors duration-300 hover:text-red-700 hover:underline hover:decoration-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {aboutIntro.cta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
