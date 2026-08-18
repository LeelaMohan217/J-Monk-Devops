import { MessageCircle, ShieldCheck, Scale } from "lucide-react";
import { commitments } from "./data";

const icons = {
  MessageCircle,
  ShieldCheck,
  Scale,
};

const CommitmentsSection = () => {
  return (
    <section id="how-we-work" className="bg-stone-50 py-16 md:py-24 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              How we work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            What you can expect working with us.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            We&apos;re early in our journey — these are the standards we hold
            ourselves to on every project, not a highlight reel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {commitments.map((commitment) => {
            const Icon = icons[commitment.icon];
            return (
              <div
                key={commitment.title}
                className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-7"
              >
                <Icon className="w-5 h-5 text-amber-500" />
                <span className="text-base font-semibold text-neutral-900">
                  {commitment.title}
                </span>
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
