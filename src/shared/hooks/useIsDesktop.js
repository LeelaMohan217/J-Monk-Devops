import { useSyncExternalStore } from "react";

// True at the lg breakpoint and up, where DashboardGridSection switches from a
// stacked single column to a 3-up row.
//
// Extracted from HeroSection because DashboardGridSection needs the same answer
// for a different reason: in a row its three cards share one y position, so a
// per-card scroll trigger fires for all of them at once and an index delay is
// what produces the 1-2-3 ripple. Stacked, each card reaches the viewport on its
// own, so the same index delay just adds dead time before the lower cards move.
//
// useSyncExternalStore rather than an effect with useState, so the first render
// already has the right answer instead of painting the mobile branch and then
// correcting it.
function subscribe(callback) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function useIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
