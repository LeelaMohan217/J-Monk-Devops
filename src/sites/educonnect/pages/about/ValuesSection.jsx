import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { values } from "./data";

// Cards on a red radial glow, the same treatment the services page's how-it-
// works cards carry, replacing the top-to-bottom linear fade these had.
//
// The origin alternates: odd cards glow from the top-left corner, even ones from
// the top-right. Across a four-up row that reads as the light coming from
// alternating sides rather than every card being lit identically, which is what
// a single origin looked like once there were four of them side by side.
//
// Stops match the services page exactly, so the two sections are the same
// treatment and not merely similar ones: red-100 at the corner, red-50 through
// the middle, and the card's own white ground by 60%, which keeps the tint a
// corner glow instead of washing the whole card.
//
// Border is red-100 rather than neutral-200. Against a red gradient a grey
// hairline reads as a slightly dirty edge.
const GLOW_FROM_TOP_LEFT =
  "bg-radial-[at_0%_0%] from-red-100 via-red-50 to-surface to-60%";
const GLOW_FROM_TOP_RIGHT =
  "bg-radial-[at_100%_0%] from-red-100 via-red-50 to-surface to-60%";
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
              className={`flex flex-col rounded-2xl border border-red-100 p-6 md:p-7 ${
                index % 2 === 0 ? GLOW_FROM_TOP_LEFT : GLOW_FROM_TOP_RIGHT
              }`}
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
