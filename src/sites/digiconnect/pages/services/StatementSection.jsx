import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { statement } from "./data";
import statementImage01 from "../../assets/digiconnect-services-01.avif";
import statementImage02 from "../../assets/digiconnect-services-02.avif";
import statementImage03 from "../../assets/digiconnect-services-03.avif";

const statementImages = [
  { src: statementImage01, width: 740, height: 680 },
  { src: statementImage02, width: 1000, height: 1080 },
  { src: statementImage03, width: 1088, height: 1004 },
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
        className="mt-12 grid w-full grid-cols-1 sm:grid-cols-3 md:mt-16"
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
      </motion.div>
    </section>
  );
};

export default StatementSection;
