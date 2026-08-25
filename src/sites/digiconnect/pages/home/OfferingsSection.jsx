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

// Keyed to each service's id, the same lookup-by-id pattern EduConnect's and
// SkillConnect's services pages use for their own icon maps.
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
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {offerings.headingLead}
            <span className={ACCENT_CLASS}>{offerings.headingAccent}</span>
          </h2>
        </motion.div>

        {/* Six equal cards, three to a row. This was a bento of mixed column
            spans over a six-track grid; the varied widths made the six services
            read as ranked when they are peers, and the layout depended on there
            being exactly six of them. A plain grid takes any number.

            Two columns at md, three from lg, the same ramp SkillConnect's
            offerings grid uses for its own six. */}
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {offerings.services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <motion.article
                key={service.id}
                // No index step: six cells over three rows is tall enough that
                // a step would stall the lower ones. Each gets its own trigger.
                variants={riseIn()}
                {...centerTrigger}
                className="relative"
              >
                {/* Flat offset "shadow" — a solid duplicate of the card's own
                    shape, nudged down-right, no blur. This IS the shadow; the
                    card itself never also gets shadow-lg. Same clip-path as
                    the card so its notch cuts identically — otherwise a
                    square red-100 corner would sit inside the card's
                    diagonal cut and break the torn-paper read. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-red-100 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]"
                />

                {/* Card surface. Tinted, so per the site's rule elsewhere
                    (see ServicesListSection.jsx) a red hairline replaces the
                    neutral one — a grey border against a tint reads as a
                    dirty edge. Corner notch is the site's signature shape,
                    reused from the EduConnect hero photo, top-right here
                    since the index numeral already claims the top-left. */}
                <div className="relative flex flex-col rounded-2xl border border-red-100 bg-red-50 p-6 md:p-8 [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]">
                  {/* Hidden from the accessibility tree: otherwise a screen
                      reader announces "zero one" before six consecutive
                      headings. */}
                  <span
                    className="text-xs font-medium tabular-nums text-neutral-400 md:text-sm"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-lg font-medium tracking-tight text-neutral-900 md:text-xl">
                    {service.name}
                  </h3>
                  {/* text-sm, the card-body size used site-wide. These
                      descriptions ran at text-lg md:text-xl while they were
                      full-width editorial rows, which inside a bento cell
                      would outweigh its own heading. */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>

                {/* Icon, half in / half out of the notch: its 40x40 box
                    exactly matches the notch's own cut triangle, so the
                    diagonal cut bisects the circle through its center. Solid
                    red-600 fill rather than a bare stroke, since it straddles
                    two different backgrounds — the solid card corner and the
                    cut-away void — and needs a fixed surface to stay legible
                    against either. */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-600"
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Plain closing CTA, not its own grid cell: a card here read as a
            seventh service rather than a link out of the section. */}
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
