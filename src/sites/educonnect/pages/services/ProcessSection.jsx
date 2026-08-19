import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";

// Same hairline spec grid as about/ValuesSection and home/WhyChooseSection,
// keeping the step numerals since this list is sequential rather than a flat
// set. Cells hang off their own border-t instead of sitting in rounded cards,
// so the first column stays flush with the container rail.
const ProcessSection = () => {
  return (
    <section className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
            {process.heading}
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-x-10 gap-y-10 md:mt-20 md:grid-cols-3 lg:gap-x-12">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-t border-neutral-200 pt-6"
            >
              <span
                className="text-xs font-medium tabular-nums text-neutral-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-base font-medium tracking-tight text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
