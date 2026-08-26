import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";

const PageHeaderSection = () => {
  return (
    <section className="w-full bg-surface pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.span
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {pageHeader.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className={`max-w-3xl text-center font-semibold text-neutral-800 ${PAGE_HEADING_SIZE}`}
          >
            {pageHeader.headingLead}
            <span className={ACCENT_CLASS}>{pageHeader.headingAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-center text-base leading-relaxed text-neutral-600"
          >
            {pageHeader.lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default  PageHeaderSection;