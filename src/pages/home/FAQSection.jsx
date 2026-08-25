import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../shared/motionConfig";
import { faqs } from "./data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Eyebrow, heading, and description arrive one at a time, matching
            StatsSection. Delays are explicit per child rather than left to a
            parent staggerChildren: riseIn always writes a `delay` into its own
            transition, and a child's explicit delay overrides the one the parent
            computes, so a stagger container would fire all three at once.

            The wrapper keeps the single in-view trigger, which the children
            inherit by having variants without their own initial/whileInView. */}
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="flex flex-col items-start gap-4 text-left"
        >
          <motion.div
            variants={riseIn(0)}
            className="inline-flex items-center gap-2 text-neutral-600"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              FAQs
            </span>
          </motion.div>

          <motion.h2
            variants={riseIn(STEP)}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-900"
          >
            Got questions? We have{" "}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              answers.
            </span>
          </motion.h2>

          <motion.p
            variants={riseIn(STEP * 2)}
            className="text-sm sm:text-base leading-relaxed text-neutral-600"
          >
            Answers to the questions we hear most about JMonkDevops and its
            platforms.
          </motion.p>
        </motion.div>

        <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              // Each row triggers on its own with no index delay, unlike the
              // header group above. The six rows stack to ~540px, so their tops
              // cross the centre line at six different scroll offsets and they
              // reveal one by one as you read down, on desktop and mobile alike.
              // A shared trigger plus index delays would instead push the last
              // rows to a 1s wait and fire them while still below the fold.
              <motion.div
                key={faq.question}
                variants={riseIn(0)}
                {...centerTrigger}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-neutral-900">
                    {faq.question}
                  </span>
                  {/* transition covers transform as well as color: this icon
                      flips 180deg on open, and with transition-colors alone the
                      rotation snapped while only the colour eased. */}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-[color,transform] duration-300 ${
                      isOpen ? "rotate-180 text-red-600" : "text-neutral-400"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm md:text-base leading-relaxed text-neutral-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
