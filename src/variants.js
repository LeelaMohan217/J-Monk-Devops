export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 25,
      x: direction === "left" ? 80 : direction === "right" ? -80 : -25,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};
const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default fadeIn;
