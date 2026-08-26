import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { whyUs } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const WhyUsSection = () => {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            className="lg:col-span-5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {whyUs.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              {whyUs.headingLead}
              <span className={ACCENT_CLASS}>{whyUs.headingAccent}</span>
            </h2>

            {whyUs.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.ul
            variants={riseIn(STEP)}
            {...centerTrigger}
            className="border-t border-neutral-200 lg:col-span-6 lg:col-start-7"
          >
            {whyUs.points.map((point) => (
              <li
                key={point}
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
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
