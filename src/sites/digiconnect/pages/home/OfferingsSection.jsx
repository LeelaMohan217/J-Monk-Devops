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
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-surface"
              >
                {/* Header band: solid red-600 with a diagonal-cut bottom
                    edge — a flat color-block panel rather than a soft tint,
                    closer to corporate/bank deck references than the site's
                    usual soft cards. overflow-hidden on the article is what
                    rounds this band's own square top corners — it has none
                    of its own. */}
                <div className="bg-red-600 px-6 pt-6 pb-12 [clip-path:polygon(0_0,100%_0,100%_75%,0_100%)] md:px-8 md:pt-8">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-medium tabular-nums text-white/70 md:text-sm"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                </div>

                {/* Content zone, pulled up under the diagonal cut so the
                    heading starts close to the band's shortest point instead
                    of leaving a dead gap of white space. relative z-10:
                    clip-path on the header above establishes its own
                    stacking context (the same category as transform/filter/
                    opacity), which paints above plain static content
                    regardless of DOM order — without this, the header's
                    still-uncut left edge would paint over the heading text
                    wherever the negative margin makes them overlap. */}
                <div className="relative z-10 -mt-6 px-6 pb-6 md:px-8 md:pb-8">
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 md:text-xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
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
