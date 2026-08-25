import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../variants";

// Closing CTA rendered under every non-contact route, for every brand.
//
// One design now, the band EduConnect was already using: a hairline rule
// separating it from whichever surface the last section used, then the heading,
// subtext and pill button centred on a single axis.
//
// There used to be a second "panel" variant for DigiConnect and SkillConnect, a
// bordered card with a red rule along its top edge. It is gone, along with the
// `variant` and `eyebrow` props that served it. Three brands closing their pages
// three different ways was the thing making them read as three sites.
//
// Deliberately stays light: GlobalFooter directly below is bg-neutral-900, so an
// inverted band here would merge into it and the page would lose its ending.
//
// Content comes in as props and no brand's copy is hardcoded. maxWidthClass
// mirrors Navbar's prop, since the rail differs per brand shell and this band has
// to line up with the sections above it rather than impose a width.
//
// The heading prop is `headingLead`, not `heading`, to match the
// headingLead/headingAccent pair every page's data.js splits its headings into.
// `headingAccent` and `accentClass` are optional: DigiConnect and SkillConnect
// split their closing heading and colour the tail, EduConnect passes one plain
// string. Rendering the accent conditionally is what let all three share this
// band without DigiConnect losing the back half of its sentence.
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
            {/* mx-auto on both, because max-w on a centred child still needs its
                own centring: text-center aligns the lines inside the box, it
                does not centre the box itself. */}
            <h2 className="mx-auto max-w-2xl text-display-sm font-semibold text-neutral-900">
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
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 w-full sm:w-auto"
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
