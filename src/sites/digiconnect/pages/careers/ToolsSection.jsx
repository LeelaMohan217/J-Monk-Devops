import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { tools } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Left-aligned editorial header plus the same pill treatment home's StackStrip
// uses, rather than a second centered strip, so this page reads as a document
// instead of a marquee. One wrapper reveal, since per-pill motion is noise.
const ToolsSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {tools.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {tools.headingLead}
              <span className={ACCENT_CLASS}>{tools.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {tools.lead}
          </p>
        </motion.div>

        <motion.ul
          variants={riseIn(STEP)}
          {...centerTrigger}
          className="mt-10 flex flex-wrap gap-3 md:mt-12"
        >
          {tools.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-neutral-200 bg-surface-muted px-4 py-2 text-sm text-neutral-700"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ToolsSection;
