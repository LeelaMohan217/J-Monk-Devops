import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { audience } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import centerImage from "../../assets/skillconnect-process.webp";

const CASCADE_STEP = 0.1;

const AudienceSection = () => {
  const leftItems = audience.items.slice(0, 3);
  const rightItems = audience.items.slice(3, 6);

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeIn("up", 0 * CASCADE_STEP)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {audience.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 1 * CASCADE_STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {audience.headingLead}
            <span className={ACCENT_CLASS}>{audience.headingAccent}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto mt-16 hidden max-w-7xl grid-cols-3 items-stretch gap-3 md:grid lg:gap-5"
        >
          <div className="grid h-full grid-rows-3 gap-2 lg:gap-3">
            {leftItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn("up", index * CASCADE_STEP)}
                className="flex flex-col items-start justify-between rounded-2xl bg-stone-200 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-neutral-900 lg:text-lg">
                  {item.title}
                </span>
                <span className="mt-1.5 text-xs leading-relaxed text-neutral-500 lg:text-sm">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("up", 0)}
            className="h-[22rem] w-full overflow-hidden rounded-2xl lg:h-[26rem]"
          >
            <img
              src={centerImage}
              alt=""
              aria-hidden="true"
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid h-full grid-rows-3 gap-2 lg:gap-3">
            {rightItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn("up", (index + 3) * CASCADE_STEP)}
                className="flex flex-col items-start justify-between rounded-2xl bg-stone-200 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-neutral-900 lg:text-lg">
                  {item.title}
                </span>
                <span className="mt-1.5 text-xs leading-relaxed text-neutral-500 lg:text-sm">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.ul
          variants={groupContainer}
          {...centerTrigger}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden"
        >
          {audience.items.map((item, index) => (
            <motion.li
              key={item.title}
              variants={fadeIn("up", index * CASCADE_STEP)}
              className="rounded-2xl bg-stone-200 px-5 py-4"
            >
              <span className="text-base font-semibold text-neutral-900">
                {item.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-neutral-500">
                {item.description}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default AudienceSection;
