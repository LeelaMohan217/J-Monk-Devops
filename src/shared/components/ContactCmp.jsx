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
          // Three things changed here to take the panel from conventional to
          // quiet-premium.
          //
          // The 2px red rule across the top edge is gone. A hard coloured bar
          // pinned to one edge is a dated device and it was the loudest thing in
          // the block, competing with the button for the eye. The colour now
          // arrives as a wide radial glow from the top right, the treatment
          // already on the about, careers and offerings cards, so the panel
          // belongs to the same family instead of announcing itself.
          //
          // The fill moves off surface-muted onto white. The panel sits on a
          // white page, so a grey card read as a box dropped onto it; white with
          // a hairline reads as part of the page.
          //
          // Padding grows a step at every tier, up to p-20 on desktop. Space is
          // most of what separates premium from merely tidy, and this is the
          // last thing on the page, so it can afford it.
          className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-surface bg-radial-[at_100%_0%] from-red-50 via-surface to-surface to-70%"
        >
          <div className="flex flex-col gap-10 p-8 md:p-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-20">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {eyebrow}
                </span>
              )}

              {/* One step larger than the section headings around it, and on
                  balance-wrapped lines so a two-line heading breaks evenly
                  rather than leaving one word stranded on the second line. */}
              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
                {headingLead}
                {headingAccent && (
                  <span className={accentClass}>{headingAccent}</span>
                )}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
                {subtext}
              </p>
            </div>

            {/* shrink-0 so the button never compresses under the heading at the
                lg breakpoint, where the two sit side by side.

                Now the only saturated element in the panel, since the red top
                rule is gone, so it reads as the single action without needing to
                be large. Sized up slightly and given the arrow slide the site's
                other CTAs use. */}
            <Link
              to={ctaHref}
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
