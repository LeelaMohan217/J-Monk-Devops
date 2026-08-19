import { useId } from "react";

// Shared bento tile used by every card grid on EduConnect (home Services/
// WhyChoose, about Values, services Process/ServicesList) so the "add real
// depth, not flat tiles" treatment is one system, not five copies. A card
// carries three layers: the icon badge + numeral (content), a low-opacity
// oversized duplicate of the same icon as a tonal watermark (depth, without
// needing new imagery we don't have), and — rationed to the one inverted
// "closer" tile per grid only — a masked grid texture and the site's
// notched-corner signature shape. Applying texture/notch to every card would
// turn the signature into a template stamp instead of an accent.
const BentoCard = ({
  as: Component = "li",
  icon: Icon,
  index,
  title,
  titleAs: TitleTag = "h3",
  description,
  inverted = false,
  notched = false,
  centered = false,
  className = "",
}) => {
  const uid = useId();

  return (
    <Component
      className={`group relative overflow-hidden rounded-2xl p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        inverted
          ? "bg-neutral-900"
          : "border border-neutral-200 bg-gradient-to-br from-red-50/60 via-surface to-surface hover:border-red-200/70"
      } ${
        notched
          ? "[clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)]"
          : ""
      } ${centered ? "flex min-h-[280px] flex-col items-center justify-center text-center gap-4" : ""} ${className}`}
    >
      {/* Masked grid texture, inverted closer tile only. */}
      {inverted && (
        <div
          className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]"
          aria-hidden="true"
        >
          <svg className="absolute inset-0 h-full w-full opacity-[0.06]" focusable="false">
            <defs>
              <pattern
                id={`bento-grid-${uid}`}
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#bento-grid-${uid})`} />
          </svg>
        </div>
      )}

      {/* Ghost watermark: the same icon again, oversized and near-invisible —
          layered depth without a second asset. */}
      {Icon && (
        <Icon
          className={`pointer-events-none absolute -top-4 -right-4 h-28 w-28 ${
            inverted ? "text-white opacity-[0.08]" : "text-neutral-900 opacity-[0.05]"
          }`}
          strokeWidth={1}
          aria-hidden="true"
        />
      )}

      <div className={`relative z-10 ${centered ? "flex flex-col items-center gap-4" : ""}`}>
        {centered ? (
          <>
            {typeof index === "number" && (
              <span
                className={`absolute -top-2 -left-2 font-['IBM_Plex_Mono',monospace] text-xs font-medium tabular-nums ${
                  inverted ? "text-white/40" : "text-neutral-400"
                }`}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {Icon && (
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-[background-color,transform] duration-300 group-hover:scale-105 ${
                  inverted
                    ? "bg-white/10 ring-1 ring-white/15"
                    : "bg-gradient-to-br from-red-50 to-red-100/40 ring-1 ring-red-100/80 group-hover:bg-red-100"
                }`}
              >
                <Icon
                  className={inverted ? "h-5 w-5 text-white" : "h-5 w-5 text-red-600"}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            )}
          </>
        ) : (
          <div className="flex items-center justify-between">
            {Icon && (
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-[background-color,transform] duration-300 group-hover:scale-105 ${
                  inverted
                    ? "bg-white/10 ring-1 ring-white/15"
                    : "bg-gradient-to-br from-red-50 to-red-100/40 ring-1 ring-red-100/80 group-hover:bg-red-100"
                }`}
              >
                <Icon
                  className={inverted ? "h-5 w-5 text-white" : "h-5 w-5 text-red-600"}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            )}
            {typeof index === "number" && (
              <span
                className={`font-['IBM_Plex_Mono',monospace] text-xs font-medium tabular-nums ${
                  inverted ? "text-white/50" : "text-neutral-400"
                }`}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
        )}

        <TitleTag
          className={`${centered ? "" : "mt-4"} text-base font-medium tracking-tight md:text-lg ${
            inverted ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </TitleTag>
        <p
          className={`${centered ? "" : "mt-2"} text-sm leading-relaxed ${
            inverted ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      </div>
    </Component>
  );
};

export default BentoCard;
