import { motion } from "framer-motion";
import { Laptop, BadgeIndianRupee, Shapes } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { programs } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Same icons DigiConnect's old constants/index.jsx studentData array used
// for these three tracks, kept for continuity even though the copy is new.
const icons = {
  internship: Laptop,
  freelancing: BadgeIndianRupee,
  training: Shapes,
};

const ProgramsSection = () => {
  return (
    <section
      id="programs"
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
              {programs.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              {programs.headingLead}
              <span className={ACCENT_CLASS}>{programs.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {programs.lead}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {programs.items.map((item, index) => {
            const Icon = icons[item.id];

            return (
              <motion.div
                key={item.id}
                variants={riseIn(Math.min(index, 3) * STEP)}
                {...centerTrigger}
                className="rounded-2xl border border-neutral-200 bg-surface p-6"
              >
                <Icon className="h-6 w-6 text-red-600" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
