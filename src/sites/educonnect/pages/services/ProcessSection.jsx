import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { process } from "./data";

// Cards, matching the services grid above, replacing the hairline cells that
// hung off their own border-t. With that section now made of objects, leaving
// this one as bare rules made the page look like it changed design system
// halfway down.
//
// Still an <ol>: these are three stages in order, not a flat set. The numeral
// badge takes the slot the service cards give their icon, so the two grids share
// an anchor position, and it stays aria-hidden because the list element already
// conveys the sequence to a screen reader.
//
// Cards are bg-surface on this section's surface-muted ground, so they read as
// raised objects rather than as panels the same colour as the page.
const ProcessSection = () => {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            {process.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {process.headingAccent}
            </span>
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-surface p-6 md:p-7"
            >
              {/* IBM Plex Mono, the face EduConnect already uses for numerals
                  in the hero stats. tabular-nums so 01/02/03 sit on identical
                  widths across the three cards. */}
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-surface-muted font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-base font-medium tracking-tight text-neutral-900 md:text-lg">
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
