import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { values } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const introText =
  "We begin every project with a clear vision, aligning design decisions with your brand purpose, product direction, and long-term business goals.";

const valueIcons = [Target, Lightbulb, TrendingUp];

const ValuesSection = () => {
  return (
    <section className="bg-olive-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {values.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
            {values.headingLead}
            <span className={ACCENT_CLASS}>{values.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-4">
          <motion.div
            variants={riseIn(STEP)}
            {...centerTrigger}
            className="flex items-end lg:col-span-3"
          >
            <p className="max-w-sm text-xs leading-relaxed text-neutral-600">
              {introText}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-9">
            {values.items.slice(0, 3).map((item, index) => {
              const Icon = valueIcons[index] || Target;

              return (
                <motion.div
                  key={item.term}
                  variants={riseIn((index + 2) * STEP)}
                  {...centerTrigger}
                  className="flex min-h-[340px] flex-col justify-between border border-neutral-200 bg-surface p-6 md:p-8"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center text-red-600">
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
                      {item.term}
                    </h3>
                  </div>

                  <p className="mt-10 text-sm leading-relaxed text-neutral-600 ">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
