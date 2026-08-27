import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { howItWorks } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const CASCADE_STEP = 0.1;

const HowItWorksSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeIn("up", 0 * CASCADE_STEP)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {howItWorks.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 1 * CASCADE_STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {howItWorks.headingLead}
            <span className={ACCENT_CLASS}>{howItWorks.headingAccent}</span>
          </motion.h2>

          {howItWorks.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              variants={fadeIn("up", (2 + index) * CASCADE_STEP)}
              className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
