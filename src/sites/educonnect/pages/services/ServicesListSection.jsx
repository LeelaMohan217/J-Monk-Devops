import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Same bento shell and span rhythm as the home page's ServicesSection, since
// this is the same six services in their canonical, fuller-detail form — no
// eyebrow of its own, PageHeaderSection above already frames the page.
const SPANS = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-3"];

const ServicesListSection = () => {
  return (
    <section className="bg-surface pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const inverted = index === services.length - 1;

            return (
              <motion.article
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
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

                <h2
                  className={`mt-4 text-lg font-medium tracking-tight md:text-xl ${
                    inverted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {service.name}
                </h2>

                <p
                  className={`mt-2 max-w-xl text-sm leading-relaxed md:text-base ${
                    inverted ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
