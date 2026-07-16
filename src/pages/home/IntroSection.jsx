import { motion } from "framer-motion";
import { Code2, GraduationCap, Globe2, Sparkles } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import ImageVisual from "./components/ImageVisual";
import { homeImages } from "./images";

const pillars = [
  { icon: Code2, title: "Digital Transformation" },
  { icon: GraduationCap, title: "Skill Development" },
  { icon: Globe2, title: "Global Education" },
];

const IntroSection = () => {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn("right", 0.1)}
          className="relative order-2 lg:order-1"
        >
          <ImageVisual
            src={homeImages.introGrowth}
            alt="Two professionals shaking hands, representing the JMonkDevOps partnership approach"
            icon={Sparkles}
            aspect="aspect-[4/3]"
            className="max-w-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:flex absolute -bottom-8 -right-4 md:-right-10 bg-white shadow-2xl shadow-neutral-900/10 border border-neutral-100 px-6 py-5 max-w-[15rem]"
          >
            <p className="text-sm text-neutral-600 leading-relaxed">
              <span className="block text-2xl font-bold text-neutral-900">
                3 Platforms.
              </span>
              One long-term mission.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-5 order-1 lg:order-2"
        >
          <motion.span
            variants={fadeIn("up", 0.1)}
            className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold"
          >
            Who We Are
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight"
          >
            Building the ecosystem behind digital growth
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-neutral-600 text-base md:text-lg leading-relaxed"
          >
            Our mission is to create impactful and accessible platforms that
            help businesses scale digitally, students gain real-world skills,
            and aspiring individuals access global education and career
            opportunities.
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-neutral-600 text-base md:text-lg leading-relaxed"
          >
            We&rsquo;re building toward a future-ready ecosystem where technology,
            practical skills, and global opportunities empower individuals
            and businesses to grow without limitations.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex flex-wrap gap-3 mt-4"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 pl-2 pr-4 py-2 hover:border-red-200 hover:bg-red-50/50 transition-colors"
              >
                <div className="w-7 h-7 bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">
                  {pillar.title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
