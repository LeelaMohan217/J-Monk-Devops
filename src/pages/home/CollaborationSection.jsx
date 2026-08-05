import SectionHeading from "./SectionHeading";

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
    <section className="border-y border-neutral-100 bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-8">
        <SectionHeading
          eyebrow="Collaborations"
          title="Companies we've worked with"
          description="A growing network of businesses and institutions we've partnered with."
        />
      </div>

      <div className="relative mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="shrink-0 whitespace-nowrap text-xl font-semibold text-neutral-300 md:text-2xl"
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
