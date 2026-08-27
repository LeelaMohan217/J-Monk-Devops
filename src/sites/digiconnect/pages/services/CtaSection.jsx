import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { servicesCta } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import ctaImage from "../../assets/digiconnect-services-cta.webp";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid items-stretch overflow-hidden rounded-3xl bg-stone-50 lg:grid-cols-2"
        >
          <div className="flex flex-col p-8 md:p-12">
            <motion.h2
              variants={fadeIn("up", 0)}
              className="max-w-md text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl"
            >
              {servicesCta.headingLead}
              <span className={ACCENT_CLASS}>{servicesCta.headingAccent}</span>
            </motion.h2>

            <motion.div variants={fadeIn("up", STEP)} className="mt-8">
              <Link
                to={servicesCta.cta.href}
                className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <GlazeSweep className="bg-white/30" />
                {servicesCta.cta.label}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <ul className="mt-10 flex flex-col gap-4 lg:mt-auto lg:pt-10">
              {servicesCta.checks.map((check, index) => (
                <motion.li
                  key={check}
                  variants={fadeIn("up", (2 + index) * STEP)}
                  className="flex items-center gap-3 text-sm text-neutral-700 md:text-base"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-red-600"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  {check}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div variants={fadeIn("up", 0)} className="lg:h-full">
            <img
              src={ctaImage}
              alt=""
              width="2000"
              height="2000"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center lg:aspect-auto lg:h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
