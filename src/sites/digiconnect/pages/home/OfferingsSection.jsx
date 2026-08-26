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
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {offerings.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {offerings.services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <motion.article
                key={service.id}
                variants={riseIn()}
                {...centerTrigger}
                className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-surface p-6 md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-7 -right-3 z-0 text-[120px] font-extrabold leading-none tracking-[-0.04em] text-red-600/[0.07] select-none md:-bottom-9 md:-right-4 md:text-[150px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 z-[1] h-14 w-14 rounded-[0_16px_0_56px] bg-red-600 md:h-16 md:w-16 md:rounded-[0_16px_0_64px]"
                >
                  <Icon
                    className="absolute right-[13px] top-[13px] h-[18px] w-[18px] text-white md:right-[15px] md:top-[15px] md:h-5 md:w-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <div className="relative z-[2]">
                  <h3 className="mt-8 text-lg font-extrabold tracking-[-0.01em] leading-[1.2] text-neutral-800 md:mt-10 md:text-[22px]">
                    {service.name}
                  </h3>
                  <div className="my-3.5 h-[3px] w-8 rounded bg-red-600" />
                  <p className="text-sm leading-[1.65] text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

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
