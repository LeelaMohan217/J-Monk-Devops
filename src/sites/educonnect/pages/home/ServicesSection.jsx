import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Editorial numbered-row list, matching DigiConnect's OfferingsSection —
// same display type scale, same border-top rhythm, same closing link.
const ServicesSection = () => {
  return (
    <section id="services" className="bg-surface py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {services.eyebrow}
          </span>
          <h2 className="mt-4 text-display-sm font-semibold text-neutral-900 md:text-display-md">
            {services.heading}
          </h2>
        </motion.div>

        <div className="mt-14 md:mt-20">
          {services.items.map((service, index) => (
            <motion.article
              key={service.name}
              variants={riseIn(Math.min(index, 3) * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="border-t border-neutral-200 py-10 last:border-b md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-red-600" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                    {service.name}
                  </h3>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10"
        >
          <Link
            to={services.cta.href}
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {services.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
