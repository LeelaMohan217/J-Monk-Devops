import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../variants";

// Closing CTA rendered under every non-contact route, for every brand.
//
// Two variants:
//
// "default" — EduConnect only, and the fallback for any value that is not
// "panel". Deliberately stays light: GlobalFooter directly below is
// bg-neutral-900, so an inverted banner here would merge into it and the page
// would lose its ending. The hairline top border is what separates it from
// whichever surface the last section used. Heading, subtext, and button are all
// centred on one axis, so the band reads as a single closing statement rather
// than a left-aligned block with a button pushed to the far edge.
//
// Note that EduConnect's config asks for variant "dark", which does not exist
// here and therefore lands on this default. Either add that variant or drop the
// value; today it is only misleading, not broken.
//
// "panel" — DigiConnect and SkillConnect. A bordered card with a red rule along
// its top edge, an eyebrow, and an accented heading, so the page closes on a
// deliberate object rather than trailing off into a full-bleed band.
//
// Both variants take their content as props and hardcode no brand's copy.
// maxWidthClass mirrors Navbar's prop, since the rail differs per brand shell
// and this banner has to line up with the sections above it rather than impose a
// width. eyebrow / headingAccent / accentClass are optional and unset for the
// brands on "default", so those render exactly as before.
//
// The heading prop is `headingLead`, not `heading`, to match the
// headingLead/headingAccent pair every page's data.js splits its headings into.
// It was `heading` until the panel variant landed: DigiConnect's and
// SkillConnect's configs both wrote `headingLead` on the assumption it followed
// that convention, so both silently dropped the first half of their closing
// heading and rendered only the accent.
const ContactCmp = ({
  headingLead,
  headingAccent,
  accentClass = "",
  eyebrow,
  subtext,
  ctaLabel,
  ctaHref,
  maxWidthClass = "max-w-6xl",
  variant = "default",
}) => {
  const arrow = (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  );

  if (variant !== "panel") {
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
              {/* mx-auto on both, because max-w on a centred child still needs
                  its own centring: text-center aligns the lines inside the box,
                  it does not centre the box itself. */}
              <h2 className="mx-auto max-w-2xl text-display-sm font-semibold text-neutral-900">
                {headingLead}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                {subtext}
              </p>
            </div>

            {/* rounded-full, matching the pill EduConnect uses for buttons
                elsewhere on its pages. The panel variant below keeps rounded-lg,
                which is what DigiConnect and SkillConnect use throughout. */}
            <Link
              to={ctaHref}
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {ctaLabel}
              {arrow}
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface">
      <div className={`mx-auto ${maxWidthClass} px-6 pb-20 md:px-8 md:pb-28`}>
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-surface-muted"
        >
          {/* Red rule along the top edge, the one piece of colour holding the
              card together. Inside the overflow clip so it stops at the corners
              rather than running past them. */}
          <span
            className="absolute inset-x-0 top-0 h-0.5 bg-red-600"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 p-8 md:p-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-16">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                  {eyebrow}
                </span>
              )}

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                {headingLead}
                {headingAccent && (
                  <span className={accentClass}>{headingAccent}</span>
                )}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                {subtext}
              </p>
            </div>

            {/* shrink-0 so the button never compresses under the heading at the
                lg breakpoint, where the two sit side by side. */}
            <Link
              to={ctaHref}
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {ctaLabel}
              {arrow}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCmp;
