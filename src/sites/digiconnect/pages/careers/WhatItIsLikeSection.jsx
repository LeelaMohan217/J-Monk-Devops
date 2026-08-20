import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {whatItIsLike.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {whatItIsLike.headingLead}
            <span className={ACCENT_CLASS}>{whatItIsLike.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {whatItIsLike.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={riseIn(Math.min(index, 3) * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-neutral-200 bg-surface p-6"
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
