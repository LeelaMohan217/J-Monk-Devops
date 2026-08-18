import { motion } from "framer-motion";
import { platforms } from "./data";
import { fadeIn } from "../../shared/variants";
import digiConnectCard from "./assets/digiconnect-card.jpg";
import skillConnectCard from "./assets/skillconnect-card.jpg";
import eduConnectCard from "./assets/educonnect-card.jpg";

const platformImages = {
  "01": digiConnectCard,
  "02": skillConnectCard,
  "03": eduConnectCard,
};

const DashboardGridSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto grid grid-cols-1 gap-4 px-6 md:gap-6 md:px-8 lg:grid-cols-3"
      variants={fadeIn("up", 2.05)}
      initial="hidden"
      animate="show"
    >
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className="relative flex w-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm"
        >
          <div className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-xl">
            <img
              src={platformImages[platform.id]}
              alt={platform.name}
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/90 via-50% to-transparent" />

            <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between">
              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600 shadow-sm">
                {platform.tagline}
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-4 top-60 z-0 h-28 rounded-full bg-white blur-2xl" />

          <div className="relative z-10 flex flex-1 items-center px-2 pb-1">
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              {platform.name}
            </span>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default DashboardGridSection;
