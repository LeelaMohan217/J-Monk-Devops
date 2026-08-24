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
        {/* Centred, revealing as one block on an `amount: 0.5` trigger.

            This briefly used centerTrigger with the eyebrow and heading staged
            as separate children, and the heading was reported missing on the
            live page. Measuring it afterwards, the geometry was fine: this
            group's top clears the 55% line that centerTrigger needs with room to
            spare, so the never-fires case motionConfig warns about was not what
            happened here.

            It is back on the simpler trigger anyway. `amount: 0.5` fires when
            half the element is on screen, which anything can satisfy from any
            position on any page length, where centerTrigger depends on where the
            group sits relative to the end of the document. For a heading, where
            the failure mode is text that is silently absent rather than an
            animation that looks slightly off, the trigger with no positional
            precondition is the one to use. */}
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {process.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
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
              // A third red treatment, deliberately not the two already in use:
              // the story and services cards are a flat red-50, the about
              // how-we-work cards a top-to-bottom fade. This is a radial glow
              // sitting behind the numbered badge in the top-left corner, so the
              // colour reads as light falling on the card rather than as a fill.
              //
              // to-60% pulls the stop in so the tint stays a corner glow instead
              // of washing the whole card. Border stays red-100, as on the other
              // tinted cards.
              className="flex flex-col rounded-2xl border border-red-100 bg-radial-[at_0%_0%] from-red-100 via-red-50 to-surface to-60% p-6 md:p-7"
            >
              {/* IBM Plex Mono, the face EduConnect already uses for numerals
                  in the hero stats. tabular-nums so 01/02/03 sit on identical
                  widths across the three cards. */}
              {/* White chip with a red hairline rather than the grey-on-grey it
                  was. The badge sits in the top-left corner, which is exactly
                  where the radial glow is strongest, and a neutral fill there
                  read as muddy against the tint. */}
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-100 bg-surface font-['IBM_Plex_Mono',monospace] text-sm font-semibold tabular-nums text-red-600"
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
