import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const onScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frameId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return scrollY;
};

export default useScrollPosition;
