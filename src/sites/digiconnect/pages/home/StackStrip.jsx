import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { stack } from "./data";

const StackStrip = () => {
  return (
    <section className="bg-surface-sunken py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* One wrapper reveal, not eight staggered pills — this is decorative
            content and per-item motion reads as noise. */}
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            The stack behind the work
          </span>
          <ul className="flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-neutral-200 bg-surface px-4 py-2 text-sm text-neutral-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default StackStrip;
