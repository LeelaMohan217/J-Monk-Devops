import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";

const ProcessSection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {process.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {process.headingAccent}
            </span>
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col rounded-2xl border border-red-100 bg-radial-[at_0%_0%] from-red-100 via-red-50 to-surface to-60% p-6 md:p-7"
            >
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-100 bg-surface font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-base font-medium tracking-tight text-neutral-900 md:text-lg">
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
