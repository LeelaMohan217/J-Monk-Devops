import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";

// Deliberately a different shape from ServicesSection directly above: that one
// is a single column of wide rows against a sticky header, this one is a
// three-up spec grid with the header stacked over it. Same hairline-and-type
// vocabulary, different structure, so the two sections don't read as a repeat.
//
// Each cell hangs off its own border-t rather than sitting inside a bordered
// card, which keeps the first column's type flush with the container rail.
const WhyChooseSection = () => {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-surface-muted py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
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

        <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-x-12">
          {whyUs.points.map((point, index) => (
            <motion.div
              key={point.term}
              variants={riseIn(Math.min(index, 3) * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-t border-neutral-200 pt-6"
            >
              <dt className="text-base font-medium tracking-tight text-neutral-900">
                {point.term}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-neutral-600">
                {point.detail}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default WhyChooseSection;
