import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeIn } from "../../shared/variants";
import { platforms } from "./data";
import { homeImages } from "./images";
import SectionHeading from "./SectionHeading";
import ImageVisual from "./components/ImageVisual";

const imageByPlatform = {
  DigiConnect: homeImages.platformDigiConnect,
  SkillConnect: homeImages.platformSkillConnect,
  EduConnect: homeImages.platformEduConnect,
};

const altByPlatform = {
  DigiConnect: "A team reviewing a software product dashboard on screen, representing DigiConnect",
  SkillConnect: "A group of people collaborating together on laptops, representing SkillConnect",
  EduConnect: "A person planning their next step on a laptop, representing EduConnect",
};

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
                  <ImageVisual
                    src={imageByPlatform[platform.name]}
                    alt={altByPlatform[platform.name]}
                    icon={platform.icon}
                    aspect="aspect-[4/3]"
                    badges={[
                      {
                        icon: platform.icon,
                        label: platform.name,
                        sublabel: platform.tagline,
                        position: reversed
                          ? "-bottom-6 -right-4 sm:-right-8"
                          : "-bottom-6 -left-4 sm:-left-8",
                      },
                    ]}
                  />
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
                    <span className="text-sm font-mono text-neutral-300">
                      {platform.id}
                    </span>
                    {!platform.available && (
                      <span className="text-[10px] uppercase tracking-wide font-semibold text-neutral-500 border border-neutral-300 rounded-full px-3 py-1">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900">
                    {platform.name}
                  </h3>
                  <p className="text-red-600 text-sm italic font-medium">
                    {platform.tagline}
                  </p>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {platform.description}
                  </p>

                  <ul className="flex flex-col gap-2 mt-2">
                    {platform.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        {offering}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    {platform.available ? (
                      <Link
                        to={platform.href}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 rounded-full shadow-lg shadow-red-900/10 hover:-translate-y-0.5 w-fit"
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
