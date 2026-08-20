// The responsive size of every page's opening heading, in one place.
//
// This is deliberately shared across all four shells (the umbrella landing page
// and the three brands), unlike the accent treatment in each site's own
// headingStyles.js. The accent is brand voice, so it stays per brand; the size
// ramp is page rhythm, and when each hero picked its own the site drifted into
// four different scales: 30px on EduConnect, 40px on DigiConnect, 48px on
// SkillConnect, and one hero with no base size at all, which fell back to the
// body's 16px on phones because its smallest step was behind `sm:`.
//
// That last failure is the reason the base step here carries no breakpoint
// prefix. Tailwind's `sm:` and up are min-width queries, so a class list that
// starts at `sm:` leaves phones (the majority of the traffic) styled by
// whatever the element inherits. Every string below starts unprefixed.
//
// Steps map to device bands, using the display-* tokens from src/index.css:
//
//   base        phones            display-xs   2rem     32px
//   sm  ≥640    large phones      display-sm   2.5rem   40px
//   md  ≥768    tablets           display-md   3.5rem   56px
//   lg  ≥1024   desktop           display-lg   4.75rem  76px
//
// The tokens carry their own line-height and letter-spacing, so a component
// using these must not also set `leading-tight` / `tracking-tight`: those are
// single fixed values and would flatten the per-step tuning back out. A
// deliberate per-component leading (the landing hero's leading-[1.05], which
// its word masks are padded against) is fine.

// Full-width heroes, where the heading owns the whole rail and has room to run
// to the largest step: the umbrella landing hero, DigiConnect's home hero,
// SkillConnect's home hero.
export const HERO_HEADING_SIZE =
  "text-display-xs sm:text-display-sm md:text-display-md lg:text-display-lg";

// Inner page headers (about, services, contact, careers, blog), and any hero
// whose heading shares its row with something else so it never gets the full
// rail: EduConnect's home hero sits in a 6-of-12 column beside the photo, where
// display-lg would break nearly every word onto its own line. Same ramp as
// above, stopping one step short at the top.
export const PAGE_HEADING_SIZE =
  "text-display-xs sm:text-display-sm md:text-display-md";
