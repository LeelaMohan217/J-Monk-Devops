import { motion } from "framer-motion";
import {
  Compass,
  FileText,
  Handshake,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { offerings } from "./data";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../../headingStyles";

// Looked up by id, the same way the services page's ProgramsSection does it, so
// ./data.js can stay pure data rather than instantiating lucide components at
// module scope.
const icons = {
  projects: Rocket,
  stack: TrendingUp,
  routes: Handshake,
  portfolio: FileText,
  mentorship: Compass,
  team: Users,
};

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="bg-surface-muted py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {offerings.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              {offerings.headingLead}
              <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {offerings.lead}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {offerings.items.map((item, index) => {
            const Icon = icons[item.id];

            return (
              <motion.div
                key={item.id}
                // Delay is clamped the way the sibling grids clamp theirs, so
                // the sixth card does not sit visibly idle after entering view.
                variants={riseIn(Math.min(index, 3) * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl border border-neutral-200 bg-surface p-6"
              >
                <Icon
                  className="h-6 w-6 text-red-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className={`mt-5 text-lg ${HEADING_FULL_CLASS}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
