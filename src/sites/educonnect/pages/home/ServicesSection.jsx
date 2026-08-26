import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { services } from "./data";
import counsellingWebp from "../../assets/services/career-counselling.webp";
import counsellingJpg from "../../assets/services/career-counselling.jpg";
import selectionWebp from "../../assets/services/course-selection.webp";
import selectionJpg from "../../assets/services/course-selection.jpg";
import applicationWebp from "../../assets/services/admission-support.webp";
import applicationJpg from "../../assets/services/admission-support.jpg";
import visaWebp from "../../assets/services/visa-assistance.webp";
import visaJpg from "../../assets/services/visa-assistance.jpg";

const IMAGES = [
  { webp: counsellingWebp, jpg: counsellingJpg },
  { webp: selectionWebp, jpg: selectionJpg },
  { webp: applicationWebp, jpg: applicationJpg },
  { webp: visaWebp, jpg: visaJpg },
];

const ServiceCard = ({ service, image, index, isDesktop }) => (
  <motion.li
    variants={riseIn(isDesktop ? index * STEP : 0)}
    {...(isDesktop ? {} : centerTrigger)}
    className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-surface"
  >
    <div className="aspect-square overflow-hidden border-b border-neutral-200">
      <picture>
        <source type="image/webp" srcSet={image.webp} />
        <img
          src={image.jpg}
          alt=""
          width="800"
          height="1067"
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
    <div className="p-5">
      <h3 className="text-base font-medium tracking-tight text-neutral-800 md:text-lg">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {service.description}
      </p>
    </div>
  </motion.li>
);

const ServicesSection = () => {
  const cards = services.items.slice(0, 4);
  const isDesktop = useIsDesktop();

  const ListTag = isDesktop ? motion.ul : "ul";
  const listProps = isDesktop
    ? { variants: groupContainer, ...centerTrigger }
    : {};

  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-neutral-200 bg-surface-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {services.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-800"
          >
            {services.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {services.headingAccent}
            </span>
          </motion.h2>

          <motion.p
            variants={riseIn(STEP * 2)}
            className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600"
          >
            {services.lead}
          </motion.p>
        </motion.div>

        <ListTag
          {...listProps}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4"
        >
          {cards.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              image={IMAGES[index]}
              index={index}
              isDesktop={isDesktop}
            />
          ))}
        </ListTag>

        <motion.div
          variants={riseIn(0)}
          {...centerTrigger}
          className="mt-14 flex justify-center md:mt-16"
        >
          <Link
            to={services.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {services.cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
