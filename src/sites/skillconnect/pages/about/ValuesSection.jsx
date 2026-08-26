import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { values } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const ValuesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {values.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
            {values.headingLead}
            <span className={ACCENT_CLASS}>{values.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={riseIn(Math.min(index, 3) * STEP)}
              {...centerTrigger}
              className="rounded-2xl border border-neutral-200 bg-surface-muted p-6"
            >
              <span className="h-px w-10 bg-red-600" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
