import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Returns true once the user has scrolled down past `threshold` pixels
 * since the last direction change, false while scrolling up or near the top.
 * Uses GSAP ScrollTrigger so it stays correct under ScrollSmoother.
 */
const useHideOnScroll = (threshold = 10) => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 80) {
          setHidden(false);
        } else if (delta > threshold) {
          setHidden(true);
        } else if (delta < -threshold) {
          setHidden(false);
        }

        lastScrollY.current = currentScrollY;
      },
    });

    return () => trigger.kill();
  }, [threshold]);

  return hidden;
};

export default useHideOnScroll;
