import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { story } from "./data";

// Centred header over a centred prose column, the same shape the home page's
// services and testimonials sections use, replacing the sidehead layout that put
// the heading in a left column beside the text.
//
// The prose itself stays left aligned inside its centred column. Centring the
// heading is a framing device; centring three lines of body copy costs the
// reader a ragged left edge to find on every line.
//
// The quote is separated by rules above and below rather than a rule down one
// side, which is what a centred column calls for: a left rule on centred content
// hangs off nothing.
//
// Two trigger groups, not one. The header and the prose are far enough apart
// that a single trigger would fire the body while it was still below the fold,
// and it would be static by the time the reader reached it.
const StorySection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
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
            {story.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            {story.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {story.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto mt-12 max-w-3xl md:mt-16"
        >
          <motion.p
            variants={riseIn(0)}
            className="text-base leading-relaxed text-neutral-800 md:text-lg"
          >
            {story.paragraphs[0]}
          </motion.p>

          <motion.figure
            variants={riseIn(STEP)}
            className="my-10 border-y border-neutral-200 py-8 text-center md:my-12"
          >
            <blockquote className="font-['Playfair_Display',serif] text-xl italic leading-snug text-neutral-900 md:text-2xl">
              {story.pullQuote}
            </blockquote>
          </motion.figure>

          {story.paragraphs.slice(1).map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={riseIn(STEP * 2)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
