import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { platforms } from "./data";
import { fadeIn } from "../../shared/variants";
import { HERO_TAIL_DELAY, STEP } from "../../shared/motionConfig";
import useIsDesktop from "../../shared/hooks/useIsDesktop";
import digiConnectCard from "./assets/digiconnect-card.webp";
import skillConnectCard from "./assets/skillconnect-card.webp";
import eduConnectCard from "./assets/educonnect-card.webp";

const platformImages = {
  "01": digiConnectCard,
  "02": skillConnectCard,
  "03": eduConnectCard,
};

const DashboardGridSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 gap-4 px-6 md:gap-6 md:px-8 lg:grid-cols-3">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.id}
          variants={fadeIn(
            "up",
            isDesktop ? HERO_TAIL_DELAY + index * STEP : 0,
          )}
          initial="hidden"
          {...(isDesktop
            ? { animate: "show" }
            : { whileInView: "show", viewport: { once: true } })}
        >
        <Link
          to={platform.href}
          className="group relative flex h-full w-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm transition-colors duration-300 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <BorderBeam duration={8} size={120} delay={index * 2} />

          <div className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-xl">
            <img
              src={platformImages[platform.id]}
              alt={platform.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/90 via-50% to-transparent" />

            <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-start">
              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600 shadow-sm">
                {platform.tagline}
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-4 top-60 z-0 h-28 rounded-full bg-white blur-2xl" />

          <div className="relative z-10 flex flex-1 flex-col gap-2 px-2 pb-1">
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              {platform.name}
            </span>
            <p className="text-sm leading-relaxed text-neutral-500">
              {platform.description}
            </p>
          </div>
        </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default DashboardGridSection;
