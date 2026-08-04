import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { platforms } from "./data";
import SectionHeading from "./SectionHeading";

const PlatformsSection = () => {
  return (
    <section id="platforms" className="bg-neutral-50 py-10 md:py-14 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Platforms"
          title="Three platforms. One ecosystem."
          description="Each platform has its own identity and focus, built on the same commitment to quality and long-term partnership."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              variants={fadeIn("up", 0.1)}
              className="flex flex-col sm:flex-row gap-5 sm:gap-8 rounded-2xl bg-white p-6"
            >
              <div className="aspect-video sm:aspect-square w-full sm:w-56 md:w-64 shrink-0 rounded-xl bg-neutral-100" />

              <div className="flex flex-1 flex-col justify-center gap-2">
                <span className="text-xs font-semibold text-neutral-400">
                  Platform {platform.id}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {platform.name}
                </h3>
                <p className="text-sm font-medium text-neutral-500">
                  {platform.tagline}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {platform.description}
                </p>

                <Link
                  to={platform.href}
                  className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
                >
                  Visit {platform.name}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
