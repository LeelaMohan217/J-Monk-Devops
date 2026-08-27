import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { process } from "./data";
import processImg from "../../assets/services/educonnect-how-we-work.avif";

const ProcessSection = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeIn("up", 0)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {process.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {process.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {process.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          {...centerTrigger}
          className="relative mt-12 overflow-hidden rounded-2xl md:mt-16"
        >
          <img
            src={processImg}
            alt=""
            width="2400"
            height="1484"
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-center"
          />

          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-900/85 via-neutral-900/45 to-transparent"
            aria-hidden="true"
          />

          <p className="absolute inset-x-0 bottom-0 max-w-3xl p-6 text-lg leading-snug tracking-tight text-white sm:text-xl md:p-10 md:text-2xl">
            {process.imageOverlay}
          </p>
        </motion.div>

        <ol className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeIn("up", index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col border-t border-neutral-200 pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pt-0 md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <span
                className="font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
