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
// Purpose-shot artwork per service, replacing the four blog thumbnails these
// cards borrowed while the project had none of its own. Each is a webp with a
// jpg fallback, encoded down from ~2MB PNG masters (7.7MB across the four) that
// are not committed.
import counsellingWebp from "../../assets/services/career-counselling.webp";
import counsellingJpg from "../../assets/services/career-counselling.jpg";
import selectionWebp from "../../assets/services/course-selection.webp";
import selectionJpg from "../../assets/services/course-selection.jpg";
import applicationWebp from "../../assets/services/admission-support.webp";
import applicationJpg from "../../assets/services/admission-support.jpg";
import visaWebp from "../../assets/services/visa-assistance.webp";
import visaJpg from "../../assets/services/visa-assistance.jpg";

// Centered header over a simple row of 4 equal cards — photo on top, heading
// and description in plain space below, no hover mechanic. Replaces the
// earlier 2/image/2 hover-reveal layout entirely. Same four core services as
// before (counselling, selection, application, visa) — the two more
// supplementary ones (IELTS/PTE guidance, pre-departure support) stay listed
// in full on /educonnect/services via the CTA below.
// Order matches services.items, so index N of one lines up with index N of the
// other: counselling, selection, application, visa.
const IMAGES = [
  { webp: counsellingWebp, jpg: counsellingJpg },
  { webp: selectionWebp, jpg: selectionJpg },
  { webp: applicationWebp, jpg: applicationJpg },
  { webp: visaWebp, jpg: visaJpg },
];

// Desktop and stacked need genuinely different behaviour, the same split
// DashboardGridSection makes on the landing page.
//
// At lg the four cards sit in one row sharing a y position, so a per-card
// trigger would fire all four at once and the index step is the only thing that
// produces the 1-2-3-4 ripple. The trigger for the group lives on the <ul>.
//
// Below lg they stack, and each card with its photo is ~430px tall, so they
// arrive one at a time on their own: a shared trigger plus index delays would
// instead stall the fourth card by 0.6s and fire it while it was still well
// below the fold.
const ServiceCard = ({ service, image, index, isDesktop }) => (
  <motion.li
    variants={riseIn(isDesktop ? index * STEP : 0)}
    {...(isDesktop ? {} : centerTrigger)}
    className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-surface"
  >
    {/* Square frame on a 3:4 source, so a quarter of the height is cropped.
        object-top takes all of that off the bottom rather than splitting it
        top and bottom, which is what makes the crop safe here: every one of
        these four puts its subject in the upper portion of the frame, and the
        two carrying legible text (the signpost labels, the visa checklist) have
        it high enough to survive intact. A centred crop cut into both. */}
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
      <h3 className="text-base font-medium tracking-tight text-neutral-900 md:text-lg">
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

  // In a row the cards ripple off one shared trigger; stacked they carry their
  // own, so the list must not impose a group state on them (see ServiceCard).
  const ListTag = isDesktop ? motion.ul : "ul";
  const listProps = isDesktop
    ? { variants: groupContainer, ...centerTrigger }
    : {};

  // py-16 md:py-24 matches the who-we-are section directly above, rather than
  // the py-24 md:py-32 this used to carry, so adjacent bands do not step from
  // 96px to 128px of vertical padding.
  //
  // border-b earns its place: the testimonials section below shares this
  // section's surface-muted ground, so without a rule the two run together as
  // one continuous band with no seam. The colour is left to the base layer,
  // which resolves to the same neutral-200 hairline the who-we-are section's
  // border-t uses.
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-neutral-200 bg-surface-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Eyebrow, heading, lead: three beats on one trigger, matching the
            landing page's section headers. */}
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
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-900"
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

        {/* Its own trigger: it sits below the cards and would otherwise animate
            while they were still being read. */}
        <motion.div
          variants={riseIn(0)}
          {...centerTrigger}
          className="mt-14 flex justify-center md:mt-16"
        >
          <Link
            to={services.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 w-full sm:w-auto"
          >
            {services.cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
