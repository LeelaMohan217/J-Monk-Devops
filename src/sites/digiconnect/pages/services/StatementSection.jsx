import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { statement } from "./data";
import statementImage01 from "../../assets/digiconnect-services-01.avif";
import statementImage02 from "../../assets/digiconnect-services-02.avif";

const statementImages = [
  { src: statementImage01, width: 1088, height: 1004 },
  { src: statementImage02, width: 1000, height: 1080 },
];

const StatementSection = () => {
  return (
    <section className="bg-white pt-10 pb-0 md:pt-14">
      <motion.div
        variants={groupContainer}
        {...centerTrigger}
        className="mx-auto max-w-7xl px-6 md:px-8"
      >
        <motion.span
          variants={fadeIn("up", 0)}
          className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
        >
          {statement.eyebrow}
        </motion.span>

        <motion.p
          variants={fadeIn("up", STEP)}
          className="mt-6 max-w-5xl text-2xl leading-[1.3] font-regular tracking-tight text-neutral-800 sm:text-3xl md:text-4xl"
        >
          {statement.body}
        </motion.p>
      </motion.div>

      <motion.div
        variants={groupContainer}
        {...centerTrigger}
        className="mt-12 grid w-full grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 md:mt-16"
      >
        {statementImages.map((image, index) => (
          <motion.div
            key={image.src}
            variants={fadeIn("up", index * STEP)}
            className="overflow-hidden"
          >
            <img
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover object-center"
            />
          </motion.div>
        ))}

        <motion.div
          variants={fadeIn("up", statementImages.length * STEP)}
          className="flex aspect-square flex-col justify-between bg-neutral-900 p-6 md:p-8"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-red-500">
            <Lightbulb className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>

          <p className="text-sm leading-relaxed text-white/80 md:text-base">
            {statement.card.text}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatementSection;
