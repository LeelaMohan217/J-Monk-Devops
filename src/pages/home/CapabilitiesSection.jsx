import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import { capabilities } from "./data";
import SectionHeading from "./SectionHeading";

const CapabilityCard = ({ capability, large }) => (
  <motion.div
    variants={fadeIn("up", 0.1)}
    className={`flex flex-col gap-4 rounded-2xl border border-neutral-200 ${
      large ? "p-8" : "p-6"
    }`}
  >
    <div
      className={`rounded-lg bg-neutral-900 text-white flex items-center justify-center ${
        large ? "w-10 h-10" : "w-9 h-9"
      }`}
    >
      <capability.icon className={large ? "w-5 h-5" : "w-4 h-4"} />
    </div>
    <div className="flex flex-col gap-1.5">
      <h3
        className={`font-semibold tracking-tight text-neutral-900 ${
          large ? "text-lg" : "text-base"
        }`}
      >
        {capability.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed">
        {capability.description}
      </p>
    </div>
  </motion.div>
);

const CapabilitiesSection = () => {
  const featured = capabilities.slice(0, 2);
  const rest = capabilities.slice(2);

  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading eyebrow="Capabilities" title="What we build" align="left" />

        <div className="flex flex-col gap-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {featured.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} large />
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
