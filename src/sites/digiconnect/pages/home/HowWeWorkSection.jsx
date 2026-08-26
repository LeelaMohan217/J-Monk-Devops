import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { howWeWork } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import processPhoto from "../../assets/digiconnect-process.webp";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import GlazeSweep from "../../../../shared/components/GlazeSweep";

const CASCADE_STEP = 0.1;
const ACCORDION_STEP = 0.05;

const HowWeWorkSection = () => {
  const isDesktop = useIsDesktop();
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
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr] lg:gap-12"
        >
          <div
            style={isDesktop && imageHeight ? { height: imageHeight } : undefined}
            className="lg:sticky lg:top-32 lg:flex lg:flex-col"
          >
            <div>
              <motion.span
                variants={fadeIn("up", 0 * CASCADE_STEP)}
                className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
              >
                {howWeWork.eyebrow}
              </motion.span>
              <motion.h2
                variants={fadeIn("up", 1 * CASCADE_STEP)}
                className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
              >
                {howWeWork.headingLead}
                <span className={ACCENT_CLASS}>{howWeWork.headingAccent}</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 2 * CASCADE_STEP)}
                className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {howWeWork.lead}
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("up", 3 * CASCADE_STEP)}
              className="hidden lg:mt-auto lg:block"
            >
              <Link
                to={howWeWork.cta.href}
                className="group relative mt-10 inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 lg:mt-0"
              >
                <GlazeSweep className="bg-white/30" />
                {howWeWork.cta.label}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 4 * CASCADE_STEP)}
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

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200 lg:sticky lg:top-32 lg:h-fit">
            {howWeWork.steps.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeIn("up", 5 * CASCADE_STEP + index * ACCORDION_STEP)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
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
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeIn("up", 0)}
            {...centerTrigger}
            className="flex justify-center lg:hidden"
          >
            <Link
              to={howWeWork.cta.href}
              className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <GlazeSweep className="bg-white/30" />
              {howWeWork.cta.label}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
