import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Search, FileCheck2, BadgeCheck, GraduationCap, Plane } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";
import BentoCard from "../../components/BentoCard";

// Bento grid: a 2-wide card, a 1-wide card, three 1-wide cards, then a
// full-width dark card as a closer — same asymmetric rhythm reused by
// ServicesListSection on the dedicated services page, since it's the same
// six services. Card depth (icon badge, ghost watermark, texture/notch on
// the closer only) comes from the shared BentoCard component.
const SPANS = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-3"];
const ICONS = [UserCheck, Search, FileCheck2, BadgeCheck, GraduationCap, Plane];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {services.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {services.heading}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            {services.lead}
          </p>

          <Link
            to={services.cta.href}
            className="group mt-8 inline-flex w-fit items-center gap-2 py-1 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {services.cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const inverted = index === services.items.length - 1;

            return (
              <motion.div
                key={service.name}
                variants={riseIn(Math.min(index, 3) * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className={`sm:col-span-1 ${SPANS[index]}`}
              >
                <BentoCard
                  as="div"
                  icon={ICONS[index]}
                  index={index}
                  title={service.name}
                  description={service.description}
                  inverted={inverted}
                  notched={inverted}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
