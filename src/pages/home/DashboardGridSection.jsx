import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { platforms } from "./data";
import { fadeIn } from "../../shared/variants";
import { BorderBeam } from "@/components/ui/border-beam";
import { platformIllustrations } from "./platformIllustrations";
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
      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
      variants={fadeIn("up", 2.05)}
      initial="hidden"
      animate="show"
    >
      {platforms.map((platform) => {
        const Illustration = platformIllustrations[platform.id];
        const image = platformImages[platform.id];
        return (
          <Link
            key={platform.id}
            to={platform.href}
            className="group relative block h-[360px] sm:h-[440px] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-transparent"
          >
            <BorderBeam duration={8} size={80} />

            {image ? (
              <>
                <img
                  src={image}
                  alt={platform.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/60 via-30% to-transparent to-65%" />
              </>
            ) : (
              Illustration && (
                <div className="absolute inset-x-0 top-20 flex justify-center sm:top-24">
                  <Illustration className="h-36 w-36 sm:h-44 sm:w-44" />
                </div>
              )
            )}

            <span className="absolute top-6 left-6 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600 shadow-sm">
              {platform.tagline}
            </span>

            <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:p-8">
              <span className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                {platform.name}
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-800">
                {platform.description}
              </p>
            </div>
          </Link>
        );
      })}
    </motion.section>
  );
};

export default DashboardGridSection;
