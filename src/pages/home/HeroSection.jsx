import { motion } from "framer-motion";
import { Code2, GraduationCap, Network } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import ImageVisual from "./components/ImageVisual";
import AnimatedCounter from "./components/AnimatedCounter";
import { homeImages } from "./images";

const stats = [
  { value: 3, suffix: "", label: "Platforms in the ecosystem" },
  { value: 6, suffix: "+", label: "Core technology services" },
  { value: 4, suffix: "-step", label: "Delivery process" },
];

const badges = [
  {
    icon: Code2,
    label: "DigiConnect",
    sublabel: "Live platform",
    position: "-bottom-6 -left-4 sm:-left-8",
  },
  {
    icon: GraduationCap,
    label: "SkillConnect",
    sublabel: "Live platform",
    position: "-top-6 -right-4 sm:-right-8",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <img
        src={homeImages.heroBackdrop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/85 to-neutral-950" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left gap-6"
        >
          <motion.span
            variants={fadeIn("up", 0.1)}
            className="uppercase tracking-[0.3em] text-red-500 text-xs md:text-sm font-semibold"
          >
            One Ecosystem. Three Platforms.
          </motion.span>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05]"
          >
            JMonk
            <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
              DevOps
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="italic text-neutral-300 text-base md:text-lg"
          >
            Digitalising Local Bhaarat
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed"
          >
            We build focused platforms that help businesses scale digitally,
            students gain real-world skills, and aspiring individuals reach
            global opportunities — each with its own identity, all backed by
            the same commitment to quality.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#platforms"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 rounded-full shadow-lg shadow-red-900/30 hover:shadow-red-700/40 hover:-translate-y-0.5"
            >
              Explore Platforms
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10 w-full"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          className="hidden lg:block"
        >
          <ImageVisual
            src={homeImages.heroEcosystem}
            alt="A professional working on a laptop, representing the JMonkDevOps ecosystem"
            icon={Network}
            badges={badges}
            aspect="aspect-[4/5]"
            className="max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
