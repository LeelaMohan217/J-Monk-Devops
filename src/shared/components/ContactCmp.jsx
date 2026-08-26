import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../variants";
import GlazeSweep from "./GlazeSweep";

const ContactCmp = ({
  headingLead,
  headingAccent,
  accentClass = "",
  subtext,
  ctaLabel,
  ctaHref,
  maxWidthClass = "max-w-6xl",
}) => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className={`mx-auto ${maxWidthClass} px-6 md:px-8`}>
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-neutral-900 px-6 py-16 text-center md:px-16 md:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.28),_transparent_60%)]"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-display-sm font-semibold text-white">
              {headingLead}
              {headingAccent && (
                <span className={accentClass}>{headingAccent}</span>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
              {subtext}
            </p>
          </div>

          <Link
            to={ctaHref}
            className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <GlazeSweep className="bg-white/25" />
            {ctaLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCmp;
