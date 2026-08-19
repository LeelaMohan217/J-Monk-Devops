import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Bento grid instead of the old sticky-header list: a 2-wide card, a 1-wide
// card, three 1-wide cards, then a full-width dark card as a closer — same
// asymmetric rhythm as the reference boards (one large tile, a few smaller
// ones, one inverted tile for contrast). Reused verbatim (same card shell,
// same mono numeral treatment) by WhyChooseSection, ValuesSection, and
// ProcessSection so the bento language reads as one system across the site.
const SPANS = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-3"];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {services.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {services.heading}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
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

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const inverted = index === services.items.length - 1;

            return (
              <motion.div
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className={`rounded-2xl p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:col-span-1 ${SPANS[index]} ${
                  inverted
                    ? "bg-neutral-900"
                    : "border border-neutral-200 bg-gradient-to-br from-red-50/60 via-surface to-surface"
                }`}
              >
                <span
                  className={`font-['IBM_Plex_Mono',monospace] text-xs font-medium tabular-nums ${
                    inverted ? "text-white/50" : "text-neutral-400"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <dt
                  className={`mt-4 text-lg font-medium tracking-tight ${
                    inverted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {service.name}
                </dt>

                <dd
                  className={`mt-2 max-w-xl text-sm leading-relaxed ${
                    inverted ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {service.description}
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default ServicesSection;
