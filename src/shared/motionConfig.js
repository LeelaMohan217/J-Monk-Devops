
export const groupContainer = {
  hidden: {},
  show: {},
};

export const STEP = 0.2;

const isDesktopViewport =
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 1024px)").matches;

// Desktop grids lay out compactly, so a near-center trigger reads fine.
// Mobile stacks the same content into much taller single columns, so a
// near-center trigger leaves a large blank gap before it reveals.
export const CENTER_MARGIN = isDesktopViewport
  ? "0px 0px -45% 0px"
  : "0px 0px -15% 0px";

export const centerTrigger = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: CENTER_MARGIN },
};

export const HERO_WORD_START = 0.1;
export const HERO_WORD_STEP = 0.04;
export const HERO_LEAD_DELAY = 1;
export const HERO_CTA_DELAY = 1.15;
export const HERO_TAIL_DELAY = 1.3;
