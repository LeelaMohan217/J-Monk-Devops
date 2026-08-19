import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";

// Plain typographic header on the site rail. The masked grid backdrop that used
// to sit behind this came from the old hero treatment; the home hero dropped it
// for a photographic backdrop, so keeping it here left the page headers as the
// only place it appeared. (The services and blog headers still carry it.)
const PageHeaderSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-5 text-left">
          <motion.span
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {pageHeader.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
          >
            {pageHeader.heading}
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
          >
            {pageHeader.lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
