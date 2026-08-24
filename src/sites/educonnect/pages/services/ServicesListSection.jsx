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
    <section className="bg-surface pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.id];

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
                className="flex flex-col rounded-2xl border border-neutral-200 bg-surface p-6 md:p-7"
              >
                <Icon
                  className="h-6 w-6 text-red-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                {/* h2, as the old table had it. PageHeaderSection above owns
                    the page's h1 and there is no section heading between it and
                    these cards, so h3 here would skip a level. The visual size
                    is set by the classes, independently of the level. */}
                <h2 className="mt-5 text-base font-medium tracking-tight text-neutral-900 md:text-lg">
                  {service.name}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesListSection;
