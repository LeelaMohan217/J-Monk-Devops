import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Search } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { openRoles } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

// Two states, driven entirely by whether data.js has any roles in it. The empty
// state is the honest default, since the site does not keep evergreen listings
// up, so it is a designed state rather than a fallback. Adding entries to
// `openRoles.items` switches this to the listing without touching this file.
//
// The search field is part of the listing state only. It filters on title, type
// and summary together, so "remote", "backend" and "full-time" all work without
// needing separate facets, which would be over-built for a board this size.
//
// It deliberately does not render while `items` is empty. A search box over an
// empty list is a dead control, and it would be the first thing a visitor
// reached for on a page whose answer is "nothing posted yet".
const OpenRolesSection = () => {
  const [query, setQuery] = useState("");
  const hasRoles = openRoles.items.length > 0;
  const { emptyState } = openRoles;

  const visibleRoles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return openRoles.items;
    return openRoles.items.filter((role) =>
      [role.title, role.type, role.summary]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

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
          <>
            {/* Label is sr-only: the icon plus placeholder carry it visually,
                but a bare input with no accessible name is unusable with a
                screen reader. type="search" gives browsers their native clear
                control for free. */}
            <motion.div
              variants={riseIn(STEP)}
              {...centerTrigger}
              className="mt-10 md:mt-12"
            >
              <label htmlFor="role-search" className="sr-only">
                Search open roles
              </label>
              <div className="relative max-w-md">
                <Search
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-400"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <input
                  id="role-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by role, stack, or location"
                  className="w-full rounded-lg border border-neutral-200 bg-surface py-3 pr-4 pl-11 text-sm text-neutral-900 transition-colors duration-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10"
                />
              </div>

              {/* aria-live so a screen reader hears the count change as the
                  filter narrows, rather than the list silently reordering. */}
              <p aria-live="polite" className="mt-3 text-xs text-neutral-500">
                {visibleRoles.length}{" "}
                {visibleRoles.length === 1 ? "role" : "roles"}
                {query.trim() ? ` matching "${query.trim()}"` : " open"}
              </p>
            </motion.div>

            <div className="mt-8 border-t border-neutral-200 md:mt-10">
              {visibleRoles.map((role) => (
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

            {/* The filter can empty the list even though roles exist, which is
                a different situation from having none posted. Saying so, with a
                way back, beats leaving the reader looking at a bare rule. */}
            {visibleRoles.length === 0 && (
              <div className="py-10 text-center md:py-14">
                <p className="text-sm leading-relaxed text-neutral-600">
                  No open roles match that search.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-3 text-sm font-medium text-red-700 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-800 hover:decoration-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Clear the search
                </button>
              </div>
            )}
          </>
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
