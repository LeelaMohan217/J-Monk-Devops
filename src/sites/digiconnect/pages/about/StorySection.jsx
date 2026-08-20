import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { story } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const StorySection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={riseIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm lg:order-1"
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface ring-1 ring-inset ring-black/10">
              <img
                src={story.image}
                alt=""
                width="3000"
                height="2000"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={riseIn(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {story.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              {story.headingLead}
              <span className={ACCENT_CLASS}>{story.headingAccent}</span>
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
      </div>
    </section>
  );
};

export default StorySection;
