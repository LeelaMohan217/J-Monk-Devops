import { motion } from "framer-motion";
import { PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";

// One icon per point, matched by array position to whyUs.points in ./data.
const ICONS = [PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy];

// Plain bordered cards, no shadow or hover motion, all six the same size
// regardless of copy length (min-h-[280px] rather than letting content set
// the height), so the grid reads as one deliberate set of tiles rather than
// six independently sized boxes.
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

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {whyUs.points.map((point, index) => {
            const Icon = ICONS[index];

            return (
              <motion.li
                key={point.term}
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
                  {point.term}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {point.detail}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSection;
