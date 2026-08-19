import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";
import counsellingImg from "../../assets/blog/how-much-gap.jpg";
import selectionImg from "../../assets/blog/can-i-travel.jpg";
import applicationImg from "../../assets/blog/day1-cpt.jpg";
import visaImg from "../../assets/blog/day1-cpt-universities.jpg";

// Centered header over a simple row of 4 equal cards — photo on top, heading
// and description in plain space below, no hover mechanic. Replaces the
// earlier 2/image/2 hover-reveal layout entirely. Same four core services as
// before (counselling, selection, application, visa) — the two more
// supplementary ones (IELTS/PTE guidance, pre-departure support) stay listed
// in full on /educonnect/services via the CTA below.
const IMAGES = [counsellingImg, selectionImg, applicationImg, visaImg];

const ServiceCard = ({ service, image, index }) => (
  <motion.li
    variants={riseIn(index * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-surface"
  >
    <div className="aspect-square overflow-hidden border-b border-neutral-200">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="p-5">
      <h3 className="text-base font-medium tracking-tight text-neutral-900">
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

  return (
    <section id="services" className="scroll-mt-24 bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {services.eyebrow}
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            {services.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {services.headingAccent}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            {services.lead}
          </p>
        </motion.div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {cards.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              image={IMAGES[index]}
              index={index}
            />
          ))}
        </ul>

        <motion.div
          variants={riseIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
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
