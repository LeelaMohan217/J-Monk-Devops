import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, GraduationCap, Plane } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { platforms } from "./data";

const icons = {
  "01": Code2,
  "02": GraduationCap,
  "03": Plane,
};

const PlatformsSection = () => {
  return (
    <section id="platforms" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            The three verticals
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
            Three platforms. One standard.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
            Most people arrive needing one of these. Pick the one that
            matches where you are.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = icons[platform.id];

            return (
              <motion.div
                key={platform.id}
                variants={riseIn(index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_24px_60px_-24px_rgba(220,38,38,0.25)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-4 text-8xl font-bold text-neutral-100 transition-colors duration-300 group-hover:text-red-50"
                >
                  {platform.id}
                </span>

                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-100">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <span className="mt-6 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {platform.audienceLabel}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                    {platform.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {platform.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {platform.description}
                  </p>

                  <div className="mt-6 border-t border-neutral-100 pt-6">
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-400">
                      Who it serves
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {platform.serves}
                    </p>
                  </div>

                  <Link
                    to={platform.href}
                    className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:text-red-700"
                  >
                    Explore {platform.name}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
