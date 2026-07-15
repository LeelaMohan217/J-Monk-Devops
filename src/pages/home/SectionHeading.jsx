import { motion } from "framer-motion";
import { fadeIn } from "../../shared/variants";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) => {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-col ${alignClass} gap-4 max-w-2xl ${
        align === "left" ? "" : "mx-auto"
      }`}
    >
      {eyebrow && (
        <span
          className={`uppercase tracking-[0.25em] text-xs md:text-sm font-semibold ${
            light ? "text-red-400" : "text-red-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg ${
            light ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
