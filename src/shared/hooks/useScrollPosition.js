import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Tracks the current scroll position via GSAP ScrollTrigger instead of
 * window.scrollY, so it stays correct whether the page scrolls natively
 * or through a GSAP ScrollSmoother instance.
 */
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setScrollY(self.scroll()),
    });

    return () => trigger.kill();
  }, []);

  return scrollY;
};

export default useScrollPosition;
