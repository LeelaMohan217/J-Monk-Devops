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
import { fadeIn } from "../../../../shared/variants";
import { centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { offerings } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";

const icons = {
  "custom-software": Code2,
  "saas-product": Layers,
  "cloud-infrastructure": Cloud,
  "devops-automation": Workflow,
  "api-integration": Plug2,
  "technical-consulting": Compass,
};

const CASCADE_STEP = 0.1;

const OfferingsSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="offerings"
      className="bg-surface py-20 md:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeIn("up", 0 * CASCADE_STEP)}
            className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {offerings.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 1 * CASCADE_STEP)}
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 2 * CASCADE_STEP)}
            className="mt-4 text-base leading-relaxed text-neutral-600"
          >
            {offerings.lead}
          </motion.p>
        </motion.div>

        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {offerings.services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <motion.article
                key={service.id}
                variants={fadeIn("up", index * CASCADE_STEP)}
                {...(isDesktop ? {} : centerTrigger)}
                className="group flex flex-col rounded-sm border border-neutral-200 bg-surface p-8 md:p-10"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 transition-colors duration-500 group-hover:bg-neutral-900">
                    <Icon
                      className="h-5 w-5 text-red-600 transition-colors duration-500 group-hover:text-white"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-2 min-h-[3.25rem] text-base font-medium tracking-tight text-neutral-800 md:min-h-[3.5rem] md:text-lg">
                    {service.name}
                  </h3>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          {...centerTrigger}
          className="mt-10 flex justify-center md:mt-14"
        >
          <Link
            to={offerings.cta.href}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <GlazeSweep className="bg-white/30" />
            {offerings.cta.label}
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
