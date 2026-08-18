import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/variants";
import { AuroraText } from "@/components/ui/aurora-text";
import DashboardGridSection from "./DashboardGridSection";

const wordReveal = (delay) => ({
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-12">
      <div
        className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_0px,black_420px,transparent_640px)]"
        aria-hidden="true"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.14]">
          <defs>
            <pattern
              id="hero-grid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                className="stroke-neutral-400"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-start md:justify-center">
        <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
          <p className="text-xs uppercase border rounded-full py-2 px-3">
            digitalizing Local Bharath
          </p>
          <h1 className="max-w-6xl text-5xl sm:text-6xl font-semibold">
            Transforming Ideas into Exceptional Digital Experience
          </h1>

          <motion.p
            className="max-w-xl sm:max-w-2xl text-base text-neutral-600 leading-relaxed"
            variants={fadeIn("up", 1.9)}
            initial="hidden"
            animate="show"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills, and support individuals reaching global
            opportunities.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 2.15)}
            initial="hidden"
            animate="show"
          >
            <Link
              to="/#who-we-are"
              className="inline-block rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-12 md:mt-16">
        <DashboardGridSection />
      </div>
    </section>
  );
};

export default HeroSection;
