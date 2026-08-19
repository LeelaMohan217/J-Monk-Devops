import { motion } from "framer-motion";
import { PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";
import BentoCard from "../../components/BentoCard";

// One icon per point, matched by array position to whyUs.points in ./data.
const ICONS = [PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy];

// Same BentoCard shell as ServicesSection (icon badge, ghost watermark, one
// inverted closer) but in its `centered` layout — a uniform grid rather than
// that section's asymmetric spans, so the two sections back-to-back don't
// read as a repeat of one layout.
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
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
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
            const inverted = index === whyUs.points.length - 1;

            return (
              <motion.div
                key={point.term}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <BentoCard
                  as="div"
                  icon={ICONS[index]}
                  index={index}
                  title={point.term}
                  description={point.detail}
                  inverted={inverted}
                  notched={inverted}
                  centered
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSection;
