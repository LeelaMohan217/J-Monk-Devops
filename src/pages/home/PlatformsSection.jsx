import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeIn } from "../../shared/variants";
import { platforms } from "./data";
import SectionHeading from "./SectionHeading";
import { MagicCard } from "../../components/ui/magic-card";

const PlatformsSection = () => {
  return (
    <section id="platforms" className="bg-neutral-50 py-20 md:py-28 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-20 md:gap-28">
        <SectionHeading
          eyebrow="Our Platforms"
          title="Three platforms. One ecosystem."
          description="Each platform has its own identity and focus, built on the same commitment to quality and long-term partnership."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {platforms.map((platform, index) => {
            const reversed = index % 2 === 1;

            return (
              <div
                key={platform.name}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <motion.div
                  variants={fadeIn(reversed ? "left" : "right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className={reversed ? "lg:order-2" : "lg:order-1"}
                >
                  <MagicCard
                    className="aspect-4/3 rounded-2xl border border-neutral-200"
                    gradientFrom="#dc2626"
                    gradientTo="#171717"
                    gradientColor="#fef2f2"
                    gradientOpacity={0.25}
                    gradientSize={260}
                  >
                    <div className="h-full flex flex-col justify-between p-8 md:p-10">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                          <platform.icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-sm text-neutral-300">
                          {platform.id}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                          {platform.name}
                        </h4>
                        <p className="text-red-600 text-sm font-medium">
                          {platform.tagline}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </motion.div>

                <motion.div
                  variants={fadeIn(reversed ? "right" : "left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex flex-col gap-4 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-neutral-300">
                      {platform.id}
                    </span>
                    {!platform.available && (
                      <span className="rounded-full text-[10px] uppercase tracking-wide font-semibold text-neutral-500 border border-neutral-300 px-3 py-1">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">
                    {platform.name}
                  </h3>
                  <p className="text-red-600 text-sm font-medium">
                    {platform.tagline}
                  </p>
                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {platform.description}
                  </p>

                  <ul className="flex flex-col gap-2 mt-2">
                    {platform.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        {offering}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    {platform.available ? (
                      <Link
                        to={platform.href}
                        className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-neutral-800 hover:shadow-md hover:-translate-y-0.5 w-fit"
                      >
                        Visit {platform.name}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <span className="text-neutral-400 font-medium">
                        Launching soon
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
