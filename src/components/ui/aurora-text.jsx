import { memo } from "react"

export const AuroraText = memo(function AuroraText({
  children,
  className,
  colors = ["#dc2626", "#f97316", "#b91c1c", "#dc2626"],
  speed = 1,
  ...props
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")})`,
    backgroundSize: "300% 300%",
    animationDuration: `${10 / speed}s`,
  }

  return (
    <span className={`relative inline-block ${className ?? ""}`} {...props}>
      <span className="sr-only">{children}</span>
      <span
        className="bg-clip-text text-transparent animate-aurora"
        style={gradientStyle}
        aria-hidden="true">
        {children}
      </span>
    </span>
  );
});
