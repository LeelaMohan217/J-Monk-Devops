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
  return (
    <section className="max-w-7xl mx-auto mb-16 md:mb-24 rounded-2xl border border-neutral-200 px-6 py-10 md:px-10 md:py-14">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-600">
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Collaboration
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {companies.map((name) => (
          <span
            key={name}
            className="shrink-0 whitespace-nowrap rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-500 md:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CollaborationSection;
