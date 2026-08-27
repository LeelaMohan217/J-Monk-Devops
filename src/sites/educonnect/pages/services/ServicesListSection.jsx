import { motion } from "framer-motion";
import {
  FileCheck,
  GraduationCap,
  Languages,
  Luggage,
  Stamp,
  UserSearch,
} from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import { services, statement } from "./data";

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
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div variants={groupContainer} {...centerTrigger}>
          <motion.span
            variants={fadeIn("up", 0)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {statement.eyebrow}
          </motion.span>

          <motion.p
            variants={fadeIn("up", STEP)}
            className="mt-6 max-w-5xl text-2xl leading-[1.3] tracking-tight text-neutral-800 sm:text-3xl md:text-4xl"
          >
            {statement.body}
          </motion.p>
        </motion.div>

        <ul className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.id];

            return (
              <motion.li
                key={service.id}
                variants={fadeIn("up", index * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group flex min-h-[340px] flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-6 transition-colors duration-500 hover:bg-stone-50 md:p-8"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-start text-red-600 transition-colors duration-500 group-hover:text-black">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <h2 className="text-lg font-medium tracking-tight text-neutral-800 md:text-xl">
                    {service.name}
                  </h2>
                </div>

                <p className="mt-10 text-sm leading-relaxed text-neutral-600">
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
