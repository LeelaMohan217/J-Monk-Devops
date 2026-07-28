import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import { processSteps } from "./data";
import SectionHeading from "./SectionHeading";

const ProcessSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="How We Work"
          title="A straightforward process"
          description="No unnecessary ceremony — just a clear path from first conversation to long-term support."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.div key={step.title} variants={fadeIn("up", 0.1)}>
              {/* Hover scale lives on this plain div, separate from the motion.div
                  above — framer-motion drives that element's `transform` via inline
                  style for the entrance animation, which would permanently override
                  any CSS `hover:scale` class placed on the same node. */}
              <div className="group relative flex flex-col justify-between h-64 p-6 border border-neutral-200 bg-neutral-50 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 hover:bg-white">
                <step.icon className="w-7 h-7 text-neutral-800 transition-colors duration-300 group-hover:text-neutral-900" />

                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-lg text-neutral-900">
                    {step.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:mt-2 transition-[grid-template-rows] duration-300 ease-in-out">
                    <p className="overflow-hidden text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
