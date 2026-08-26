import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { centerTrigger } from "../../../../shared/motionConfig";
import { tracks } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const TracksSection = () => {
  return (
    <section
      id="tracks"
      className="bg-olive-100 py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              {tracks.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              {tracks.headingLead}
              <span className={ACCENT_CLASS}>{tracks.headingAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            {tracks.lead}
          </p>
        </motion.div>

        <div className="mt-12 border-t border-neutral-200 md:mt-16">
          {tracks.items.map((track) => (
            <motion.div
              key={track.id}
              variants={riseIn()}
              {...centerTrigger}
              className="border-b border-neutral-200"
            >
              <Link
                to={track.href}
                className="group grid grid-cols-[2rem_1fr_auto] items-start gap-x-4 py-7 transition-colors duration-300 sm:gap-x-8 md:py-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span
                  className="text-xs font-medium tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-red-600 md:text-sm"
                  aria-hidden="true"
                >
                  {track.id}
                </span>

                <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:items-baseline lg:gap-10">
                  <span className="block text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {track.label}
                  </span>
                  <div className="mt-2 lg:mt-0">
                    <h3
                      className="text-2xl font-medium tracking-tight text-neutral-800 md:text-3xl"
                    >
                      {track.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {track.line}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
