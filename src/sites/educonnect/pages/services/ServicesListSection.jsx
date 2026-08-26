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

            const tinted = index % 2 === 1;

            return (
              <motion.li
                key={service.id}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col rounded-2xl border p-6 md:p-7 ${
                  tinted
                    ? "border-red-100 bg-red-50"
                    : "border-neutral-200 bg-surface"
                }`}
              >
                <Icon
                  className="h-6 w-6 text-red-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h2 className="mt-5 text-base font-medium tracking-tight text-neutral-800 md:text-lg">
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
