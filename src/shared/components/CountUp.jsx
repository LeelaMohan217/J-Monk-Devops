import { useEffect, useMemo } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

// Counts a stat value up to its final figure when its group scrolls into view.
//
// Takes the display string the data already stores ("100+", "98%", "3+") rather
// than a number plus a separate suffix, so it drops into the existing stat data
// on the landing page and in EduConnect's hero without a data migration. The
// string is split into a prefix, a number, and a suffix once per value, and
// anything that does not parse renders verbatim, which is what a future
// non-numeric entry would need anyway.
//
// The caller owns the trigger and passes `start`, rather than this component
// observing itself. Four tiles each running their own IntersectionObserver would
// drift apart from the one the group's riseIn already runs on, and the count is
// supposed to begin as its tile rises.
const parseStatValue = (value) => {
  const match = /^([^\d-]*)(-?[\d,]*\.?\d+)(.*)$/.exec(String(value));
  if (!match) return null;

  const [, prefix, rawNumber, suffix] = match;
  const target = Number(rawNumber.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;

  return {
    prefix,
    suffix,
    target,
    decimals: rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0,
    grouped: rawNumber.includes(","),
  };
};

const formatCount = (parsed, latest) => {
  const { prefix, suffix, decimals, grouped } = parsed;
  const body = grouped
    ? latest.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : latest.toFixed(decimals);

  return `${prefix}${body}${suffix}`;
};

// Matches riseIn's easing, so the number front-loads and settles on the same
// curve the tile travels on. Long enough to read as counting rather than as a
// number changing once.
const COUNT_DURATION = 1.2;
const COUNT_EASE = [0.16, 1, 0.3, 1];

const CountUp = ({ value, start = true, delay = 0 }) => {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    parsed ? formatCount(parsed, latest) : "",
  );

  const shouldAnimate = Boolean(parsed) && !reduceMotion;

  useEffect(() => {
    if (!shouldAnimate || !start) return undefined;

    const controls = animate(count, parsed.target, {
      duration: COUNT_DURATION,
      delay,
      ease: COUNT_EASE,
    });

    return () => controls.stop();
  }, [shouldAnimate, start, parsed, delay, count]);

  // Unparseable, or the reader asked for reduced motion: a number racing on its
  // own is exactly the kind of movement that setting turns off.
  if (!shouldAnimate) return value;

  return (
    <>
      {/* The animating span is hidden from the accessibility tree: a screen
          reader would otherwise announce every intermediate figure. The final
          value is exposed once, statically. */}
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden="true">{display}</motion.span>
    </>
  );
};

export default CountUp;
