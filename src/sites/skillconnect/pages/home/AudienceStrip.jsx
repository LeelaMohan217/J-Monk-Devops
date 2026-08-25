import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { audience } from "./data";

// A sunken closing strip of centred pills. DigiConnect had the same shape in a
// StackStrip section listing its technologies; that has since been removed, so
// this is the only place the treatment survives. One wrapper reveal rather than
// six staggered pills: this is an index of who qualifies, and per-item motion
// would read as noise.
const AudienceStrip = () => {
  return (
    <section className="bg-surface-sunken py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {audience.eyebrow}
          </span>
          <ul className="flex flex-wrap justify-center gap-3">
            {audience.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-neutral-200 bg-surface px-4 py-2 text-sm text-neutral-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceStrip;
