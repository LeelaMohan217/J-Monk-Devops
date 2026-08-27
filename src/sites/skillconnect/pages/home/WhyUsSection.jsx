import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { whyUs } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const CASCADE_STEP = 0.1;

const WhyUsSection = () => {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={groupContainer}
            {...centerTrigger}
            className="lg:col-span-5"
          >
            <motion.span
              variants={fadeIn("up", 0 * CASCADE_STEP)}
              className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {whyUs.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeIn("up", 1 * CASCADE_STEP)}
              className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
            >
              {whyUs.headingLead}
              <span className={ACCENT_CLASS}>{whyUs.headingAccent}</span>
            </motion.h2>

            {whyUs.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                variants={fadeIn("up", (2 + index) * CASCADE_STEP)}
                className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.ul
            variants={groupContainer}
            {...centerTrigger}
            className="border-t border-neutral-200 lg:col-span-6 lg:col-start-7"
          >
            {whyUs.points.map((point, index) => (
              <motion.li
                key={point}
                variants={fadeIn("up", index * CASCADE_STEP)}
                className="flex items-start gap-3 border-b border-neutral-200 py-4"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-neutral-700 md:text-base">
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
