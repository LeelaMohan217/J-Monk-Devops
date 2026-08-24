import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="bg-surface py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {offerings.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-14 md:mt-20">
          {offerings.services.map((service, index) => (
            <motion.article
              key={service.name}
              // Delay is clamped so the sixth row does not sit visibly idle
              // after entering view; the landing only ever staggers three.
              variants={riseIn()}
              {...centerTrigger}
              className="border-t border-neutral-200 py-10 last:border-b md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    {/* Hidden from the accessibility tree: otherwise a screen
                        reader announces "zero one" before six consecutive
                        headings. Marks are red because DigiConnect's shell is
                        red throughout, where the landing uses amber. */}
                    <span
                      className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-red-600" aria-hidden="true" />
                  </div>

                  <h3
                    className={`mt-5 text-2xl tracking-tight md:text-3xl ${HEADING_FULL_CLASS}`}
                  >
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
          {...centerTrigger}
          className="mt-10"
        >
          <Link
            to={offerings.cta.href}
            className="group inline-flex w-fit items-center gap-2 py-1 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {offerings.cta.label}
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

export default OfferingsSection;
