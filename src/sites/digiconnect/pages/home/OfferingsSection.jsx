import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="bg-surface py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {offerings.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
        </motion.div>

        {/* Six equal cards, three to a row. This was a bento of mixed column
            spans over a six-track grid; the varied widths made the six services
            read as ranked when they are peers, and the layout depended on there
            being exactly six of them. A plain grid takes any number.

            Two columns at md, three from lg, the same ramp SkillConnect's
            offerings grid uses for its own six. */}
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {offerings.services.map((service, index) => (
            <motion.article
              key={service.name}
              // No index step: six cells over three rows is tall enough that a
              // step would stall the lower ones. Each gets its own trigger.
              variants={riseIn()}
              {...centerTrigger}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-surface p-6 md:p-8"
            >
              {/* Hidden from the accessibility tree: otherwise a screen
                  reader announces "zero one" before six consecutive
                  headings. */}
              <span
                className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                {service.name}
              </h3>
              {/* text-sm, the card-body size used site-wide. These descriptions
                  ran at text-lg md:text-xl while they were full-width editorial
                  rows, which inside a bento cell would outweigh its own
                  heading. */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Plain closing CTA, not its own grid cell: a card here read as a
            seventh service rather than a link out of the section. */}
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="mt-10 flex justify-center md:mt-14"
        >
          <Link
            to={offerings.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            See all services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;
