import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../variants";

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
    <section className="border-t border-neutral-200 bg-surface">
      <div className={`mx-auto ${maxWidthClass} px-6 py-16 md:px-8 md:py-24`}>
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <div>
            <h2 className="mx-auto max-w-2xl text-display-sm font-semibold text-neutral-800">
              {headingLead}
              {headingAccent && (
                <span className={accentClass}>{headingAccent}</span>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
              {subtext}
            </p>
          </div>

          <Link
            to={ctaHref}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
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
