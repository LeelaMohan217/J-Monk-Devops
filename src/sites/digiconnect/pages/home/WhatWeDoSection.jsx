import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import {
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

const ICONS = {
  strategy: Users,
  expertise: Award,
  results: TrendingUp,
};

const CASCADE_STEP = 0.1;

const WhatWeDoSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="what-we-do"
      className="scroll-mt-24 bg-olive-100 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <motion.span
              variants={fadeIn("up", 0 * CASCADE_STEP)}
              className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {whatWeDo.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 1 * CASCADE_STEP)}
              className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
            >
              {whatWeDo.headingLines}
              <span className={ACCENT_CLASS}>{whatWeDo.headingAccent}</span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mt-12 grid gap-4 md:mt-16 md:gap-5 lg:grid-cols-[1.3fr_1fr_1fr] lg:grid-rows-[minmax(220px,1fr)_minmax(220px,1fr)]"
        >
          <motion.div
            variants={fadeIn("up", 0 * CASCADE_STEP)}
            {...(isDesktop ? {} : centerTrigger)}
            className="group overflow-hidden rounded-sm lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <img
              src={whatWeDo.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {whatWeDo.cards.map((card, index) => {
            const Icon = ICONS[card.id];
            return (
              <motion.div
                key={card.id}
                variants={fadeIn("up", (index + 1) * CASCADE_STEP)}
                {...(isDesktop ? {} : centerTrigger)}
                className={`flex flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-6 md:p-8 ${PLACEMENT[index]}`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                    <Icon className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                    {card.label}
                  </h3>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
