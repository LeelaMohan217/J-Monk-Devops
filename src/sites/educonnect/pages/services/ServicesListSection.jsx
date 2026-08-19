import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// The canonical services list, so it reads as a spec table rather than six
// stacked mini-heroes: numeral and name hold the left columns, the description
// sits in its own column at body size. Previously the names ran at text-3xl and
// the descriptions at text-xl, which gave the page no hierarchy at all.
//
// No eyebrow header of its own — PageHeaderSection above already frames it.
// Red is reserved for CTAs and active states now, so the old red rule per row
// is gone; the numerals carry the sequence.
const ServicesListSection = () => {
  return (
    <section className="bg-surface pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {services.map((service, index) => (
          <motion.article
            key={service.name}
            variants={riseIn(Math.min(index, 3) * 0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-y-3 border-t border-neutral-200 py-8 last:border-b md:py-10 lg:grid-cols-12 lg:gap-x-12"
          >
            <div className="flex items-baseline gap-4 lg:col-span-5">
              <span
                className="text-xs font-medium tabular-nums text-neutral-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                {service.name}
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base lg:col-span-6 lg:col-start-7">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;
