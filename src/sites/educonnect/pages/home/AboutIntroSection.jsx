import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { aboutIntro } from "./data";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import introImg from "../../assets/educonnect-intro.webp";

const AboutIntroSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24 border-t">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
          <motion.div
            variants={groupContainer}
            {...centerTrigger}
            className="flex flex-col items-start lg:col-start-2 lg:row-start-1"
          >
            <motion.span
              variants={fadeIn("up", 0)}
              className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              {aboutIntro.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeIn("up", STEP)}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-800"
            >
              {aboutIntro.headingLead}
              <span className="font-['Playfair_Display',serif] text-red-600 italic">
                {aboutIntro.headingAccent}
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0)}
            {...centerTrigger}
            className="relative lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
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

          <motion.div
            variants={groupContainer}
            {...centerTrigger}
            className="flex flex-col items-start lg:col-start-2 lg:row-start-2"
          >
            <motion.p
              variants={fadeIn("up", 0)}
              className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {aboutIntro.paragraph}
            </motion.p>

            <motion.div variants={fadeIn("up", STEP)} className="mt-8 w-fit">
              <Link
                to={aboutIntro.cta.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <GlazeSweep className="bg-white/30" />
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
