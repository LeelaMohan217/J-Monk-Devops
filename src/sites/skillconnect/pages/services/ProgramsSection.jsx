import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, BadgeIndianRupee, Shapes } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { programs } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const icons = {
  internship: Laptop,
  freelancing: BadgeIndianRupee,
  training: Shapes,
};

const CASCADE_STEP = 0.1;

const ProgramsSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="programs"
      className="bg-stone-50 py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <motion.span
              variants={fadeIn("up", 0 * CASCADE_STEP)}
              className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {programs.eyebrow}
            </motion.span>
            <motion.h2
              variants={fadeIn("up", 1 * CASCADE_STEP)}
              className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
            >
              {programs.headingLead}
              <span className={ACCENT_CLASS}>{programs.headingAccent}</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeIn("up", 2 * CASCADE_STEP)}
            className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9"
          >
            {programs.lead}
          </motion.p>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3"
        >
          {programs.items.map((item, index) => {
            const Icon = icons[item.id];

            return (
              <motion.div
                key={item.id}
                variants={fadeIn("up", index * CASCADE_STEP)}
                {...(isDesktop ? {} : centerTrigger)}
                className="group flex min-h-[340px] flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-6 md:p-8"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 transition-colors duration-500 group-hover:bg-neutral-900">
                    <Icon
                      className="h-5 w-5 text-red-600 transition-colors duration-500 group-hover:text-white"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
                    {item.term}
                  </h3>
                </div>
                <p className="mt-10 text-sm leading-relaxed text-neutral-600">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          {...centerTrigger}
          className="mt-12 flex md:mt-16"
        >
          <Link
            to="/skillconnect/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <GlazeSweep className="bg-white/30" />
            Get in touch
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
