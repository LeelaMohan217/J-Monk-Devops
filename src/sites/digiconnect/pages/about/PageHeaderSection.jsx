import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import heroBg from "../../assets/digiconnect-about-hero.webp";

const PageHeaderSection = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-end overflow-hidden pt-28 pb-16 md:min-h-screen md:items-center md:pt-32 md:pb-24">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-16 bottom-0 h-[calc(100%-4rem)] w-full object-cover"
      />
      <div
        className="absolute inset-x-0 top-16 bottom-0 bg-gradient-to-t from-neutral-900/85 via-neutral-900/55 to-neutral-900/25 md:bg-gradient-to-r md:from-neutral-900/75 md:via-neutral-900/55 md:to-neutral-900/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left">
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
            className="max-w-2xl text-base leading-relaxed text-white/80"
          >
            {pageHeader.lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
