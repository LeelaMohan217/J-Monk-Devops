import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { whatWeDo } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const PLACEMENT = [
  "lg:col-span-2 lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

const WhatWeDoSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="what-we-do"
      className="scroll-mt-24 bg-surface-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {whatWeDo.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              {whatWeDo.headingLines}
              <span className={ACCENT_CLASS}>{whatWeDo.headingAccent}</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mt-12 grid gap-4 md:mt-16 md:gap-6 lg:grid-cols-3 lg:grid-rows-[minmax(220px,1fr)_minmax(220px,1fr)]"
        >
          <motion.div
            variants={riseIn(0)}
            {...(isDesktop ? {} : centerTrigger)}
            className="overflow-hidden lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <img
              src={whatWeDo.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {whatWeDo.cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={riseIn(isDesktop ? (index + 1) * STEP : 0)}
              {...(isDesktop ? {} : centerTrigger)}
              className={`flex flex-col justify-between border border-neutral-200 bg-surface p-6 md:p-8 ${PLACEMENT[index]}`}
            >
              <h3 className="text-base font-medium tracking-tight text-neutral-900 md:text-lg">
                {card.label}
              </h3>

              <p className="mt-8 text-sm leading-relaxed text-neutral-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
