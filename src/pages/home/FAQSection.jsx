import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-0 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col items-start gap-4 text-left">
          <div className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              FAQs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            Got questions? We have answers.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            Answers to the questions we hear most about JMonkDevOps and its
            platforms.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
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
                      isOpen ? "rotate-180 text-amber-500" : "text-neutral-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="pb-5 text-sm md:text-base leading-relaxed text-neutral-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
