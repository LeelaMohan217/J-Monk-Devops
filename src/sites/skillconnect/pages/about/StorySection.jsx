import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { story } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const CASCADE_STEP = 0.1;

const StorySection = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid gap-8 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <motion.span
              variants={fadeIn("up", 0 * CASCADE_STEP)}
              className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {story.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeIn("up", 1 * CASCADE_STEP)}
              className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
            >
              {story.headingLead}
              <span className={ACCENT_CLASS}>{story.headingAccent}</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                variants={fadeIn("up", (2 + index) * CASCADE_STEP)}
                className={`text-sm leading-relaxed text-neutral-600 md:text-base ${
                  index === 0 ? "" : "mt-6"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
