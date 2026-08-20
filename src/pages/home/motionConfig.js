// Shared scroll-reveal choreography for the landing page sections.
//
// Kept in one module because these three values have to agree across
// HeroSection, DashboardGridSection, IntroSection, StatsSection, and
// FAQSection. When they were inlined per file they drifted: intervals ranged
// from 0.04 to 0.12 and trigger thresholds from `amount: 0.2` to `amount: 1`,
// so some groups rippled and others arrived in a lump.

// Container for a group of items that share one in-view trigger. States are
// deliberately empty: the children animate themselves, and giving the parent its
// own y or opacity would compose with the children's, doubling their travel.
export const groupContainer = {
  hidden: {},
  show: {},
};

// Seconds between consecutive items in a group. riseIn runs for 0.45s on an ease
// that front-loads the movement, so most of the travel is over within ~0.18s.
// A smaller step makes items overlap enough to read as simultaneous.
export const STEP = 0.2;

// Fires a group when it reaches roughly the middle of the screen rather than the
// instant it appears at the bottom edge. This is an IntersectionObserver
// rootMargin: insetting the bottom by 45% shrinks the observer root to the top
// 55% of the viewport, so a group triggers when its top edge crosses the 55%
// line. Without it, groups animate at the very bottom of the screen while the
// reader is still looking higher up, and the movement is over by the time their
// eye arrives.
//
// 45% rather than 50% leaves headroom: an element too close to the end of the
// page can never bring its top to the exact centre, and with `once: true` it
// would then never animate at all. Always check a new group can actually reach
// this line before using it.
//
// Do NOT pair this with a `viewport.amount` threshold. Amount is measured
// against the observer root, so a tall group can end up needing more pixels than
// the shortened root contains, and would never fire. Position alone is the rule.
export const CENTER_MARGIN = "0px 0px -45% 0px";

// Spread into a motion component to give a group the standard scroll trigger.
export const centerTrigger = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: CENTER_MARGIN },
};

// The hero is above the fold, so it is mount-timed rather than scroll-triggered,
// and its pieces are staged: eyebrow, heading words, lead, CTA, then the platform
// cards last.
//
// These last two live here rather than as literals in their own files because
// they span two components: the CTA is in HeroSection and the cards are in
// DashboardGridSection. When the cards' delay was a local value it got dropped
// during an unrelated change and they started animating a full second before the
// button they are supposed to follow. Keep HERO_CARDS_DELAY greater than
// HERO_CTA_DELAY.
export const HERO_CTA_DELAY = 1.15;
export const HERO_CARDS_DELAY = 1.3;
