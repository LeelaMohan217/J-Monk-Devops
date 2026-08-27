import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import GlazeSweep from "../../../../shared/components/GlazeSweep";

const PageHeaderSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24 lg:flex lg:h-screen lg:items-center lg:pt-32 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
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
            className={`max-w-3xl font-semibold text-neutral-800 ${PAGE_HEADING_SIZE}`}
          >
            {pageHeader.headingLead}
            <span className={ACCENT_CLASS}>{pageHeader.headingAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-base leading-relaxed text-neutral-600"
          >
            {pageHeader.lead}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            animate="show"
            className="mt-2"
          >
            <Link
              to={pageHeader.cta.href}
              className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <GlazeSweep className="bg-white/30" />
              {pageHeader.cta.label}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
