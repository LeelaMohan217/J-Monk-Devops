import { motion } from "framer-motion";
import {
  FileCheck,
  GraduationCap,
  Languages,
  Luggage,
  Stamp,
  UserSearch,
} from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";

// Cards, replacing the hairline spec table this used to be. That table put a
// numeral and a name in the left columns with the description in its own column
// on the right, which read as a reference list rather than as six things you can
// ask for: at a glance it was four hundred pixels of rules and small type with
// no object to land on.
//
// Icons rather than photographs, for two reasons. The home page already shows
// four of these six as photo cards, so repeating those images here would put the
// same artwork on the site twice; and there is no artwork at all for the other
// two, which would have left a grid of six cards with four photos and two holes.
//
// Looked up by id so ./data.js stays pure data.
const icons = {
  counselling: UserSearch,
  selection: GraduationCap,
  application: FileCheck,
  visa: Stamp,
  tests: Languages,
  departure: Luggage,
};

const ServicesListSection = () => {
  return (
    <section className="bg-surface pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.id];

            // Every second card takes the red-50 tint the about page uses, so
            // the 2nd, 4th and 6th are shaded. In the three-column layout that
            // lands as a checkerboard, since the offset shifts by one each row.
            //
            // Worth knowing at sm, where the grid is two columns: every second
            // card is then the right-hand one of its row, so the tint reads as a
            // stripe down that column rather than as an alternation.
            //
            // Tinted cards take a red-100 hairline. A grey border against the
            // tint reads as a slightly dirty edge, the same reason the about
            // page's gradient cards moved off neutral-200.
            const tinted = index % 2 === 1;

            return (
              <motion.li
                key={service.id}
                // Delay is clamped, the same way this page's other grids clamp
                // theirs, so the sixth card does not sit visibly idle after it
                // has already entered view.
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                // group + relative + overflow-hidden for the hover swipe below.
                // overflow-hidden is what keeps the sliding panel inside the
                // rounded corners instead of squaring them off.
                //
                // The border transitions to the other card's colour on hover, so
                // the edge follows the fill rather than staying behind.
                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-colors duration-500 ${
                  tinted
                    ? "border-red-100 bg-red-50 hover:border-neutral-200"
                    : "border-neutral-200 bg-surface hover:border-red-100"
                }`}
              >
                {/* The hover fill: a panel in the opposite card's colour,
                    parked one full width to the left and sliding to cover on
                    hover. Because it only ever moves between those two
                    positions it enters and leaves by the same edge, rather than
                    sweeping across and exiting the far side.

                    A plain untinted card reveals red on hover and a tinted one
                    reveals plain, so hovering any card shows you the state its
                    neighbour is in.

                    motion-reduce drops the travel to a straight swap, since a
                    panel flying across the card is exactly the kind of movement
                    that setting turns off. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 z-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 motion-reduce:transition-none ${
                    tinted ? "bg-surface" : "bg-red-50"
                  }`}
                />

                {/* z-10 so the copy paints above the sliding panel. Without it
                    the panel, being positioned, would cover the in-flow text. */}
                <div className="relative z-10 flex flex-col p-6 md:p-7">
                  <Icon
                    className="h-6 w-6 text-red-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  {/* h2, as the old table had it. PageHeaderSection above owns
                      the page's h1 and there is no section heading between it
                      and these cards, so h3 here would skip a level. The visual
                      size is set by the classes, independently of the level. */}
                  <h2 className="mt-5 text-base font-medium tracking-tight text-neutral-900 md:text-lg">
                    {service.name}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesListSection;
