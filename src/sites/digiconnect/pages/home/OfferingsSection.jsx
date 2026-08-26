import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers,
  Cloud,
  Workflow,
  Plug2,
  Compass,
} from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const icons = {
  "custom-software": Code2,
  "saas-product": Layers,
  "cloud-infrastructure": Cloud,
  "devops-automation": Workflow,
  "api-integration": Plug2,
  "technical-consulting": Compass,
};

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
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {offerings.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {offerings.lead}
          </p>
        </motion.div>

        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="mt-8 flex justify-center md:mt-10"
        >
          <Link
            to={offerings.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {offerings.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {offerings.services.map((service) => {
            const Icon = icons[service.id];
            return (
              <motion.article
                key={service.id}
                variants={riseIn()}
                {...centerTrigger}
                className="flex flex-col justify-between rounded-sm border border-neutral-200 bg-surface p-8 md:p-10"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                    <Icon className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-base font-medium tracking-tight text-neutral-800 md:text-lg">
                    {service.name}
                  </h3>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
