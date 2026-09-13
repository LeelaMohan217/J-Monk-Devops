import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeIndianRupee, Rocket, Users } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { values } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const icons = { Users, Rocket, BadgeIndianRupee };

const ValuesSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {values.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {values.headingLead}
            <span className={ACCENT_CLASS}>{values.headingAccent}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3"
        >
          {values.items.map((item, index) => {
            const Icon = icons[item.icon] || Rocket;

            return (
              <motion.div
                key={item.term}
                variants={fadeIn("up", index * STEP)}
                {...(isDesktop ? {} : centerTrigger)}
                className="group flex min-h-[340px] flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-6 md:p-8"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-start text-red-600 transition-colors duration-500 group-hover:text-black">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
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
          className="mt-12 flex"
        >
          <Link
            to="/skillconnect/services"
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
