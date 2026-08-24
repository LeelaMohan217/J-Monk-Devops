import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import {
  STEP,
  centerTrigger,
  groupContainer,
} from "../../../../shared/motionConfig";
import useIsDesktop from "../../../../shared/hooks/useIsDesktop";
import { story } from "./data";
import storyImg from "../../assets/educonnect-about.jpg";

// Centred eyebrow and heading over a row of three: a tinted copy card, the
// photo, then a second tinted copy card. The photo is the portrait that used to
// sit in this page's header, which now runs text only like the services and blog
// headers; putting it here keeps it on the page without making one header the
// odd one out.
//
// bg-red-50 for the two copy cards, the same tint the landing page's stat tiles
// use, so the accent stays inside the palette the site already has rather than
// introducing a new one. They carry no border: the tint is the edge.
//
// The photo cell is aspect-square while stacked, so it has a height of its own,
// and drops that from lg where h-full lets it match whichever copy card is
// tallest. Same arrangement as the who-we-are section on the home page.
//
// Desktop and stacked need different reveals, the same split ServicesSection
// makes. In a row of three the cards share a y position, so only the index step
// produces the ripple. Stacked they are ~900px of page and arrive one at a time,
// where a shared trigger plus index delays would fire the third while it was
// still well below the fold.
const StorySection = () => {
  const isDesktop = useIsDesktop();

  const RowTag = isDesktop ? motion.div : "div";
  const rowProps = isDesktop
    ? { variants: groupContainer, ...centerTrigger }
    : {};

  const cardMotion = (index) => ({
    variants: riseIn(isDesktop ? index * STEP : 0),
    ...(isDesktop ? {} : centerTrigger),
  });

  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="mx-auto max-w-2xl text-center"
        >
          {/* inline-block because riseIn animates y, and a transform does
              nothing to a plain inline element: this would only fade. */}
          <motion.span
            variants={riseIn(0)}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {story.eyebrow}
          </motion.span>

          <motion.h2
            variants={riseIn(STEP)}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl"
          >
            {story.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic">
              {story.headingAccent}
            </span>
          </motion.h2>
        </motion.div>

        <RowTag
          {...rowProps}
          className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3"
        >
          <motion.div
            {...cardMotion(0)}
            className="flex flex-col justify-center rounded-2xl bg-red-50 p-8 md:p-9"
          >
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {story.paragraphs[0]}
            </p>
          </motion.div>

          <motion.div
            {...cardMotion(1)}
            className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 lg:aspect-auto lg:h-full"
          >
            <img
              src={storyImg}
              alt="An EduConnect student at graduation"
              width="736"
              height="736"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            {...cardMotion(2)}
            className="flex flex-col justify-center rounded-2xl bg-red-50 p-8 md:p-9"
          >
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {story.paragraphs[1]}
            </p>
          </motion.div>
        </RowTag>
      </div>
    </section>
  );
};

export default StorySection;
