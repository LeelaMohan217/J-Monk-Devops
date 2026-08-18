import { motion } from "framer-motion";
import { riseIn } from "../../shared/variants";
import { stats } from "./data";

const StatsSection = () => {
  return (
    <section id="stats" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            Where things stand
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            <span className="text-red-600">Numbers</span> we can stand behind.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
            DigiConnect, SkillConnect, and EduConnect are still early.
            These are the real counts behind that work, and
            we&apos;ll update them as they grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl bg-red-50 p-6 md:p-8"
            >
              <span className="text-4xl font-bold text-red-600 md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm font-medium text-neutral-800">
                {stat.label}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                {stat.platform}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
