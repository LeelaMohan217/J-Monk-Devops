import { motion } from "framer-motion";
import { Code2, GraduationCap, Globe2 } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import ImageVisual from "./components/ImageVisual";
import { homeImages } from "./images";
import SectionHeading from "./SectionHeading";

const pillars = [
  { icon: Code2, title: "Digital Transformation" },
  { icon: GraduationCap, title: "Skill Development" },
  { icon: Globe2, title: "Global Education" },
];

const IntroSection = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-white py-10 md:py-14 scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building the ecosystem behind digital growth"
          description="We create connected platforms that help businesses, professionals, and students grow through technology, innovation, and practical solutions."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right", 0.1)}
            className="relative order-2 lg:order-1"
          >
            <ImageVisual
              src={homeImages.introGrowth}
              alt="Professionals collaborating to represent digital growth"
              aspect="aspect-4/3"
              className="max-w-lg"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 hidden max-w-60 rounded-xl border border-neutral-200 bg-white px-6 py-5 shadow-lg sm:flex md:-right-10"
            >
              <p className="text-sm leading-relaxed text-neutral-600">
                <span className="block text-xl font-semibold text-neutral-900">
                  3 Platforms.
                </span>
                One long-term mission.
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="order-1 flex flex-col gap-5 lg:order-2"
          >
            <motion.p
              variants={fadeIn("up", 0.1)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              We&apos;re building toward a future-ready ecosystem where
              technology, practical skills, and global opportunities empower
              individuals and businesses to grow without limitations.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.3)}
              className="mt-4 flex flex-wrap gap-3"
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 py-2 pl-2 pr-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <pillar.icon className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-sm font-medium text-neutral-800">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
