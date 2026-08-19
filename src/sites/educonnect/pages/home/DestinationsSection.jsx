import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { destinations } from "./data";
import DestinationGlobe from "./DestinationGlobe";

// Only entries with coordinates can be plotted or toured; the catch-all is a
// label. Both derived at module scope: MARKERS has to keep a stable identity or
// the globe would rebuild its WebGL context on every render.
const PLOTTED = destinations.items.filter((item) => item.coordinates);
const MARKERS = PLOTTED.map((item) => ({
  location: item.coordinates,
  size: 0.07,
}));

const TOUR_MS = 3600;

// The globe tours the destinations on its own and names each one in a callout
// pinned to the marker — no list to read alongside it. A focused marker settles
// at the centre of the sphere, so the callout is anchored there and only shown
// once DestinationGlobe reports the rotation has arrived.
const DestinationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const id = setInterval(
      () => setActiveIndex((index) => (index + 1) % PLOTTED.length),
      TOUR_MS,
    );
    return () => clearInterval(id);
  }, []);

  // Stable identity so the globe's effect doesn't re-run on every render.
  const handleSettledChange = useCallback((value) => setSettled(value), []);

  const active = PLOTTED[activeIndex];

  return (
    <section className="overflow-hidden bg-surface-sunken py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            variants={riseIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {destinations.eyebrow}
            </span>

            <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
              {destinations.heading}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-600">
              {destinations.hint}
            </p>

            {/* The names left the visual layout with the list, so they stay in
                the accessibility tree here — a canvas and a decorative callout
                can't carry them. */}
            <ul className="sr-only">
              {destinations.items.map((destination) => (
                <li key={destination.name}>{destination.name}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={riseIn(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-8 lg:col-start-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:max-w-none xl:-mr-12">
              <DestinationGlobe
                markers={MARKERS}
                focus={active.coordinates}
                onSettledChange={handleSettledChange}
              />

              {/* Anchored to the sphere's centre and pulled fully above it, so
                  the leader line's bottom tip lands on the focused marker. */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
                aria-hidden="true"
              >
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={settled ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <span className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3.5 py-1.5 text-xs font-medium whitespace-nowrap text-neutral-900 shadow-sm backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    {active.name}
                  </span>
                  <span className="h-5 w-px bg-neutral-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
