import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { whatWeDo } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="bg-surface-muted py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {whatWeDo.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {whatWeDo.headingLead}
              <span className={ACCENT_CLASS}>{whatWeDo.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {whatWeDo.lead}
          </p>
        </motion.div>

        {/* Bento rather than three equal tiles. The first card takes two
            columns and both rows, the other two stack beside it, so the row has
            a subject instead of three things competing at the same weight.
            Below lg it collapses to a single column and the spans stop applying.

            auto-rows-fr is what makes it a bento and not a collage: it forces
            the two rows to equal height, so the tall cell is exactly the height
            of the two short ones plus the gap, and every edge lines up. Without
            it the rows size to content and the right column drifts off the
            bottom of the left one. */}
        {/* Three tiers, not two. At md the featured cell goes full width with
            the other two side by side underneath; the asymmetric bento only
            starts at lg. Without the md tier a 768px tablet dropped straight to
            one column and stacked all three at full width. */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr">
          {whatWeDo.cards.map((card, index) => {
            const featured = index === 0;

            return (
              <motion.div
                key={card.id}
                variants={riseIn(Math.min(index, 3) * STEP)}
                {...centerTrigger}
                className={`flex flex-col rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm ${
                  featured ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* The artwork is white-on-white, so the inset ring supplies the
                    edge it lacks and this band is near-white rather than white.

                    The featured cell's media flexes to fill whatever height the
                    grid hands it, rather than holding a fixed ratio: min-h-0 is
                    required for that, since a flex child will not shrink below
                    its content without it. The two small cells keep a ratio,
                    because they have a known height to fill. */}
                <div
                  className={`w-full overflow-hidden rounded-xl bg-surface ring-1 ring-inset ring-black/10 ${
                    featured
                      ? "aspect-[3/2] lg:aspect-auto lg:min-h-0 lg:flex-1"
                      : "aspect-[3/2]"
                  }`}
                >
                  <img
                    src={card.image}
                    alt=""
                    width="3000"
                    height="2000"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* The featured cell steps its heading up one and keeps the body
                    at the shared size. Scaling both would make it read as a
                    zoomed copy of a small card rather than a different tier. */}
                <div
                  className={`px-3 pt-4 pb-3 ${featured ? "md:px-4 md:pt-5 md:pb-4" : ""}`}
                >
                  <h3
                    className={`font-medium tracking-tight text-neutral-900 ${
                      featured
                        ? "text-lg md:text-xl"
                        : "text-base md:text-lg"
                    }`}
                  >
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
