import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { values } from "./data";

// Cards on a red gradient, replacing the hairline grid of cells that hung off
// their own border-t. With the story section above now made of tinted cards,
// bare rules here made the page look like it changed system halfway down.
//
// The tint runs top to bottom, from red-50 into the section's own white ground,
// rather than sitting flat like the story cards. That keeps the two sections
// related without making them identical: same colour, different treatment.
//
// bg-linear-to-b is Tailwind v4's syntax for what used to be bg-gradient-to-b.
// The project uses both spellings; the landing hero is on the v4 one, so new
// code follows that.
//
// Border is red-100 rather than neutral-200. Against a red gradient a grey
// hairline reads as a slightly dirty edge.
const ValuesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Centred to match the story section above, so the two consecutive
            sections on this page frame their content the same way. Eyebrow and
            heading arrive in reading order on one trigger, as they do there. */}
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          {/* inline-block because riseIn animates y, and a transform does
              nothing to a plain inline element: this would only fade. */}
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {values.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            {values.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {values.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <dl className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              // Delay is clamped the way this page's other grids clamp theirs,
              // so the fourth card does not sit idle after entering view.
              variants={riseIn(Math.min(index, 3) * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col rounded-2xl border border-red-100 bg-linear-to-b from-red-50 to-surface p-6 md:p-7"
            >
              <dt className="text-base font-medium tracking-tight text-neutral-900 md:text-lg">
                {item.term}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ValuesSection;
