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

  if (align === "split") {
    return (
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex flex-col gap-1 text-left">
          {eyebrow && (
            <span className="text-sm font-semibold leading-none text-red-600">
              {eyebrow}
            </span>
          )}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight ${
              light ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={`max-w-md text-sm md:text-base leading-relaxed text-left ${
              light ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {description}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`flex flex-col ${alignClass} gap-2 max-w-2xl ${
        align === "left" ? "" : "mx-auto"
      }`}
    >
      <div className={`flex flex-col ${alignClass} gap-0`}>
        {eyebrow && (
          <span
            className="text-sm font-semibold leading-none text-red-600"
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight ${
            light ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-sm md:text-base leading-relaxed ${
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
