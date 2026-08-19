import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Award } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { values } from "./data";
import BentoCard from "../../components/BentoCard";

const ICONS = [Heart, ShieldCheck, Users, Award];

// Same BentoCard shell as the home page's WhyChooseSection/ServicesSection —
// icon badge, ghost watermark, one inverted closer — kept as a plain 4-up
// grid since these four items don't need asymmetric spans to read clearly.
const ValuesSection = () => {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {values.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {values.heading}
          </h2>
        </motion.div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {values.items.map((item, index) => {
            const inverted = index === values.items.length - 1;

            return (
              <motion.div
                key={item.term}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <BentoCard
                  as="div"
                  icon={ICONS[index]}
                  index={index}
                  title={item.term}
                  description={item.detail}
                  inverted={inverted}
                  notched={inverted}
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

export default ValuesSection;
