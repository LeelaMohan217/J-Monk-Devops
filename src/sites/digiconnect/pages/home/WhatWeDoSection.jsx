import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { whatWeDo } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Where each of the three text tiles lands once the grid splits at lg. Kept out
// here as a lookup rather than computed in the map, because these are three
// specific positions around a panel that owns column 1, not a formula: the first
// card spans the full width of the remaining two columns, and the other two share
// the row underneath it.
// Where each of the three text tiles lands once the grid splits at lg, and which
// corner it oversizes. Kept out here as a lookup rather than computed in the map,
// because these are three specific positions around a panel that owns column 1,
// not a formula: the first card spans the full width of the remaining two columns,
// and the other two share the row underneath it.
//
// The oversized corners are the design's signature. There are only two, and they
// sit at opposite ends of a diagonal across the right-hand block: the top-right of
// the wide tile, and the bottom-left of the tile below it. The third tile is left
// plain, which is what stops the motif reading as a border radius someone forgot
// to finish.
//
// 72px is not arbitrary. The reference runs a ~100px corner on a ~265px tile,
// about 0.38 of the height, and our rows are 190px, so 72 holds that same ratio.
// A literal 100px here would eat over half the tile. It is also lg-only: stacked,
// "top-right of the block" and "bottom-left" describe nothing, and the tiles are
// shorter still, so below lg every corner stays at the site's rounded-2xl.
const PLACEMENT = [
  "lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:rounded-tr-[72px]",
  "lg:col-start-2 lg:row-start-2 lg:rounded-bl-[72px]",
  "lg:col-start-3 lg:row-start-2",
];

const WhatWeDoSection = () => {
  const isDesktop = useIsDesktop();

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
            {/* One line per block rather than a wrapping sentence, so the break
                points are the ones the design asks for at every width instead of
                whatever the rail happens to give. The h2 keeps the section scale
                and its explicit leading-[1.1]; the blocks inherit it, so no
                per-line leading is set. */}
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {whatWeDo.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className={`block ${ACCENT_CLASS}`}>
                {whatWeDo.headingAccent}
              </span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {whatWeDo.lead}
          </p>
        </motion.div>

        {/* An image panel down the left with the three cards as text tiles to its
            right, one wide across the top and two beneath. This replaces the row
            of three equal cards that each carried their own artwork.

            Placement is explicit col-start/row-start rather than `order`, because
            the panel has to hold its own column across both rows and no source
            ordering produces that. grid-rows-[1fr_1fr] forces the two rows to
            equal height the way the design has them; left to `auto` the wide
            tile's shorter text would collapse row 1 and the two rows would
            disagree.

            The split happens at lg, not md. Three text tiles plus an image panel
            need the full width to avoid the tiles becoming narrow columns of
            wrapped text, so the tablet keeps the stack. */}
        <motion.div
          // Desktop hangs one trigger here and lets the four tiles inherit it, so
          // their index delays read as a ripple across a grid that fits on screen
          // whole. Stacked, the children take their own triggers instead and this
          // one stops mattering, which is why groupContainer's states are empty:
          // the parent contributes no movement of its own either way.
          variants={groupContainer}
          {...centerTrigger}
          // minmax(190px,1fr) rather than a bare 1fr on each row. The tiles hold
          // two lines of text, which on its own gives rows of about 148px, and a
          // 72px corner on a tile that short reads as a bite taken out of it
          // rather than as a curve. 190px is the floor at which the corner turns
          // and still leaves a straight edge above and below it, and it brings the
          // image panel nearer the tall proportion the design wants. 1fr is kept
          // as the max so a longer description still grows both rows together.
          className="mt-12 grid gap-4 md:mt-16 md:gap-6 lg:grid-cols-3 lg:grid-rows-[minmax(190px,1fr)_minmax(190px,1fr)]"
        >
          {/* The one image, and the only element here that is not text. Contained
              rather than cover: the artwork is a flat illustration on white at
              800x533, and this panel is the tall one, so cover would crop about
              45% of the width and cut the figures off at both edges. Contained it
              also never renders above its native width, which cover would have
              done on this panel at any realistic viewport.

              White panel so the white-background artwork has no visible seam,
              with the border supplying the edge the artwork itself lacks. Padding
              keeps the illustration off that border. */}
          <motion.div
            variants={riseIn(0)}
            {...(isDesktop ? {} : centerTrigger)}
            className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-surface p-6 md:p-8 lg:col-start-1 lg:row-span-2"
          >
            <img
              src={whatWeDo.image}
              alt=""
              width="800"
              height="533"
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {whatWeDo.cards.map((card, index) => (
            <motion.div
              key={card.id}
              // Desktop runs the shared trigger on the grid above, with an index
              // step, so the four tiles ripple. Stacked, each tile arrives on its
              // own, where an index delay would only add dead time before the
              // lower ones move, so they take their own trigger at zero delay.
              // Same reasoning as DashboardGridSection's split, and the same
              // useIsDesktop that answers it.
              variants={riseIn(isDesktop ? (index + 1) * STEP : 0)}
              {...(isDesktop ? {} : centerTrigger)}
              className={`flex flex-col rounded-2xl border border-neutral-200 bg-surface p-6 md:p-8 ${PLACEMENT[index]}`}
            >
              <h3 className="text-base font-medium tracking-tight text-neutral-900 md:text-lg">
                {card.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
