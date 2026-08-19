import { motion } from "framer-motion";
import { ListChecks, FileText, PlaneTakeoff } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";
import BentoCard from "../../components/BentoCard";

const ICONS = [ListChecks, FileText, PlaneTakeoff];

// Same BentoCard shell as the rest of the site. The numeral stays meaningful
// here (unlike a flat feature list, this genuinely is a three-stage
// sequence), doubling as a step marker rather than just decoration.
const ProcessSection = () => {
  return (
    <section className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {process.heading}
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {process.steps.map((step, index) => {
            const inverted = index === process.steps.length - 1;

            return (
              <motion.div
                key={step.title}
                variants={riseIn(index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <BentoCard
                  as="div"
                  icon={ICONS[index]}
                  index={index}
                  title={step.title}
                  description={step.body}
                  inverted={inverted}
                  notched={inverted}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
