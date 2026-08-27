import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeIn } from "../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../shared/motionConfig";
import { faqs } from "./data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="flex flex-col items-start gap-4 text-left"
        >
          <motion.div
            variants={fadeIn("up", 0 * STEP)}
            className="inline-flex items-center gap-2 text-neutral-600"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              FAQs
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 1 * STEP)}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-800"
          >
            Got questions? We have{" "}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              answers.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 2 * STEP)}
            className="text-sm sm:text-base leading-relaxed text-neutral-600"
          >
            Answers to the questions we hear most about JMonkDevops and its
            platforms.
          </motion.p>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={fadeIn("up", index * 0.08)}
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
