import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { HEADING_FULL_CLASS } from "../../headingStyles";

const OfferingsListSection = () => {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {offerings.map((offering, index) => (
          <motion.article
            key={offering.name}
            variants={riseIn()}
            {...centerTrigger}
            className="border-t border-neutral-200 py-10 last:border-b md:py-14"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  {/* Hidden from the accessibility tree, same reasoning as
                      home's OfferingsSection: avoids "zero one" announcements
                      before six consecutive headings. */}
                  <span
                    className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-red-600" aria-hidden="true" />
                </div>

                <h2
                  className={`mt-5 text-2xl tracking-tight md:text-3xl ${HEADING_FULL_CLASS}`}
                >
                  {offering.name}
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                  {offering.summary}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {offering.detail}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default OfferingsListSection;
