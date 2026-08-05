import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { AnimatedGradientText } from "../../components/ui/animated-gradient-text";
import { homeImages } from "./images";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <img
        src={homeImages.heroGlobe}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-28 md:py-40 flex flex-col items-start text-left">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-5 md:max-w-2xl"
        >
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="group relative mx-0 flex items-center justify-center rounded-full px-4 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
          >
            <span
              className="animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-xs font-medium">
              One Ecosystem. Three Platforms.
            </AnimatedGradientText>
            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </motion.div>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            JMonkDevOps
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Digitalizing Local Bharath
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="max-w-3xl text-white/60 text-sm md:text-base leading-relaxed"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills through real world learning, and support
            aspiring individuals in reaching global opportunities. Every
            platform has its own identity, but all are built with the same
            commitment to quality.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex flex-wrap justify-start gap-4 mt-1"
          >
            <a
              href="#platforms"
              className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-700 hover:shadow-md hover:-translate-y-0.5"
            >
              Explore Platforms
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#who-we-are"
              className="rounded-lg bg-transparent border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Know More About Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
