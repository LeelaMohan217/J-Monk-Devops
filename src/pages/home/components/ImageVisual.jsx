import { motion } from "framer-motion";

/**
 * Reusable "premium visual" card: an image with a gradient overlay and
 * optional floating glass badges layered on top. Used across the hero,
 * intro, and platform sections for a consistent enterprise look.
 */
const ImageVisual = ({
  src,
  alt,
  badges = [],
  aspect = "aspect-4/3",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative ${aspect} overflow-hidden border border-neutral-200 shadow-sm group`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent" />
      </div>

      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          className={`absolute ${badge.position}`}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="rounded-xl bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-lg px-4 py-3 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <badge.icon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-neutral-900 leading-tight">
                {badge.label}
              </p>
              {badge.sublabel && (
                <p className="text-[11px] text-neutral-500 leading-tight">
                  {badge.sublabel}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageVisual;
