import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, Search, FileCheck2, BadgeCheck, Languages, Plane } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Centered header (eyebrow, heading, lead) over a 6-card grid, then one CTA
// button below the cards — same card recipe as WhyChooseSection (plain
// border, centered icon, no shadow) directly below it, so the two sections
// read as one system despite the header/CTA arrangement being different.
const ICONS = [UserCheck, Search, FileCheck2, BadgeCheck, Languages, Plane];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {services.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            {services.heading}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            {services.lead}
          </p>
        </motion.div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = ICONS[index];

            return (
              <motion.li
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-lg border border-neutral-200 p-8 text-center"
              >
                <Icon
                  className="h-7 w-7 text-red-600"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="text-base font-medium tracking-tight text-neutral-900">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          variants={riseIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-14 flex justify-center md:mt-16"
        >
          <Link
            to={services.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {services.cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
