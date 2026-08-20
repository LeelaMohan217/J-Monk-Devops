import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { audiencePaths } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

const AudiencePathsSection = () => {
  return (
    <section
      id="where-you-fit"
      className="bg-surface py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {audiencePaths.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              {audiencePaths.headingLead}
              <span className={ACCENT_CLASS}>{audiencePaths.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {audiencePaths.lead}
          </p>
        </motion.div>

        <div className="mt-12 border-t border-neutral-200 md:mt-16">
          {audiencePaths.paths.map((path, index) => (
            <motion.div
              key={path.id}
              variants={riseIn(Math.min(index, 3) * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-b border-neutral-200"
            >
              <Link
                to={path.href}
                className="group grid grid-cols-[2rem_1fr_auto] items-start gap-x-4 py-7 transition-colors duration-300 sm:gap-x-8 md:py-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span
                  className="text-xs font-medium tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-red-600 md:text-sm"
                  aria-hidden="true"
                >
                  {path.id}
                </span>

                <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:items-baseline lg:gap-10">
                  <span className="block text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {path.label}
                  </span>
                  <div className="mt-2 lg:mt-0">
                    {/* Was neutral-700 shifting to neutral-950 on hover. Now
                        the accent carries it, so the hover colour shift is
                        gone and the row's arrow signals interactivity. */}
                    <h3
                      className={`text-2xl tracking-tight md:text-3xl ${HEADING_FULL_CLASS}`}
                    >
                      {path.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {path.line}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencePathsSection;
