import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { PAGE_HEADING_SIZE } from "../headingSizes";
import useDocumentMeta from "../hooks/useDocumentMeta";

const StatusPage = ({
  code,
  headingLead,
  headingAccent,
  subtext,
  ctaLabel,
  ctaHref,
  ctaIsExternalReload = false,
}) => {
  const CtaTag = ctaIsExternalReload ? "a" : Link;
  const ctaProps = ctaIsExternalReload ? { href: ctaHref } : { to: ctaHref };

  useDocumentMeta(`${headingLead} | JMonkDevops`, subtext);

  return (
    <section className="w-full bg-surface pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
        {code && (
          <motion.p
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="select-none text-[96px] font-extrabold leading-none tracking-[-0.04em] text-red-600/[0.12] md:text-[140px]"
          >
            {code}
          </motion.p>
        )}

        <motion.h1
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          className={`mx-auto max-w-2xl font-semibold text-neutral-900 ${
            code ? "-mt-6 md:-mt-10" : ""
          } ${PAGE_HEADING_SIZE}`}
        >
          {headingLead}
          {headingAccent && <span className="text-red-600">{headingAccent}</span>}
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600"
        >
          {subtext}
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.45)}
          initial="hidden"
          animate="show"
          className="mt-8"
        >
          <CtaTag
            {...ctaProps}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {ctaLabel}
          </CtaTag>
        </motion.div>
      </div>
    </section>
  );
};

export default StatusPage;
