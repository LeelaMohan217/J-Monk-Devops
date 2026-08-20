import { motion } from "framer-motion";
import { HERO_WORD_START, HERO_WORD_STEP } from "../motionConfig";

// A heading whose words lift into place one after another from behind their own
// clipping mask. Extracted from the umbrella landing hero so the brand heroes
// animate their headings the same way instead of re-deriving the mask geometry,
// which is the fiddly part: every offset below is paired with an equal negative
// margin, so the mask can grow without moving any ink or changing any spacing.
//
// Put a `leading-*` on the h1 that wraps this, or let the display-* token supply
// one. The paddings here are in em, so they follow whatever that leading is.

// y is 130%, not 100%, because each word's mask carries bottom padding to clear
// the descenders (see MASK below). 100% would leave the word's top edge showing
// in that padding band before it animates in. 130% clears the tallest mask (the
// accent words, whose clip runs ~1.18x the line height) with margin to spare;
// the extra travel is not perceptible at this duration.
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

// Every word's mask needs padding, because overflow-hidden clips any ink outside
// the line box.
//
// Bottom (all words): descenders. Space below the baseline inside the box is
// lineHeight/2 minus half the font's content height, so at a leading near 1.05
// neither face has room for its own descender: Inter's "y" needs 13/60em and has
// 9.5, Playfair's "f" needs 12/60em and has 6.5. 0.14em covers both with room to
// spare, and a looser leading only adds room.
//
// mr is the word spacing. The words are inline-block masks with no whitespace
// text nodes between them, so the margin is the only gap; 0.25em is about the
// width of a space in Inter at these weights.
const MASK = "mr-[0.25em] -mb-[0.14em] inline-block overflow-hidden align-bottom pb-[0.14em] last:mr-0";

// Left/right, accent words only: Playfair Display Italic paints outside its
// advance width. A leading "f" reaches ~0.05em left of the layout origin, and a
// closing glyph's slant reaches right.
const ACCENT_MASK = "-ml-[0.08em] pl-[0.08em] pr-[0.08em]";

// `lines` is an array of lines, each an array of `{ text, accent }` words. Pass
// more than one line only to force a break at a specific word: a single line
// wraps naturally, which is what a heading in a narrow column wants.
//
// `accentClass` is the brand's own accent treatment, from its headingStyles.js.
//
// The animated markup is aria-hidden with a plain-text copy beside it, because
// the masks put no whitespace between words: read directly, the heading would
// reach a screen reader as "Expertguidance,real globaloutcomes."
const WordReveal = ({
  lines,
  accentClass = "",
  start = HERO_WORD_START,
  step = HERO_WORD_STEP,
}) => {
  // Runs across lines rather than restarting per line, so the ripple carries
  // over the break. Counted as we render instead of from the line index, which
  // would only be right if every line held the same number of words.
  let wordIndex = -1;

  return (
    <>
      <span className="sr-only">
        {lines.map((line) => line.map((word) => word.text).join(" ")).join(" ")}
      </span>

      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((word) => {
              wordIndex += 1;
              return (
                <span
                  key={`${word.text}-${wordIndex}`}
                  className={`${MASK} ${word.accent ? ACCENT_MASK : ""}`}
                >
                  <motion.span
                    className={`inline-block ${word.accent ? accentClass : ""}`}
                    variants={wordReveal(start + wordIndex * step)}
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
      </span>
    </>
  );
};

export default WordReveal;
