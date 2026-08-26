import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Image as ImageIcon } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { howWeWork } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const HowWeWorkSection = () => {
  return (
    <section
      id="how-we-work"
      className="bg-olive-100 py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr] lg:gap-12">
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {howWeWork.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              {howWeWork.headingLead}
              <span className={ACCENT_CLASS}>{howWeWork.headingAccent}</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base">
              {howWeWork.lead}
            </p>

            <Link
              to={howWeWork.cta.href}
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {howWeWork.cta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={riseIn(0.1)}
            {...centerTrigger}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="flex aspect-4/3 w-full items-center justify-center rounded-sm border border-dashed border-neutral-300 bg-neutral-50">
              <div className="flex flex-col items-center gap-2 text-neutral-400">
                <ImageIcon className="h-6 w-6" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.15em]">
                  Process Image
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:block">
            {howWeWork.steps.map((step, index) => (
              <div key={step.title} className="lg:min-h-[130vh]">
                <motion.div
                  variants={riseIn()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  style={{ zIndex: index + 1 }}
                  className="relative flex flex-col bg-olive-100 lg:sticky lg:top-32"
                >
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
