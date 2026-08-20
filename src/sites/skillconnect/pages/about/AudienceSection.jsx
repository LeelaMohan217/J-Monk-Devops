import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { audience } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Typographic pill row rather than six illustrated cards. This is an index of
// who qualifies, and per-item imagery would be decoration standing in for
// content. One wrapper reveal, for the same reason StackStrip uses one.
const AudienceSection = () => {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {audience.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {audience.headingLead}
            <span className={ACCENT_CLASS}>{audience.headingAccent}</span>
          </h2>
        </motion.div>

        <motion.ul
          variants={riseIn(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
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
