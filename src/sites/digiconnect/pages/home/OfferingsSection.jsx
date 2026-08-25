import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Column spans by position, over a six-column grid. Rows work out as 3+3,
// 2+2+2, then 3 plus the 3-wide CTA cell, so every row fills exactly and the
// grid ends square.
const SPANS = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
];

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="bg-surface py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {offerings.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
        </motion.div>

        {/* Bento, replacing six full-width rows that each ran the name down the
            left and the description across the right. Stacked, they were six
            near-identical bands and the section read as a table.

            Spans over six columns: 3+3, then 2+2+2, then 3+3, so each row fills
            exactly and no two consecutive rows share a rhythm. The last cell of
            the last row is the CTA rather than a service, which is what lets the
            grid finish square instead of leaving a hole or trailing a link
            underneath it.

            SPANS is indexed by position, so reordering `offerings.services`
            reshuffles the layout with it. Six entries is the assumption; a
            seventh would fall back to the 2-column span and still tile. */}
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-6">
          {offerings.services.map((service, index) => (
            <motion.article
              key={service.name}
              // No index step: six cells over three rows is tall enough that a
              // step would stall the lower ones. Each gets its own trigger.
              variants={riseIn()}
              {...centerTrigger}
              className={`flex flex-col rounded-2xl border border-neutral-200 bg-surface p-6 md:p-8 ${
                SPANS[index] ?? "lg:col-span-2"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Hidden from the accessibility tree: otherwise a screen
                    reader announces "zero one" before six consecutive
                    headings. */}
                <span
                  className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-red-600" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                {service.name}
              </h3>
              {/* text-sm, the card-body size used site-wide. These descriptions
                  ran at text-lg md:text-xl while they were full-width editorial
                  rows, which inside a bento cell would outweigh its own
                  heading. */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </motion.article>
          ))}

          {/* The closing cell. Red radial glow rather than a plain card, so the
              one actionable cell in the grid is the one that looks different,
              and it reuses the glow already on the about and careers cards
              instead of introducing another treatment. */}
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            // md:col-span-2 so the CTA fills the final row at the two-column
            // tier instead of sitting half-width beside a gap.
            className="flex flex-col justify-between rounded-2xl border border-red-100 bg-radial-[at_100%_0%] from-red-100 via-red-50 to-surface to-60% p-6 md:col-span-2 md:p-8 lg:col-span-3"
          >
            <p className="max-w-sm text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
              {offerings.cta.label}
            </p>
            <Link
              to={offerings.cta.href}
              // sm:w-fit, not sm:w-auto. This cell is a flex column, so its
              // children stretch across the cross axis by default and `w-auto`
              // does nothing to stop it: the button filled the full 623px cell
              // from sm upwards. An explicit fit-content width is what holds it
              // to its label.
              className="group mt-8 inline-flex w-full items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:w-fit"
            >
              See all services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
