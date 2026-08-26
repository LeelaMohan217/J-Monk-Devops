import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { howWeWork } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const HowWeWorkSection = () => {
  return (
    <section
      id="how-we-work"
      className="bg-surface-muted py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={riseIn()}
            {...centerTrigger}
            className="order-2 rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm lg:order-1"
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface ring-1 ring-inset ring-black/10">
              <img
                src={howWeWork.image}
                alt=""
                width="3000"
                height="2000"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={riseIn(STEP)}
            {...centerTrigger}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {howWeWork.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              {howWeWork.headingLead}
              <span className={ACCENT_CLASS}>{howWeWork.headingAccent}</span>
            </h2>

            {howWeWork.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </p>
            ))}

            <dl className="mt-8 grid gap-6 border-t border-neutral-200 pt-8">
              {howWeWork.principles.map((principle) => (
                <div key={principle.term}>
                  <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {principle.term}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {principle.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              to={howWeWork.cta.href}
              className="group mt-8 inline-flex w-fit items-center gap-2 py-1 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {howWeWork.cta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
