import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { story } from "./data";
import storyImg from "../../assets/educonnect-about.webp";

const StorySection = () => {
  const isDesktop = useIsDesktop();

  const RowTag = isDesktop ? motion.div : "div";
  const rowProps = isDesktop
    ? { variants: groupContainer, ...centerTrigger }
    : {};

  const cardMotion = (index) => ({
    variants: riseIn(isDesktop ? index * STEP : 0),
    ...(isDesktop ? {} : centerTrigger),
  });

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {story.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {story.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {story.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <RowTag
          {...rowProps}
          className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3"
        >
          <motion.div
            {...cardMotion(0)}
            className="flex flex-col justify-center rounded-2xl bg-red-50 p-8 md:p-9"
          >
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {story.paragraphs[0]}
            </p>
          </motion.div>

          <motion.div
            {...cardMotion(1)}
            className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 lg:aspect-auto lg:h-full"
          >
            <img
              src={storyImg}
              alt="An EduConnect student at graduation"
              width="736"
              height="736"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            {...cardMotion(2)}
            className="flex flex-col justify-center rounded-2xl bg-red-50 p-8 md:p-9"
          >
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {story.paragraphs[1]}
            </p>
          </motion.div>
        </RowTag>
      </div>
    </section>
  );
};

export default StorySection;
