import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { openRoles } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Two states, driven entirely by whether data.js has any roles in it. The empty
// state is the honest default, since the site does not keep evergreen listings
// up, so it is a designed state rather than a fallback. Adding entries to
// `openRoles.items` switches this to the listing without touching this file.
const OpenRolesSection = () => {
  const hasRoles = openRoles.items.length > 0;
  const { emptyState } = openRoles;

  return (
    <section
      id="open-roles"
      className="bg-surface-muted py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {openRoles.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {openRoles.headingLead}
            <span className={ACCENT_CLASS}>{openRoles.headingAccent}</span>
          </h2>
        </motion.div>

        {hasRoles ? (
          <div className="mt-12 border-t border-neutral-200 md:mt-16">
            {openRoles.items.map((role) => (
              <motion.div
                key={role.id}
                // No index step: this is a variable-length list of full-width
                // rows, so each one gets its own centre-line trigger and fires
                // when it arrives. A step here would stall rows that are already
                // on screen, which is the case motionConfig warns about.
                variants={riseIn()}
                {...centerTrigger}
                className="border-b border-neutral-200"
              >
                <Link
                  to={role.href}
                  className="group grid grid-cols-[1fr_auto] items-start gap-x-6 py-7 md:py-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <div>
                    <span className="block text-[0.7rem] font-medium uppercase tracking-[0.25em] text-neutral-500">
                      {role.type}
                    </span>
                    <h3
                      className="mt-2 text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl"
                    >
                      {role.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                      {role.summary}
                    </p>
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
        ) : (
          <motion.div
            variants={riseIn(STEP)}
            {...centerTrigger}
            className="mt-12 rounded-2xl border border-neutral-200 bg-surface p-8 md:mt-16 md:p-10"
          >
            <span className="h-px w-10 bg-red-600" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
              {emptyState.heading}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
              {emptyState.body}
            </p>

            <Link
              to={emptyState.ctaHref}
              className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {emptyState.ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <p className="mt-8 border-t border-neutral-200 pt-6 text-sm leading-relaxed text-neutral-600">
              {emptyState.altText}{" "}
              <Link
                to={emptyState.altHref}
                className="font-medium text-red-700 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-800 hover:decoration-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                {emptyState.altLabel}
              </Link>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenRolesSection;
