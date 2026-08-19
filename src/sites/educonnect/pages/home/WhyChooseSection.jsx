import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";

// Header layout mirrors WhatWeDoSection (heading left, lead right on a
// 12-col grid); the definition list below borrows HowWeWorkSection's
// dt/dd pairing, spread across the full width instead of squeezed next
// to an image EduConnect doesn't have yet.
const WhyChooseSection = () => {
  return (
    <section
      id="why-us"
      className="bg-surface-muted py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {whyUs.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              {whyUs.heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {whyUs.lead}
          </p>
        </motion.div>

        <motion.dl
          variants={riseIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 md:mt-16"
        >
          {whyUs.points.map((point) => (
            <div key={point.term}>
              <dt className="text-base font-semibold text-neutral-900">
                {point.term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                {point.detail}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default WhyChooseSection;
