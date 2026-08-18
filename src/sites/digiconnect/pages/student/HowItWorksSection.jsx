import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { howItWorks } from "./data";

const HowItWorksSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {howItWorks.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {howItWorks.heading}
          </h2>

          {howItWorks.paragraphs.map((paragraph) => (
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

export default HowItWorksSection;
