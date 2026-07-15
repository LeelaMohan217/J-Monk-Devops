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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.title}
              variants={fadeIn("up", 0.1)}
              className="group flex flex-col gap-4"
            >
              <div className="relative w-12 h-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 text-white flex items-center justify-center relative z-10 shadow-lg shadow-neutral-900/20 transition-transform duration-300 group-hover:scale-110 group-hover:from-red-600 group-hover:to-red-800">
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-semibold flex items-center justify-center border-2 border-white z-20">
                  {step.step}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
