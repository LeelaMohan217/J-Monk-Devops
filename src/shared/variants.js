// animations.js
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // sharp deceleration, confident rather than floaty
      },
    },
  };
};

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default fadeIn;

// Restrained in-view reveal for editorial rows — fadeIn's 100px travel is
// right for hero entrances but too heavy repeated down the page.
export const riseIn = (delay = 0) => ({
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.45,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
