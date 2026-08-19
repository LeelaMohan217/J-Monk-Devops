import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { story } from "./data";

// Sidehead layout: the label and heading hold the left column while the prose
// runs in its own column, instead of a narrow centred well that ignored the
// site rail. The first paragraph carries a larger standfirst size so the block
// has a way in — the rest stay at body size.
const StorySection = () => {
  return (
    <section className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {story.eyebrow}
            </span>

            <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
              {story.heading}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "max-w-2xl text-base leading-relaxed text-neutral-800 md:text-lg"
                    : "mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
