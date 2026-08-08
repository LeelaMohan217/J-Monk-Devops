import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { platforms } from "./data";
import { fadeIn } from "../../shared/variants";

const DashboardGridSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto mb-16 md:mb-24 grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl border border-neutral-200 overflow-hidden sm:divide-x sm:divide-neutral-200"
      variants={fadeIn("up", 2.05)}
      initial="hidden"
      animate="show"
    >
      {platforms.map((platform) => (
        <Link
          key={platform.id}
          to={platform.href}
          className="group relative block h-[60vh] sm:h-[85vh] w-full overflow-hidden bg-transparent"
        >
          <span className="absolute top-6 left-6 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600 shadow-sm">
            {platform.tagline}
          </span>

          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:p-8">
            <span className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
              {platform.name}
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
              {platform.description}
            </p>
          </div>
        </Link>
      ))}
    </motion.section>
  );
};

export default DashboardGridSection;
