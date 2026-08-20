import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { story } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Text only, unlike DigiConnect's equivalent StorySection: SkillConnect has no
// assets folder, and a stock photo of people at laptops would be filler rather
// than evidence. An editorial two-column split carries the section instead.
const StorySection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {story.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              {story.headingLead}
              <span className={ACCENT_CLASS}>{story.headingAccent}</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-sm leading-relaxed text-neutral-600 md:text-base ${
                  index === 0 ? "" : "mt-6"
                }`}
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
