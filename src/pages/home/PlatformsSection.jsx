import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { platforms } from "./data";

const PlatformsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlatform = platforms[activeIndex];

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? platforms.length - 1 : i - 1));
  };
  const goNext = () => {
    setActiveIndex((i) => (i === platforms.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="platforms" className="bg-white py-12 md:py-16 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Platforms
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            Different journeys. One shared ecosystem.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            Each platform has its own identity and focus, built on the same
            commitment to quality and long-term partnership.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to={activePlatform.href}
            className="relative flex aspect-16/7 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 px-10 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {activePlatform.tagline}
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              {activePlatform.name}
            </span>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-neutral-600">
              {activePlatform.description}
            </p>
          </Link>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Previous platform"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-900"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next platform"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-900"
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
