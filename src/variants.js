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
        duration: 1.2, // Increased duration for smoothness
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing function for a smooth and natural feel
      },
    },
  };
};

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased stagger timing for better flow
    },
  },
};

export default fadeIn;
