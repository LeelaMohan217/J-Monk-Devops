import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { whatItIsLike } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

// Same three-card treatment as the about page's ValuesSection, since these are
// the same operating constraints stated from a candidate's side rather than a
// client's.
const WhatItIsLikeSection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {whatItIsLike.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {whatItIsLike.headingLead}
            <span className={ACCENT_CLASS}>{whatItIsLike.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {whatItIsLike.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={riseIn(Math.min(index, 3) * STEP)}
              {...centerTrigger}
              // Flat red-50 on every second card, the alternation EduConnect's
              // services grid uses, rather than the radial glow on the about
              // page's values cards. Same colour, two treatments, so sections do
              // not all look identical while still belonging together.
              className={`rounded-2xl border p-6 ${
                index % 2 === 1
                  ? "border-red-100 bg-red-50"
                  : "border-neutral-200 bg-surface"
              }`}
            >
              <span className="h-px w-10 bg-red-600" aria-hidden="true" />
              <h3 className={`mt-5 text-lg ${HEADING_FULL_CLASS}`}>
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

export default WhatItIsLikeSection;
