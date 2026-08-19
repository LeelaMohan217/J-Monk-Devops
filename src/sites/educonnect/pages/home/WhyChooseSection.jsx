import { motion } from "framer-motion";
import { PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { whyUs } from "./data";

// One icon per point, matched by array position to whyUs.points in ./data.
const ICONS = [PhoneCall, Users, Eye, UserCheck, FileCheck2, LifeBuoy];

// Same bento card shell as ServicesSection (gradient tint, shadow, one
// inverted dark card as the closer) but arranged as a uniform grid rather
// than that section's asymmetric spans — same material, different rhythm, so
// the two sections back-to-back don't read as a repeat of one layout.
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
            const Icon = ICONS[index];
            const inverted = index === whyUs.points.length - 1;

            return (
              <motion.li
                key={point.term}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className={`relative flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  inverted
                    ? "bg-neutral-900"
                    : "border border-neutral-200 bg-gradient-to-br from-red-50/60 via-surface to-surface"
                }`}
              >
                <span
                  className={`absolute top-5 left-6 font-['IBM_Plex_Mono',monospace] text-xs font-medium tabular-nums ${
                    inverted ? "text-white/40" : "text-neutral-400"
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon
                  className={inverted ? "h-7 w-7 text-white" : "h-7 w-7 text-red-600"}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3
                  className={`text-base font-medium tracking-tight ${
                    inverted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {point.term}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    inverted ? "text-white/70" : "text-neutral-600"
                  }`}
                >
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
