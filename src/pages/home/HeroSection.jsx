import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroBackdrop } from "@/components/ui/hero-backdrop";
import { fadeIn } from "../../shared/variants";
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

// Grouped into two explicit lines rather than left to wrap naturally, so the
// heading is reliably 2 lines at any viewport width instead of depending on
// max-w to coax a break in the right place.
const headingLines = [
  ["Everything", "you", "need"],
  ["to", "move", "forward."],
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-12">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.p
            className="inline-flex w-fit shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-neutral-200 bg-white/60 px-3.5 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 shadow-sm backdrop-blur"
            variants={fadeIn("up", 0)}
            initial="hidden"
            animate="show"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
            digitalizing Local Bharath
          </motion.p>

          <h1 className="w-full max-w-2xl text-3xl leading-tight font-semibold sm:text-5xl md:text-6xl">
            {headingLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => {
                  const index = lineIndex * headingLines[0].length + wordIndex;
                  return (
                    <span
                      key={`${word}-${index}`}
                      className="mr-[0.25em] inline-block overflow-hidden align-bottom last:mr-0"
                    >
                      <motion.span
                        className="inline-block"
                        variants={wordReveal(0.1 + index * 0.04)}
                        initial="hidden"
                        animate="show"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            className="max-w-xl sm:max-w-2xl text-base text-neutral-600 leading-relaxed"
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate="show"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills, and support individuals reaching global
            opportunities.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 1.15)}
            initial="hidden"
            animate="show"
          >
            <Link
              to="/#who-we-are"
              className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              See who we are
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
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
