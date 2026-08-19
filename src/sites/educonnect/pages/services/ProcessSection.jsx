import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";

// Same card treatment as about/ValuesSection, with a step index added since
// this list is sequential rather than a flat set of promises.
const ProcessSection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {process.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {process.heading}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={riseIn(index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-neutral-200 bg-surface p-6"
            >
              <span
                className="text-xs font-medium tabular-nums text-neutral-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 block h-px w-10 bg-red-600" aria-hidden="true" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
