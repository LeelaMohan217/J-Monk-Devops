import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { pageHeader } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const PageHeaderSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Masked grid, same treatment as the home hero but namespaced with its
          own pattern id since both mount within the same site. */}
      <div
        className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_0px,black_420px,transparent_640px)]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          focusable="false"
        >
          <defs>
            <pattern
              id="digiconnect-about-grid"
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
          <rect width="100%" height="100%" fill="url(#digiconnect-about-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-6 text-left">
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
            className="max-w-3xl text-display-sm font-semibold text-neutral-900 sm:text-display-md"
          >
            {pageHeader.headingLead}
            <span className={ACCENT_CLASS}>{pageHeader.headingAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            {pageHeader.lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
