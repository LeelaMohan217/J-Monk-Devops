import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { faqs } from "./data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start gap-4 text-left"
        >
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              FAQs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            Got questions? We have <span className="text-red-600">answers</span>.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            Answers to the questions we hear most about JMonkDevOps and its
            platforms.
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={riseIn(Math.min(index, 4) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
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
                    className={`w-5 h-5 shrink-0 transition-colors ${
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
