import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";

const pageHeader = {
  eyebrow: "Blog",
  headingLead: "Notes from the ",
  headingAccent: "study abroad process.",
  lead: "Practical guidance on exams, applications, visas, and life abroad, drawn from the questions students ask us most.",
};

// Matches about/ and services/ PageHeaderSection: plain typographic header on
// the site rail, no grid backdrop.
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
            {pageHeader.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {pageHeader.headingAccent}
            </span>
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
