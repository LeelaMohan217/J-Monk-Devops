import { motion } from "framer-motion";
import { HERO_WORD_START, HERO_WORD_STEP } from "../motionConfig";


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

const MASK = "mr-[0.25em] -mb-[0.14em] inline-block overflow-hidden align-bottom pb-[0.14em] last:mr-0";

const ACCENT_MASK = "-ml-[0.08em] pl-[0.08em] pr-[0.08em]";

const WordReveal = ({
  lines,
  accentClass = "",
  start = HERO_WORD_START,
  step = HERO_WORD_STEP,
}) => {
  let wordIndex = -1;

  const renderWord = (word) => {
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
  };

  return (
    <>
      <span className="sr-only">
        {lines.map((line) => line.map((word) => word.text).join(" ")).join(" ")}
      </span>

      <span aria-hidden="true">
        {lines.map((line, lineIndex) => {
          const groups = [];
          line.forEach((word) => {
            const currentGroup = groups[groups.length - 1];
            if (currentGroup && currentGroup.accent === !!word.accent) {
              currentGroup.words.push(word);
            } else {
              groups.push({ accent: !!word.accent, words: [word] });
            }
          });

          return (
            <span key={lineIndex} className="block">
              {groups.map((group, groupIndex) =>
                group.accent ? (
                  <span key={groupIndex} className="whitespace-nowrap">
                    {group.words.map(renderWord)}
                  </span>
                ) : (
                  group.words.map(renderWord)
                ),
              )}
            </span>
          );
        })}
      </span>
    </>
  );
};

export default WordReveal;
