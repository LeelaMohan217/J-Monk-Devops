import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { story } from "./data";

// DigiConnect's StorySection pairs this copy with a photo; EduConnect has no
// image asset yet, so it runs as a single readable column instead of a
// two-up split.
const StorySection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {story.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {story.heading}
          </h2>

          {story.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
