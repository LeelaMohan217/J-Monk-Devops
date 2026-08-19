import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { hero } from "./data";
import heroPortrait700 from "../../assets/educonnect-hero-portrait-700.webp";
import heroPortrait1050 from "../../assets/educonnect-hero-portrait-1050.webp";
import heroWebp800 from "../../assets/educonnect-hero-800.webp";
import heroWebp1200 from "../../assets/educonnect-hero-1200.webp";
import heroWebp1672 from "../../assets/educonnect-hero-1672.webp";
import heroJpg1200 from "../../assets/educonnect-hero-1200.jpg";

// Photographic hero: the backdrop image runs at full strength (no wash or
// grid pattern over it), so the copy is inverted to white, left-aligned, and
// carries its own text-shadow rather than leaning on an overlay for contrast.
//
// The image lives in its own panel rather than filling the section, so it
// starts flush under the fixed brand Navbar instead of running behind it —
// 65px is that bar's height (py-2 = 16 + h-12 logo = 48 + 1px bottom border).
const HeroSection = () => {
  return (
    <section className="relative w-full bg-surface pt-[65px] px-6">
      <div className="relative overflow-hidden rounded-sm">
        {/* Responsive variants derived from the 1.8MB source PNG — the largest
            WebP is 84KB, and a phone now pulls 44KB instead of a 1672px-wide
            PNG. Below sm the panel is portrait, where a centred landscape frame
            left only a ~23%-wide slice of glass on screen, so phones get an
            art-directed 3:4 crop centred on the traveller rather than a nudged
            object-position. The JPEG covers browsers without WebP.
            <picture> carries the absolute positioning rather than the <img>: as
            an inline element it would otherwise contribute a line box to the
            panel's height. */}
        <picture className="absolute inset-0 block">
          <source
            type="image/webp"
            media="(max-width: 639px)"
            srcSet={`${heroPortrait700} 700w, ${heroPortrait1050} 1050w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${heroWebp800} 800w, ${heroWebp1200} 1200w, ${heroWebp1672} 1672w`}
            sizes="100vw"
          />
          <img
            src={heroJpg1200}
            alt=""
            className="h-full w-full object-cover object-center"
            decoding="async"
          />
        </picture>

        {/* Left-anchored scrim, not a flat wash: heaviest under the copy column,
            still ~55% black across the sun glare near the middle, then clear by
            the right third so the subject and the Departures sign stay bright.
            Explicit stops rather than from/via/to — the glare sits at ~35%, not
            at the 50% midpoint a three-stop gradient would put the via colour. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.78)_0%,rgb(0_0_0/0.66)_28%,rgb(0_0_0/0.5)_48%,rgb(0_0_0/0.2)_70%,rgb(0_0_0/0)_88%)]"
          aria-hidden="true"
        />

        {/* Shorter panel on phones keeps the portrait crop of a landscape photo
            from getting more extreme than it has to. */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-8 md:py-28 [text-shadow:0_2px_18px_rgb(0_0_0_/_0.55)]">
          {/* Copy column is capped well inside the scrim's dark end, so no line
              of type can run out over the sun glare on a wide monitor. */}
          <div className="flex max-w-3xl flex-col items-start gap-6 text-left">
            {/* Same eyebrow treatment as the light sections below, inverted for
                the photo — see home/ServicesSection. */}
            <motion.span
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate="show"
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/80"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-display-sm font-semibold text-white sm:text-display-md lg:text-display-lg"
            >
              {hero.heading}
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-xl text-sm leading-relaxed text-white/90 md:text-base"
            >
              {hero.lead}
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
