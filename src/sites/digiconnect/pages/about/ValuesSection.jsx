import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { values } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

const ValuesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {values.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {values.headingLead}
            <span className={ACCENT_CLASS}>{values.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {values.items.map((item, index) => (
            <motion.div
              key={item.term}
              variants={riseIn(Math.min(index, 3) * STEP)}
              {...centerTrigger}
              // Radial glow with the origin alternating corner to corner, the
              // same treatment EduConnect's about values cards carry, down to
              // the identical stops. That page is the direct counterpart of this
              // one, so the two should read as one system.
              //
              // Border moves to red-100: a grey hairline against the tint reads
              // as a slightly dirty edge.
              className={`rounded-2xl border border-red-100 p-6 ${
                index % 2 === 0
                  ? "bg-radial-[at_0%_0%] from-red-100 via-red-50 to-surface to-60%"
                  : "bg-radial-[at_100%_0%] from-red-100 via-red-50 to-surface to-60%"
              }`}
            >
              <span className="h-px w-10 bg-red-600" aria-hidden="true" />
              <h3 className={`mt-5 text-lg ${HEADING_FULL_CLASS}`}>
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
