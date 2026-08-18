import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { platforms } from "./data";

// Routing only. The umbrella never collects an enquiry itself — a visitor
// chooses a vertical first and reaches that vertical's own team.
const ContactCTA = () => {
  return (
    <section id="get-started" className="bg-white py-20 md:py-28 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-900 md:text-6xl">
            Not sure where to start?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
            Tell us where you&apos;re trying to go. Each path below reaches the
            people who do that work — not a shared inbox.
          </p>
        </motion.div>

        <div className="mt-14 grid border-t border-neutral-200 md:mt-20 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="border-b border-neutral-200 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <Link
                to={platform.contactHref}
                className="group flex h-full flex-col justify-between gap-10 py-8 pr-6 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0"
              >
                <div>
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {platform.name}
                  </span>
                  <p className="mt-4 text-2xl font-semibold tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950 md:text-3xl">
                    {platform.intent}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors duration-300 group-hover:text-black">
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
