import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";
import heroCollageJpg from "../../assets/educonnect-hero1.jpg";
import heroCollageWebp from "../../assets/educonnect-hero1.webp";

// Centered header over a 2 / image / 2 layout: the four services that carry
// the core "shortlist to offer" pipeline (counselling, selection,
// application, visa) flank a reused hero photo, rather than a flat 6-card
// grid. IELTS/PTE guidance and pre-departure support are the two dropped —
// both real services, just the more supplementary two, still listed in full
// on /educonnect/services via the CTA below.

// Dark gradient tile, no photo — heading pinned to the bottom by default,
// description hidden. On hover the content flips to justify-between: heading
// jumps to the top, description fades in at the bottom, gap between them is
// intentional rather than tightly packed.
const ServiceCard = ({ service, index }) => (
  <motion.li
    variants={riseIn(index * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="group relative h-40 w-full overflow-hidden rounded-lg border border-neutral-200 bg-surface"
  >
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 group-hover:justify-between">
      <h3 className="text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
        {service.name}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
        {service.description}
      </p>
    </div>
  </motion.li>
);

const ServicesSection = () => {
  const [first, second, third, fourth] = services.items;

  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 md:py-32">
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

        <ul className="mt-14 grid gap-4 lg:grid-cols-4 lg:grid-rows-2 md:mt-20">
          <div className="lg:col-start-1 lg:row-start-1">
            <ServiceCard service={first} index={0} />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <ServiceCard service={second} index={1} />
          </div>

          <motion.div
            variants={riseIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center lg:col-start-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="h-[220px] w-[85%] overflow-hidden rounded-2xl border border-neutral-200 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)]">
              <picture>
                <source type="image/webp" srcSet={heroCollageWebp} />
                <img
                  src={heroCollageJpg}
                  alt="Student holding university admission documents at the airport"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>

          <div className="lg:col-start-4 lg:row-start-1">
            <ServiceCard service={third} index={2} />
          </div>
          <div className="lg:col-start-4 lg:row-start-2">
            <ServiceCard service={fourth} index={3} />
          </div>
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
