import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Editorial index rather than six full-width rows of display type: the framing
// (eyebrow, heading, lead, CTA) sits in a sticky left column while the list
// scrolls past it, which lets each row stay compact — name at text-lg, body at
// text-sm — instead of shouting at text-xl six times over.
//
// Rows are deliberately not links: every service resolves to the same
// /educonnect/services page, so hover affordances on each row would promise six
// destinations that don't exist. One CTA in the header column instead.
const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={riseIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {services.eyebrow}
            </span>

            <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
              {services.heading}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-600">
              {services.lead}
            </p>

            <Link
              to={services.cta.href}
              className="group mt-8 inline-flex w-fit items-center gap-2 py-1 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {services.cta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* Name/description pairs, so the list carries the same meaning to a
              screen reader that the two-tier type carries visually. */}
          <dl className="lg:col-span-7 lg:col-start-6">
            {services.items.map((service, index) => (
              <motion.div
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="grid grid-cols-[1.75rem_1fr] items-baseline gap-y-2 border-t border-neutral-200 py-7 last:border-b md:grid-cols-[3rem_1fr] md:py-8"
              >
                <span
                  className="text-xs font-medium tabular-nums text-neutral-400"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <dt className="text-lg font-medium tracking-tight text-neutral-900">
                  {service.name}
                </dt>

                <dd className="col-start-2 max-w-xl text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
