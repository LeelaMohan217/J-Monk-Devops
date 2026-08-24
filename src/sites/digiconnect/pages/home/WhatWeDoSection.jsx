import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { whatWeDo } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="bg-surface-muted py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {whatWeDo.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {whatWeDo.headingLead}
              <span className={ACCENT_CLASS}>{whatWeDo.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {whatWeDo.lead}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
          {whatWeDo.cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={riseIn(Math.min(index, 3) * STEP)}
              {...centerTrigger}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm"
            >
              {/* The artwork is white-on-white, so the inset ring supplies the
                  edge it lacks and this band is near-white rather than white. */}
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface ring-1 ring-inset ring-black/10">
                <img
                  src={card.image}
                  alt=""
                  width="3000"
                  height="2000"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-3 pt-4 pb-3">
                <h3 className={`text-lg ${HEADING_FULL_CLASS}`}>
                  {card.label}
                </h3>
                {/* text-sm, the size every other card body on the site uses.
                    This was the one at text-xs md:text-sm, a step smaller than
                    its counterparts on the about and careers pages. */}
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
