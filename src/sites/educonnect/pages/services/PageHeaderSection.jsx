import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import { pageHeader } from "./data";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import heroBg from "../../assets/services/educonnect-services-hero.webp";

const PageHeaderSection = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden pt-28 pb-12 md:min-h-screen md:pt-32 md:pb-16">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width="1824"
        height="1120"
        className="absolute inset-x-0 top-16 bottom-0 h-[calc(100%-4rem)] w-full object-cover"
      />
      <div
        className="absolute inset-x-0 top-16 bottom-0 bg-gradient-to-t from-neutral-900/85 via-neutral-900/60 to-neutral-900/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <motion.span
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70"
          >
            {pageHeader.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className={`max-w-3xl font-semibold text-white ${PAGE_HEADING_SIZE}`}
          >
            {pageHeader.headingLead}
            {pageHeader.headingAccent}
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base"
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
              className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
