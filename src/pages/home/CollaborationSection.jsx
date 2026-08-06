const companies = [
  "Nexora",
  "Bluepeak",
  "Vantix",
  "Corewave",
  "Skyline Labs",
  "Northbridge",
  "Anchorpoint",
  "Fieldstone",
];

const CollaborationSection = () => {
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="border-y border-white/10 bg-black py-10 md:py-14">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300">
          <span className="font-raleway text-xs font-light uppercase tracking-[0.2em]">
            Collaboration
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="shrink-0 whitespace-nowrap text-xl font-semibold text-white/40 md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
