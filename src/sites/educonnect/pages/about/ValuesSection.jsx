import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { values } from "./data";

// Same hairline spec grid as the home page's WhyChooseSection — cells hanging
// off their own border-t rather than bordered rounded cards, so the first
// column's type stays flush with the container rail and the two pages read as
// one system.
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
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {values.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            {values.heading}
          </h2>
        </motion.div>

        <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-x-12">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={riseIn(Math.min(index, 3) * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-t border-neutral-200 pt-6"
            >
              <dt className="text-base font-medium tracking-tight text-neutral-900">
                {item.term}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ValuesSection;
