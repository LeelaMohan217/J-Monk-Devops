import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { platforms } from "./data";

const PlatformsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activePlatform = platforms[activeIndex];

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i === 0 ? platforms.length - 1 : i - 1));
  };
  const goNext = () => {
    setDirection(1);
    setActiveIndex((i) => (i === platforms.length - 1 ? 0 : i + 1));
  };

  return (
    <section
      id="platforms"
      className="bg-black py-12 md:py-16 scroll-mt-36"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300">
              <span className="font-raleway text-xs font-light uppercase tracking-[0.2em]">
                Platforms
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.15)}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white"
          >
            Different <span className="text-orange-400">journeys</span>. One
            shared <span className="text-red-500">ecosystem</span>.
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-sm sm:text-base leading-relaxed text-white/60"
          >
            Each platform has its own identity and focus, built on the same
            commitment to quality and long-term partnership.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={activePlatform.id}
                custom={direction}
                initial={(dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 })}
                animate={{ opacity: 1, x: 0 }}
                exit={(dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Link
                  to={activePlatform.href}
                  className="group relative block aspect-16/7 w-full overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={activePlatform.image}
                    alt={activePlatform.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md transition-all duration-500 lg:bg-black/40 lg:backdrop-blur-0 lg:group-hover:bg-black/50 lg:group-hover:backdrop-blur-md" />

                  {/* Hint that the card is interactive; only relevant on devices with hover, hidden while hovering */}
                  <div className="hidden absolute top-5 right-6 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1.5 lg:flex lg:opacity-100 lg:animate-pulse lg:group-hover:opacity-0 lg:group-hover:animate-none">
                    <MousePointerClick className="w-3 h-3 text-white/70" />
                    <span className="font-raleway text-[10px] font-light uppercase tracking-[0.15em] text-white/70">
                      Hover to explore
                    </span>
                  </div>

                  {/* Description, always visible on mobile/tablet; revealed on hover as the name splits apart on desktop */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-10 text-center opacity-100 transition-opacity duration-500 delay-150 lg:opacity-0 lg:group-hover:opacity-100">
                    <span className="font-raleway text-xs font-light uppercase tracking-[0.2em] text-neutral-300">
                      {activePlatform.tagline}
                    </span>
                    <p className="max-w-md text-sm sm:text-base leading-relaxed text-white/80">
                      {activePlatform.description}
                    </p>
                  </div>

                  {/* Big name, cut in half and pulled apart; always apart on mobile/tablet, only on hover on desktop */}
                  <span
                    aria-hidden="true"
                    className="font-raleway pointer-events-none absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-300 transition-transform duration-500 ease-in-out [clip-path:inset(0_0_48%_0)] -translate-y-[60%] lg:translate-y-0 lg:group-hover:translate-y-[-60%]"
                  >
                    {activePlatform.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-raleway pointer-events-none absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-300 transition-transform duration-500 ease-in-out [clip-path:inset(48%_0_0_0)] translate-y-[60%] lg:translate-y-0 lg:group-hover:translate-y-[60%]"
                  >
                    {activePlatform.name}
                  </span>
                  <span className="sr-only">{activePlatform.name}</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Previous platform"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/60 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next platform"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/60 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
