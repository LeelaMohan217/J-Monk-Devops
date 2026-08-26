import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { riseIn } from "../../shared/variants";
import {
  CENTER_MARGIN,
  STEP,
  centerTrigger,
  groupContainer,
} from "../../shared/motionConfig";
import CountUp from "../../shared/components/CountUp";
import { stats } from "./data";

const StatsSection = () => {
  const tilesRef = useRef(null);
  const tilesInView = useInView(tilesRef, {
    once: true,
    margin: CENTER_MARGIN,
  });

  return (
    <section id="stats" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={groupContainer} {...centerTrigger}>
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            Where things stand
          </motion.span>
          <motion.h2
            variants={riseIn(STEP)}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-800"
          >
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              Numbers
            </span>{" "}
            we can stand behind.
          </motion.h2>
          <motion.p
            variants={riseIn(STEP * 2)}
            className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600"
          >
            DigiConnect, SkillConnect, and EduConnect are still early.
            These are the real counts behind that work, and
            we&apos;ll update them as they grow.
          </motion.p>
        </motion.div>

        <motion.div
          ref={tilesRef}
          variants={groupContainer}
          {...centerTrigger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={riseIn(index * STEP)}
              className="rounded-2xl bg-red-50 p-6 md:p-8"
            >
              <span className="text-4xl font-bold tabular-nums text-red-600 md:text-5xl">
                <CountUp
                  value={stat.value}
                  start={tilesInView}
                  delay={index * STEP}
                />
              </span>
              <p className="mt-2 text-sm font-medium text-neutral-800">
                {stat.label}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                {stat.platform}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
