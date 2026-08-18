import { motion } from "framer-motion";
import { riseIn } from "../../shared/variants";
import { ecosystem } from "./data";

// Text indents step right down the thread — declared, not computed,
// so Tailwind can see the class names.
const indents = ["", "lg:ml-14", "lg:ml-28"];

const WhyOneEcosystem = () => {
  return (
    <section id="ecosystem" className="bg-white py-20 md:py-32 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-900 md:text-6xl">
            {ecosystem.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
            {ecosystem.lead}
          </p>
        </motion.div>

        <div className="relative mt-16 pl-8 md:mt-24 md:pl-14">
          <span
            className="absolute left-0 top-3 bottom-24 w-px bg-neutral-200 md:bottom-28"
            aria-hidden="true"
          />

          {ecosystem.links.map((link, index) => (
            <motion.div
              key={link.statement}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative pb-14 md:pb-20"
            >
              <span
                className="absolute -left-8 top-3 h-px w-5 bg-amber-500 md:-left-14 md:w-10"
                aria-hidden="true"
              />

              <div className={indents[index]}>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  {link.from}
                  <span className="mx-2 text-neutral-300">/</span>
                  {link.to}
                </p>

                <p className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight leading-snug text-neutral-900 md:text-3xl">
                  {link.statement}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                  {link.detail}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.p
            variants={riseIn(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg lg:ml-28"
          >
            {ecosystem.closing}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyOneEcosystem;
