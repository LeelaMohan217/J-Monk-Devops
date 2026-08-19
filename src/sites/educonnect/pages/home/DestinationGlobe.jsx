import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";

// Magic UI's Globe (src/components/ui/globe.jsx) with the one thing it doesn't
// expose: a focus target, so hovering a destination flies the globe to that
// marker instead of leaving it on an aimless spin. Drag-to-spin and the spring
// damping are kept from the original; the vendored file is left untouched so a
// future `shadcn add globe` doesn't clobber this.
const MOVEMENT_DAMPING = 1400;
const DOUBLE_PI = Math.PI * 2;

// cobe's own lat/lng → rotation conversion (phi is the y-rotation, theta the
// tilt), lifted from its focus-a-location example.
const locationToAngles = (lat, lng) => [
  Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

const GLOBE_STYLE = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [220 / 255, 38 / 255, 38 / 255], // red-600, matching the legend dots
  glowColor: [1, 1, 1],
};

// A focused marker ends up facing the camera, i.e. at the visual centre of the
// sphere — that's what lets the section pin a callout there without projecting
// coordinates itself. `settled` reports when the rotation has actually arrived,
// so the callout appears on the marker instead of trailing it across the globe.
const ARRIVAL_TOLERANCE = 0.03;

const DestinationGlobe = ({ markers, focus, onSettledChange }) => {
  const canvasRef = useRef(null);
  const phiRef = useRef(0);
  const thetaRef = useRef(GLOBE_STYLE.theta);
  const widthRef = useRef(0);
  const focusRef = useRef(null);
  const pointerInteracting = useRef(null);
  const settledRef = useRef(false);
  const onSettledRef = useRef(onSettledChange);

  const drag = useMotionValue(0);
  const dragSpring = useSpring(drag, { mass: 1, damping: 30, stiffness: 100 });

  useEffect(() => {
    onSettledRef.current = onSettledChange;
  }, [onSettledChange]);

  // Focus lives in a ref, so changing the active destination steers the running
  // globe rather than tearing down and rebuilding the WebGL context.
  useEffect(() => {
    focusRef.current = focus ? locationToAngles(focus[0], focus[1]) : null;
    settledRef.current = false;
    onSettledRef.current?.(false);
  }, [focus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      ...GLOBE_STYLE,
      markers,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (focusRef.current) {
          // Rotate whichever way round is shorter, easing in as it arrives.
          const [focusPhi, focusTheta] = focusRef.current;
          const forward = (focusPhi - phiRef.current + DOUBLE_PI) % DOUBLE_PI;
          const backward = (phiRef.current - focusPhi + DOUBLE_PI) % DOUBLE_PI;

          if (forward < backward) phiRef.current += forward * 0.06;
          else phiRef.current -= backward * 0.06;

          thetaRef.current = thetaRef.current * 0.94 + focusTheta * 0.06;

          // Drag counts against arrival too: it offsets the rotation, so the
          // marker is no longer centred and a pinned callout would lie.
          const settled =
            Math.min(forward, backward) < ARRIVAL_TOLERANCE &&
            Math.abs(focusTheta - thetaRef.current) < ARRIVAL_TOLERANCE &&
            Math.abs(dragSpring.get()) < 0.02;

          if (settled !== settledRef.current) {
            settledRef.current = settled;
            onSettledRef.current?.(settled);
          }
        } else if (!prefersReducedMotion && pointerInteracting.current === null) {
          phiRef.current += 0.004;
        }

        state.phi = phiRef.current + dragSpring.get();
        state.theta = thetaRef.current;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    const reveal = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 0);

    return () => {
      clearTimeout(reveal);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [markers, dragSpring]);

  const setPointer = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value === null ? "grab" : "grabbing";
    }
    // Releasing springs the drag offset back to zero, so the globe glides back
    // onto the focused marker instead of leaving the callout stranded.
    if (value === null) drag.set(0);
  };

  return (
    <canvas
      ref={canvasRef}
      className="size-full cursor-grab opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
      onPointerDown={(event) => setPointer(event.clientX)}
      onPointerUp={() => setPointer(null)}
      onPointerOut={() => setPointer(null)}
      onMouseMove={(event) => {
        if (pointerInteracting.current === null) return;
        const delta = event.clientX - pointerInteracting.current;
        drag.set(drag.get() + delta / MOVEMENT_DAMPING);
      }}
      onTouchMove={(event) => {
        if (pointerInteracting.current === null || !event.touches[0]) return;
        const delta = event.touches[0].clientX - pointerInteracting.current;
        drag.set(drag.get() + delta / MOVEMENT_DAMPING);
      }}
    />
  );
};

export default DestinationGlobe;
