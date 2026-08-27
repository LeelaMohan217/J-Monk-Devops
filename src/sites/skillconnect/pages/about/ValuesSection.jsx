import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { values } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const CASCADE_STEP = 0.1;

const ValuesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeIn("up", 0 * CASCADE_STEP)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {values.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 1 * CASCADE_STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {values.headingLead}
            <span className={ACCENT_CLASS}>{values.headingAccent}</span>
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={fadeIn("up", index * CASCADE_STEP)}
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
