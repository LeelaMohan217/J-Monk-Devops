import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { howWeWork } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import processPhoto from "../../assets/digiconnect-process.jpg";

const HowWeWorkSection = () => {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setImageHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
            style={imageHeight ? { height: imageHeight } : undefined}
            className="lg:sticky lg:top-32 lg:flex lg:flex-col"
          >
            <div>
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
            </div>

            <Link
              to={howWeWork.cta.href}
              className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:mt-auto"
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
            <div ref={imageRef} className="overflow-hidden rounded-sm">
              <img
                src={processPhoto}
                alt="DigiConnect's process in action"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={riseIn(0.2)}
            {...centerTrigger}
            className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200 lg:sticky lg:top-32 lg:h-fit"
          >
            {howWeWork.steps.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={step.title}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                        {step.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-12">
                          <p className="text-sm leading-relaxed text-neutral-600">
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
