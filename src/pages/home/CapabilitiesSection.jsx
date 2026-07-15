import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { capabilities } from "./data";
import { homeImages } from "./images";
import SectionHeading from "./SectionHeading";

const [featured, ...rest] = capabilities;

const CapabilitiesSection = () => {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we build"
            align="left"
          />
          <Link
            to="/digiconnect"
            className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all w-fit"
          >
            Live today through DigiConnect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="relative lg:col-span-2 rounded-2xl overflow-hidden min-h-[16rem] group"
          >
            <img
              src={homeImages.capabilitiesFeature}
              alt="A developer working across multiple monitors, representing custom software development"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <featured.icon
                className="w-28 h-28 md:w-32 md:h-32 text-white/10"
                strokeWidth={1}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/10" />
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/30 rounded-tl-md" />
            <div className="relative h-full flex flex-col justify-end gap-3 p-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                <featured.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-white">
                {featured.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-md">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {rest.map((capability) => (
            <motion.div
              key={capability.title}
              variants={fadeIn("up", 0.1)}
              className="flex flex-col gap-3 p-7 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20">
                <capability.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900">
                {capability.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
