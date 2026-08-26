import { motion } from "framer-motion";

const MenuToggleIcon = ({ open }) => (
  <div className="relative w-5 h-5">
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    />
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
  </div>
);

export default MenuToggleIcon;
