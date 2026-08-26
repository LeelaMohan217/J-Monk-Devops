import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronDown, Search } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { STEP, centerTrigger } from "../../../../shared/motionConfig";
import { openRoles } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";

const ANY_MODE = "Any mode";

const OpenRolesSection = () => {
  const [draft, setDraft] = useState({ query: "", mode: ANY_MODE });
  const [applied, setApplied] = useState({ query: "", mode: ANY_MODE });

  const hasRoles = openRoles.items.length > 0;
  const { emptyState, modes = [] } = openRoles;

  const visibleRoles = useMemo(() => {
    const q = applied.query.trim().toLowerCase();
    return openRoles.items.filter((role) => {
      const matchesMode =
        applied.mode === ANY_MODE ||
        role.mode === applied.mode ||
        (role.type || "").toLowerCase().includes(applied.mode.toLowerCase());
      if (!matchesMode) return false;
      if (!q) return true;
      return [role.title, role.type, role.summary, role.mode]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [applied]);

  const isFiltered =
    applied.query.trim() !== "" || applied.mode !== ANY_MODE;

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(draft);
  };

  const reset = () => {
    const cleared = { query: "", mode: ANY_MODE };
    setDraft(cleared);
    setApplied(cleared);
  };

  const CONTROL = "h-11 text-sm text-neutral-900";

  return (
    <section
      id="open-roles"
      className="bg-surface-muted py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div variants={riseIn()} {...centerTrigger} className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {openRoles.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
            {openRoles.headingLead}
            <span className={ACCENT_CLASS}>{openRoles.headingAccent}</span>
          </h2>
        </motion.div>

        <motion.form
          variants={riseIn(STEP)}
          {...centerTrigger}
          onSubmit={handleSubmit}
          className="mt-10 md:mt-12"
          aria-label="Filter open roles"
        >
          <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-surface p-2 shadow-sm sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <label htmlFor="role-search" className="sr-only">
                Search open roles
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                id="role-search"
                type="search"
                value={draft.query}
                disabled={!hasRoles}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, query: e.target.value }))
                }
                placeholder="Search by role or keyword"
                className={`w-full rounded-lg bg-transparent pr-3 pl-10 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 disabled:cursor-not-allowed disabled:text-neutral-400 ${CONTROL}`}
              />
            </div>

            <span
              className="hidden h-6 w-px shrink-0 bg-neutral-200 sm:block"
              aria-hidden="true"
            />

            <div className="relative sm:w-44">
              <label htmlFor="role-mode" className="sr-only">
                Work mode
              </label>
              <select
                id="role-mode"
                value={draft.mode}
                disabled={!hasRoles}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, mode: e.target.value }))
                }
                className={`w-full appearance-none rounded-lg bg-transparent pr-9 pl-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 disabled:cursor-not-allowed disabled:text-neutral-400 ${CONTROL}`}
              >
                <option value={ANY_MODE}>{ANY_MODE}</option>
                {modes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-400"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>

            <button
              type="submit"
              disabled={!hasRoles}
              className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:bg-neutral-300 ${CONTROL} !text-white`}
            >
              Search
            </button>
          </div>

          {hasRoles && (
            <div
              aria-live="polite"
              className="mt-3 flex items-center gap-3 text-xs text-neutral-500"
            >
              <span>
                {visibleRoles.length}{" "}
                {visibleRoles.length === 1 ? "role" : "roles"}
                {isFiltered ? " matching" : " open"}
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={reset}
                  className="font-medium text-red-700 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-800 hover:decoration-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </motion.form>

        {hasRoles ? (
          <>
            <div className="mt-8 border-t border-neutral-200 md:mt-10">
              {visibleRoles.map((role) => (
                <motion.div
                  key={role.id}
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
                      <h3 className="mt-2 text-2xl font-medium tracking-tight text-neutral-800 md:text-3xl">
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

            {visibleRoles.length === 0 && (
              <div className="py-12 text-center md:py-16">
                <p className="text-sm leading-relaxed text-neutral-600">
                  No open roles match those filters.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-3 text-sm font-medium text-red-700 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-800 hover:decoration-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            variants={riseIn(STEP * 2)}
            {...centerTrigger}
            className="mt-8 rounded-xl border border-neutral-200 bg-surface px-8 py-14 text-center md:mt-10 md:py-20"
          >
            <span
              className="mx-auto block h-px w-10 bg-red-600"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-2xl font-medium tracking-tight text-neutral-800 md:text-3xl">
              {emptyState.heading}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              {emptyState.body}
            </p>

            <Link
              to={emptyState.ctaHref}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {emptyState.ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenRolesSection;
