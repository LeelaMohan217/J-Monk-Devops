import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { audience } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const CASCADE_STEP = 0.1;

const AudienceSection = () => {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
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
            {audience.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 1 * CASCADE_STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {audience.headingLead}
            <span className={ACCENT_CLASS}>{audience.headingAccent}</span>
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={fadeIn("up", 2 * CASCADE_STEP)}
          {...centerTrigger}
          className="mt-10 flex flex-wrap gap-3 md:mt-12"
        >
          {audience.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-neutral-200 bg-surface px-4 py-2 text-sm text-neutral-700"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default AudienceSection;
