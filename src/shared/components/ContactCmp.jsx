import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../variants";

// Closing CTA rendered under every non-contact route, for every brand.
//
// Deliberately stays light: GlobalFooter directly below is bg-neutral-900, so an
// inverted banner here would merge into it and the page would lose its ending.
// The hairline top border is what separates it from whichever surface the last
// section used.
//
// maxWidthClass mirrors Navbar's prop — the rail differs per brand shell
// (DigiConnect and EduConnect run max-w-7xl, SkillConnect max-w-6xl), and this
// banner has to line up with the sections above it rather than impose a width.
const ContactCmp = ({
  heading,
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
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        >
          <div>
            <h2 className="max-w-2xl text-display-sm font-semibold text-neutral-900">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
              {subtext}
            </p>
          </div>

          <Link
            to={ctaHref}
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
