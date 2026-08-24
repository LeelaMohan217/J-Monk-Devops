import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { story } from "./data";

// Editorial sidehead: the label and heading hold the left column while the prose
// runs in its own, instead of a narrow centred well that ignored the site rail.
//
// Three things carry the section beyond plain paragraphs. A hairline rule across
// the top of the grid sets the block on a baseline rather than letting it start
// in open space. A short red rule above the eyebrow marks the column head, the
// same device SkillConnect's values cards use. And the standfirst runs a size up
// from the body, so the prose has a way in.
//
// The pull quote is the structural piece: two paragraphs of similar length read
// as one undifferentiated block, and lifting the sharpest line out gives the
// column a midpoint. It is set in Playfair italic, the face this brand already
// reserves for emphasis, on a red rule rather than in quotation marks. Glyph
// quotes at this size read as decoration.
//
// Four beats on one trigger, in reading order, so the sequence survives the
// reader stopping partway through: heading, standfirst, quote, tail.
const StorySection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid gap-10 border-t border-neutral-200 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-16"
        >
          <motion.div variants={riseIn(0)} className="lg:col-span-4">
            <span className="block h-px w-10 bg-red-600" aria-hidden="true" />

            <span className="mt-5 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {story.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {story.headingLead}
              <span className="font-['Playfair_Display',serif] text-red-600 italic">
                {story.headingAccent}
              </span>
            </h2>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            <motion.p
              variants={riseIn(STEP)}
              className="max-w-2xl text-base leading-relaxed text-neutral-800 md:text-lg"
            >
              {story.paragraphs[0]}
            </motion.p>

            <motion.figure
              variants={riseIn(STEP * 2)}
              className="my-9 border-l-2 border-red-600 pl-6 md:my-10"
            >
              <blockquote className="max-w-2xl font-['Playfair_Display',serif] text-xl italic leading-snug text-neutral-900 md:text-2xl">
                {story.pullQuote}
              </blockquote>
            </motion.figure>

            {story.paragraphs.slice(1).map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={riseIn(STEP * 3)}
                className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
