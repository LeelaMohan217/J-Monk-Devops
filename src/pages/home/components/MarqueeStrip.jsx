/**
 * Infinite horizontal scrolling strip of short text pills.
 */
const MarqueeStrip = ({ items }) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex-shrink-0 text-sm font-medium text-neutral-300 border border-white/10 rounded-full px-5 py-2 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
