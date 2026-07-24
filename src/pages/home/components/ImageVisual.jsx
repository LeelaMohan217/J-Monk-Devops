import { motion } from "framer-motion";

/**
 * Reusable "premium visual" card: an image with a gradient overlay and
 * optional floating glass badges layered on top. Used across the hero,
 * intro, and platform sections for a consistent enterprise look.
 */
const ImageVisual = ({
  src,
  alt,
  icon: Icon,
  badges = [],
  aspect = "aspect-4/3",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative ${aspect} overflow-hidden shadow-2xl shadow-neutral-900/20 group`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {Icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              className="w-24 h-24 md:w-32 md:h-32 text-white/10"
              strokeWidth={1}
            />
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />

        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/30" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/30" />

        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
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
            className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl px-4 py-3 flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-red-600 text-white flex items-center justify-center shrink-0">
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
