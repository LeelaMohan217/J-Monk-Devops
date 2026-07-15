import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import { strengths } from "./data";
import SectionHeading from "./SectionHeading";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for long-term partnerships"
          description="A consistent set of principles carried across every platform we build."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.title}
              variants={fadeIn("up", 0.1)}
              className="group relative flex flex-col gap-4 p-7 bg-white rounded-2xl border border-neutral-200 hover:border-transparent hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-red-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg shadow-red-900/20">
                <strength.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900">
                {strength.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
