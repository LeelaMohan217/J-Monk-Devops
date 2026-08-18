import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { platforms } from "./data";

const PlatformsSection = () => {
  return (
    <section id="platforms" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            The three verticals
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
            What each one actually does.
          </h2>
        </motion.div>

        <div className="mt-14 md:mt-20">
          {platforms.map((platform, index) => (
            <motion.article
              key={platform.id}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="border-t border-neutral-200 py-10 last:border-b md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium tabular-nums text-neutral-400">
                      {platform.id}
                    </span>
                    <span className="h-px w-10 bg-amber-500/70" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {platform.tagline}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                    {platform.description}
                  </p>

                  <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Who it serves
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {platform.serves}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-500">
                        The problem
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {platform.problem}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    to={platform.href}
                    className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
                  >
                    Explore {platform.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
