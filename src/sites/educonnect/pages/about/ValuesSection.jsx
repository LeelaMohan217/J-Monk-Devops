import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { values } from "./data";

const ValuesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {values.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeIn("up", STEP)}
            className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {values.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {values.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={fadeIn("up", Math.min(index, 3) * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="group flex min-h-[340px] flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-6 md:p-8"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-start text-red-600 transition-colors duration-500 group-hover:text-black">
                  <Zap
                    size={22}
                    strokeWidth={1.7}
                    className="fill-transparent transition-colors duration-500 group-hover:fill-current"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
                  {item.term}
                </h3>
              </div>

              <p className="mt-10 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", 0)}
          {...centerTrigger}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/educonnect/services"
            className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <GlazeSweep className="bg-white/30" />
            Explore Services
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
