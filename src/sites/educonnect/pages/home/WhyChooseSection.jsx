import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";

// Deliberately breaks from the hairline-and-type vocabulary every other
// section on the page uses: this is the one place EduConnect earns a bit of
// showroom polish, an elevated panel holding a card grid, rather than another
// flat spec list. One card (the middle one) inverts to a dark tile, echoing
// the accent-tile pattern from premium SaaS stat sections, so the grid isn't
// six identical boxes in a row.
const WhyChooseSection = () => {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-surface-muted py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="rounded-4xl border border-neutral-200 bg-surface p-6 shadow-[0_32px_64px_-40px_rgba(0,0,0,0.22)] sm:p-10 lg:p-14">
          <motion.div
            variants={riseIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {whyUs.eyebrow}
            </span>

            <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
              {whyUs.heading}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
              {whyUs.lead}
            </p>
          </motion.div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            {whyUs.points.map((point, index) => {
              const inverted = index === 2;

              return (
                <motion.li
                  key={point.term}
                  variants={riseIn(Math.min(index, 3) * 0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    inverted
                      ? "bg-neutral-900 shadow-[0_16px_32px_-16px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)]"
                      : "border border-neutral-200 bg-gradient-to-br from-red-50/50 via-surface to-surface hover:border-neutral-300 hover:shadow-[0_16px_32px_-24px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${inverted ? "bg-white" : "bg-red-600"}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-xs font-medium tabular-nums tracking-[0.14em] ${
                        inverted ? "text-white/50" : "text-neutral-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <h3
                    className={`mt-6 text-lg font-semibold tracking-tight ${
                      inverted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {point.term}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      inverted ? "text-white/65" : "text-neutral-600"
                    }`}
                  >
                    {point.detail}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
