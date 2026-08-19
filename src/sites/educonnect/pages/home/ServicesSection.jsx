import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { services } from "./data";
import heroCollageJpg from "../../assets/educonnect-hero1.jpg";
import heroCollageWebp from "../../assets/educonnect-hero1.webp";
import counsellingImg from "../../assets/blog/how-much-gap.jpg";
import selectionImg from "../../assets/blog/best-management-usa.jpg";
import applicationImg from "../../assets/blog/day1-cpt.jpg";
import visaImg from "../../assets/blog/can-i-travel.jpg";

// Centered header over a 2 / image / 2 layout: the four services that carry
// the core "shortlist to offer" pipeline (counselling, selection,
// application, visa) flank a reused hero photo, rather than a flat 6-card
// grid. IELTS/PTE guidance and pre-departure support are the two dropped —
// both real services, just the more supplementary two, still listed in full
// on /educonnect/services via the CTA below.
//
// Card images are repurposed blog post photos (project has no dedicated
// per-service photography yet) — picked for a loose thematic fit, but these
// are stand-ins pending real service imagery, not a permanent choice.
const IMAGES = [counsellingImg, selectionImg, applicationImg, visaImg];

// Photo card, caption pinned to the bottom by default. On hover the caption
// rises slightly and the description reveals in the space it vacates — both
// driven by transform/opacity so the card's own box never resizes, keeping
// every card's footprint identical regardless of copy length.
const ServiceCard = ({ service, image, index }) => (
  <motion.li
    variants={riseIn(index * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="group relative aspect-3/4 w-full overflow-hidden rounded-lg border border-neutral-200"
  >
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      loading="lazy"
      decoding="async"
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      aria-hidden="true"
    />

    <div className="absolute inset-x-0 bottom-0 overflow-hidden p-5">
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3">
        <h3 className="text-base font-medium tracking-tight text-white">
          {service.name}
        </h3>
        <p className="mt-2 translate-y-3 text-sm leading-relaxed text-white/85 opacity-0 transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
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
            <ServiceCard service={first} image={IMAGES[0]} index={0} />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <ServiceCard service={second} image={IMAGES[1]} index={1} />
          </div>

          <motion.div
            variants={riseIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden rounded-2xl border border-neutral-200 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] lg:col-start-2 lg:col-span-2 lg:row-span-2"
          >
            <picture>
              <source type="image/webp" srcSet={heroCollageWebp} />
              <img
                src={heroCollageJpg}
                alt="Student holding university admission documents at the airport"
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.div>

          <div className="lg:col-start-4 lg:row-start-1">
            <ServiceCard service={third} image={IMAGES[2]} index={2} />
          </div>
          <div className="lg:col-start-4 lg:row-start-2">
            <ServiceCard service={fourth} image={IMAGES[3]} index={3} />
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
