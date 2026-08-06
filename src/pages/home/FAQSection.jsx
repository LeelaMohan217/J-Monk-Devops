import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { faqs } from "./data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start gap-4 text-left lg:sticky lg:top-32"
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300">
              <span className="font-raleway text-xs font-light uppercase tracking-[0.2em]">
                FAQs
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.15)}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white"
          >
            Got <span className="text-orange-400">questions</span>? We have{" "}
            <span className="text-red-500">answers</span>.
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-sm sm:text-base leading-relaxed text-white/60"
          >
            Answers to the questions we hear most about JMonkDevOps and its
            platforms.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col divide-y divide-white/10 border-t border-white/10"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={faq.question} variants={fadeIn("up", 0.1)}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  </motion.span>
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
                      <p className="pb-5 text-sm md:text-base leading-relaxed text-white/60">
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
