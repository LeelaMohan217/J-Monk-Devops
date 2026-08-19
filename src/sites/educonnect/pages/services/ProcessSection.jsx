import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";

// Same bento shell as the rest of the site. Numerals stay meaningful here
// (unlike a flat feature list, this genuinely is a three-stage sequence), so
// the mono numeral doubles as a step marker, not just decoration.
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
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {process.heading}
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {process.steps.map((step, index) => {
            const inverted = index === process.steps.length - 1;

            return (
              <motion.li
                key={step.title}
                variants={riseIn(index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className={`rounded-2xl p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  inverted
                    ? "bg-neutral-900"
                    : "border border-neutral-200 bg-gradient-to-br from-red-50/60 via-surface to-surface"
                }`}
              >
                <span
                  className={`font-['IBM_Plex_Mono',monospace] text-xs font-medium tabular-nums ${
                    inverted ? "text-white/50" : "text-neutral-400"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`mt-4 text-base font-medium tracking-tight ${
                    inverted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    inverted ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {step.body}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
