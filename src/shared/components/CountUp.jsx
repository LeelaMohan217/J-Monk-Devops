import { useEffect, useMemo } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

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

  if (!shouldAnimate) return value;

  return (
    <>
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden="true">{display}</motion.span>
    </>
  );
};

export default CountUp;
