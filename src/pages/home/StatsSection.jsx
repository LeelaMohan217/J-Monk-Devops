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
  // The counters need the trigger as a value, which whileInView keeps to
  // itself. Observing the same element with the same margin and `once` gives
  // them the group's trigger rather than a second one of their own, so each
  // number starts counting exactly as its tile begins to rise.
  const tilesRef = useRef(null);
  const tilesInView = useInView(tilesRef, {
    once: true,
    margin: CENTER_MARGIN,
  });

  return (
    <section id="stats" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Eyebrow, heading, and description arrive one at a time.

            The delays are spelled out per child rather than left to the parent's
            staggerChildren. riseIn() always emits a `delay` in its own
            transition (0 when no argument is passed), and a child's explicit
            delay overrides the one staggerChildren computes, so relying on the
            parent made all three fire together.

            The wrapper still owns the single in-view trigger: children with
            variants but no initial/whileInView of their own inherit its animation
            state. That keeps the sequence intact if the reader stops scrolling
            mid-section, which three separate triggers would not. */}
        <motion.div variants={groupContainer} {...centerTrigger}>
          {/* inline-block because riseIn animates y: a transform has no effect
              on a plain inline element, so this would otherwise only fade. */}
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            Where things stand
          </motion.span>
          <motion.h2
            variants={riseIn(STEP)}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-900"
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

        {/* Single column below sm: two columns leave an 80px content box at
            320px, and a platform label like "SkillConnect" needs ~114px with
            its tracking, so it overflowed the tile. */}
        {/* Tiles are one group on a shared trigger, so they ripple 1-2-3-4
            instead of each timing from its own entry. At sm and up they sit in a
            2x2 block that fits on screen together; stacked on mobile the group is
            still short enough that the last tile has not scrolled past by the
            time its turn comes. */}
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
              {/* tabular-nums so the digits keep one width as they run: without
                  it the tile's text reflows on nearly every frame. */}
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
