import { visionMission } from "./data";

const VisionMissionSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Vision &amp; Mission
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            What we&apos;re building, and why.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-7 md:p-8">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Vision
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-neutral-900">
              {visionMission.vision}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-7 md:p-8">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Mission
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-neutral-900">
              {visionMission.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
