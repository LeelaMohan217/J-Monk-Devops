import { cn } from "@/lib/utils"
import { memo } from "react"

export const AuroraText = memo(function AuroraText({
  children,
  className,
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 1,
  ...props
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    backgroundSize: "200% 200%",
    animationDuration: `${10 / speed}s`,
  }

  return (
    <span className={cn("relative inline-block", className)} {...props}>
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
