import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { testimonials } from "./data";

// CSS multi-column layout instead of a grid — since the quotes are
// deliberately varied lengths (see data.js), columns naturally produce the
// staggered "masonry" heights from the mockup without manual row-span math.
// Avatar is a flat-colour monogram circle, not a photo: no real reviewer
// headshots exist yet, and a stock photo standing in for one would
// misrepresent it as a real person rather than read as a placeholder.
const TestimonialsSection = () => {
  const isDesktop = useIsDesktop();

  // Same row-versus-stack split as ServicesSection. In three columns the first
  // quotes share a y position and need the index step to ripple; in one column
  // the five quotes are ~1100px of page and reach the centre line one at a time.
  const ColumnsTag = isDesktop ? motion.div : "div";
  const columnsProps = isDesktop
    ? { variants: groupContainer, ...centerTrigger }
    : {};

  // py-16 md:py-24, the same rhythm the who-we-are and services sections use.
  // This was the last section still on py-24 md:py-32, so it was the one place
  // the page stepped from 96px of vertical padding to 128px.
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {testimonials.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-900"
          >
            {testimonials.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {testimonials.headingAccent}
            </span>
          </motion.h2>

          <motion.p
            variants={riseIn(STEP * 2)}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-600"
          >
            {testimonials.lead}
          </motion.p>
        </motion.div>

        <ColumnsTag
          {...columnsProps}
          className="mt-14 columns-1 gap-4 sm:columns-2 md:mt-20 lg:columns-3"
        >
          {testimonials.items.map((item, index) => (
            <motion.figure
              key={item.name}
              variants={riseIn(isDesktop ? index * STEP : 0)}
              {...(isDesktop ? {} : centerTrigger)}
              className="mb-4 break-inside-avoid rounded-xl border border-neutral-200 bg-surface p-6"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-700">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* object-top rather than the default centre: every portrait
                    here is a half-body shot with the face in the top third, and
                    a centred cover-crop lands on the torso. Anchoring to the top
                    also guarantees no crown of a head is cut off, which
                    object-position values below ~10% start doing on the tallest
                    of them.

                    Falls back to the flat monogram circle when an item has no
                    image, so a sixth testimonial can be added before its
                    portrait exists. */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="h-9 w-9 shrink-0 rounded-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    className={`h-9 w-9 shrink-0 rounded-full ${item.avatarColor}`}
                    aria-hidden="true"
                  />
                )}
                <span className="text-sm font-medium text-neutral-900">
                  {item.name}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </ColumnsTag>
      </div>
    </section>
  );
};

export default TestimonialsSection;
