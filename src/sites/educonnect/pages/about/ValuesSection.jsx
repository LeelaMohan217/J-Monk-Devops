import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { values } from "./data";

// Same bento card shell as the home page's WhyChooseSection/ServicesSection —
// gradient tint, shadow, one inverted dark closer — kept as a plain 4-up grid
// since these four items don't need icons or asymmetric spans to read clearly.
const ValuesSection = () => {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {values.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {values.heading}
          </h2>
        </motion.div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {values.items.map((item, index) => {
            const inverted = index === values.items.length - 1;

            return (
              <motion.div
                key={item.term}
                variants={riseIn(Math.min(index, 3) * 0.06)}
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

                <dt
                  className={`mt-4 text-base font-medium tracking-tight ${
                    inverted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item.term}
                </dt>
                <dd
                  className={`mt-3 text-sm leading-relaxed ${
                    inverted ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {item.detail}
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default ValuesSection;
