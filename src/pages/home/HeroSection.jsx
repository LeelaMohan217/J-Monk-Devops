import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HeroBackdrop } from "@/components/ui/hero-backdrop";
import { fadeIn } from "../../shared/variants";
import { HERO_HEADING_SIZE } from "../../shared/headingSizes";
import WordReveal from "../../shared/components/WordReveal";
import DashboardGridSection from "./DashboardGridSection";
import useIsDesktop from "../../shared/hooks/useIsDesktop";
import { HERO_CTA_DELAY, HERO_LEAD_DELAY } from "../../shared/motionConfig";

// Grouped into two explicit lines rather than left to wrap naturally, so the
// heading is reliably 2 lines at any viewport width instead of depending on
// max-w to coax a break in the right place. `accent` words get the red
// Playfair Display italic treatment used for accent text across the brands.
const headingLines = [
  [{ text: "Everything" }, { text: "you" }, { text: "need" }],
  [
    { text: "to" },
    { text: "move", accent: true },
    { text: "forward.", accent: true },
  ],
];

const ACCENT_CLASS = "font-['Playfair_Display',serif] text-red-600 italic";

const HeroSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 pb-12">
      {/* Backdrop wrapper's height tracks whatever it contains. From lg up
          that includes DashboardGridSection, so the waves span the whole
          hero; below lg the grid renders outside this wrapper instead (see
          the isDesktop check below), same as before. */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <HeroBackdrop />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Magic UI's shiny-text badge, same treatment as the DigiConnect
                hero's, but keeping this page's own pinging dot where that one
                has a sparkle.

                The glass chrome stays: border-neutral-200 over bg-white/60 with
                backdrop-blur, not the opaque bg-neutral-100 the DigiConnect
                badge uses. This badge sits on top of HeroBackdrop's waves, so
                the translucency is doing real work here and an opaque fill would
                punch a flat hole in them.

                The dot stays outside AnimatedShinyText. It could sit inside
                without breaking (bg-clip-text clips an element's own background,
                not its children's) but the badge is already the flex row with
                gap-2, so nesting it would buy nothing and would put a red
                element inside something whose whole job is tinting text.

                Casing and weight are untouched, still text-xs font-semibold
                uppercase tracking-widest. Unlike the DigiConnect badge, which is
                lowercase at text-sm, that was not part of the ask here.

                No arrow either, again unlike DigiConnect's: this badge is a
                label rather than a Link, and an arrow on it would point nowhere.

                text-neutral-800/70 replaces text-neutral-600. The alpha is what
                makes the sweep visible at all, since it is a gradient clipped to
                the glyphs showing through the text colour's transparency, and
                darkening 600 to 800 keeps it legible once 30% of it is given up
                to that. */}
            <motion.p
              className="inline-flex w-fit shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-neutral-200 bg-white/60 px-3.5 py-2 shadow-sm backdrop-blur"
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate="show"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
              </span>
              <AnimatedShinyText className="mx-0 text-xs font-semibold uppercase tracking-widest text-neutral-800/70">
                digitalizing Local Bharath
              </AnimatedShinyText>
            </motion.p>

            {/* leading-[1.05] rather than leading-tight (1.25): at display
                sizes 1.25 leaves a visible trench between the two lines. The
                descender room the tighter leading gives up is added back as
                padding on each word's mask, inside WordReveal. It overrides the
                line-height the display-* tokens carry at every step, which is
                why that mask padding can stay a single em value.

                The size ramp itself is HERO_HEADING_SIZE, shared with the brand
                heroes. Its base step matters here: without one the heading
                dropped to the inherited 16px on phones. */}
            <h1
              className={`w-full max-w-4xl leading-[1.05] font-semibold ${HERO_HEADING_SIZE}`}
            >
              <WordReveal lines={headingLines} accentClass={ACCENT_CLASS} />
            </h1>

            <motion.p
              className="max-w-xl sm:max-w-2xl text-base text-neutral-600 leading-relaxed"
              variants={fadeIn("up", HERO_LEAD_DELAY)}
              initial="hidden"
              animate="show"
            >
              We build focused platforms that help businesses grow digitally,
              give students practical skills, and support individuals reaching
              global opportunities.
            </motion.p>

            {/* Last of the hero copy. DashboardGridSection's cards follow at
                HERO_CARDS_DELAY, so both delays come from motionConfig to keep
                that order fixed. */}
            <motion.div
              variants={fadeIn("up", HERO_CTA_DELAY)}
              initial="hidden"
              animate="show"
              // The hero column is flex flex-col items-center, so this wrapper
              // shrinks to its content and the Link's w-full would resolve
              // against that shrunk box rather than the column. It needs the
              // width itself for the button to reach the full rail on a phone.
              className="w-full sm:w-auto"
            >
              {/* w-full below sm so the hero CTA spans the column on a phone
                  the way every brand hero's does, then sm:w-fit to hold it to
                  its label once there is room. justify-center matters only in
                  the full-width state, where the label would otherwise sit
                  against the left padding. */}
              <Link
                to="/#who-we-are"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 sm:w-fit"
              >
                Know More
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {isDesktop && (
          <div className="relative z-10 mt-12 md:mt-16">
            <DashboardGridSection />
          </div>
        )}
      </div>

      {!isDesktop && (
        <div className="relative z-10 mt-12 md:mt-16">
          <DashboardGridSection />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
