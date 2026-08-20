import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroBackdrop } from "@/components/ui/hero-backdrop";
import { fadeIn } from "../../shared/variants";
import DashboardGridSection from "./DashboardGridSection";
import useIsDesktop from "./useIsDesktop";
import { HERO_CTA_DELAY } from "./motionConfig";

// y is 130%, not 100%, because each word's mask now carries bottom padding to
// clear the descenders (see the heading below). 100% would leave the word's top
// edge showing in that padding band before it animates in. 130% clears the
// tallest mask (the accent words, whose clip runs ~1.18x the line height) with
// margin to spare; the extra travel is not perceptible at this duration.
const wordReveal = (delay) => ({
  hidden: { y: "130%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

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
            <motion.p
              className="inline-flex w-fit shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-neutral-200 bg-white/60 px-3.5 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 shadow-sm backdrop-blur"
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate="show"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
              </span>
              digitalizing Local Bharath
            </motion.p>

            {/* leading-[1.05] rather than leading-tight (1.25): at display
                sizes 1.25 leaves a visible trench between the two lines. The
                descender room the tighter leading gives up is added back as
                padding on each word's mask, below. */}
            <h1 className="w-full max-w-4xl leading-[1.05] font-semibold sm:text-display-md lg:text-display-lg">
              {headingLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.map((word, wordIndex) => {
                    const index =
                      lineIndex * headingLines[0].length + wordIndex;
                    return (
                      <span
                        key={`${word.text}-${index}`}
                        // Every word's mask needs padding, because
                        // overflow-hidden clips any ink outside the line box.
                        //
                        // Bottom (all words): descenders. Space below the
                        // baseline inside the box is lineHeight/2 minus half the
                        // font's content height, so at leading-[1.05] neither
                        // face has room for its own descender: Inter's "y" needs
                        // 13/60em and has 9.5, Playfair's "f" needs 12/60em and
                        // has 6.5. 0.14em covers both with room to spare.
                        //
                        // Left/right (accent words only): Playfair Display
                        // Italic paints outside its advance width. The "f"
                        // starting "forward." reaches ~0.05em left of the layout
                        // origin, and the closing glyph's slant reaches right.
                        //
                        // Each pad is paired with an equal negative margin, so
                        // the ink stays exactly where it was and neither word
                        // spacing nor line spacing changes. Only the clip grows.
                        // wordReveal's hidden y is raised to 120% to stay hidden
                        // behind the taller mask.
                        className={`mr-[0.25em] -mb-[0.14em] inline-block overflow-hidden align-bottom pb-[0.14em] last:mr-0 ${
                          word.accent
                            ? "-ml-[0.08em] pl-[0.08em] pr-[0.08em]"
                            : ""
                        }`}
                      >
                        <motion.span
                          className={`inline-block ${word.accent ? ACCENT_CLASS : ""}`}
                          variants={wordReveal(0.1 + index * 0.04)}
                          initial="hidden"
                          animate="show"
                        >
                          {word.text}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <motion.p
              className="max-w-xl sm:max-w-2xl text-base text-neutral-600 leading-relaxed"
              variants={fadeIn("up", 1)}
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
            >
              <Link
                to="/#who-we-are"
                className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
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
