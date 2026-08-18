import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { platforms } from "./data";

const AudienceRouter = () => {
  return (
    <section id="paths" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              Where you fit
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
              Three ways in.
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 lg:col-span-4 lg:col-start-9">
            Most people arrive for one of these. Pick the one that sounds like
            you and we&apos;ll take it from there.
          </p>
        </motion.div>

        <div className="mt-12 border-t border-neutral-200 md:mt-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              variants={riseIn(index * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-b border-neutral-200"
            >
              <Link
                to={platform.href}
                className="group grid grid-cols-[2rem_1fr_auto] items-start gap-x-4 py-7 transition-colors duration-300 sm:gap-x-8 md:py-9"
              >
                <span className="text-xs font-medium tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-amber-500 md:text-sm">
                  {platform.id}
                </span>

                <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:items-baseline lg:gap-10">
                  <span className="block text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {platform.audienceLabel}
                  </span>

                  <div className="mt-2 lg:mt-0">
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950 md:text-3xl">
                      {platform.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {platform.routerLine}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900"
                  strokeWidth={1.5}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceRouter;
