import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { aboutIntro } from "./data";
import introImg from "../../assets/blog/best-management-usa.jpg";

// "Who We Are" intro: photo left, copy + CTA right, a stat card floating
// over the photo's bottom-right corner. Reuses a blog post photo (people
// together in a professional setting) since the project has no dedicated
// "students collaborating" photography yet.
const AboutIntroSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24 border-t">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-6">
          {/* The photo keeps its own trigger. It is nearly a full screen tall on
              its own, so it and the copy below it never reach the centre line at
              the same moment. */}
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            className="relative lg:col-span-5"
          >
            <div className="aspect-5/5 overflow-hidden rounded-xl border border-neutral-200">
              <img
                src={introImg}
                alt="EduConnect counsellors working with students"
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
            className="lg:col-span-6 lg:col-start-7 flex flex-col items-start"
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
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900"
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

            <motion.div variants={riseIn(STEP * 3)} className="mt-8 w-fit">
              <Link
                to={aboutIntro.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {aboutIntro.cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
