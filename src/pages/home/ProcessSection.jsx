import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { processSteps } from "./data";
import SectionHeading from "./SectionHeading";

const DiscoverIllustration = () => {
  const notes = ["Goals & constraints mapped", "Stakeholders aligned", "Success metrics defined"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 px-5">
      {notes.map((note, i) => (
        <div
          key={note}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm"
          style={{ marginLeft: i * 10 }}
        >
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-900">
            <Check className="h-2.5 w-2.5 text-white" />
          </span>
          <span className="text-[11px] text-neutral-600">{note}</span>
        </div>
      ))}
    </div>
  );
};

const DesignIllustration = () => {
  const items = [
    { label: "Wireframes", on: true },
    { label: "Tech Stack", on: true },
    { label: "Style Guide", on: false },
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 px-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm"
        >
          <span className="text-[11px] font-medium text-neutral-700">{item.label}</span>
          <span
            className={`relative h-4 w-7 shrink-0 rounded-full transition-colors ${
              item.on ? "bg-neutral-900" : "bg-neutral-200"
            }`}
          >
            <span
              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-transform ${
                item.on ? "translate-x-3.5" : "translate-x-0.5"
              }`}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

const BuildIllustration = () => {
  const steps = [
    { label: "Build", status: "Passed" },
    { label: "Test", status: "Passed" },
    { label: "Deploy", status: "Running" },
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 px-5">
      {steps.map((step) => (
        <div
          key={step.label}
          className="flex items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm"
        >
          <span className="text-[11px] font-medium text-neutral-700">{step.label}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
              step.status === "Passed" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-500"
            }`}
          >
            {step.status}
          </span>
        </div>
      ))}
    </div>
  );
};

const SupportIllustration = () => {
  const events = ["Deployed hotfix v2.3", "Uptime steady at 99.9%", "Scaled instances +2"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 px-5">
      {events.map((event) => (
        <div
          key={event}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
          <span className="text-[11px] text-neutral-600">{event}</span>
        </div>
      ))}
    </div>
  );
};

const illustrations = [DiscoverIllustration, DesignIllustration, BuildIllustration, SupportIllustration];

const ProcessSection = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="How We Work"
          title="A straightforward process"
          description="No unnecessary ceremony — just a clear path from first conversation to long-term support."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => {
            const Illustration = illustrations[i];
            return (
              <motion.div
                key={step.title}
                variants={fadeIn("up", 0.1)}
                className={`flex flex-col items-center gap-4 p-8 text-center border-neutral-200 ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i !== 0 ? "lg:border-l" : ""}`}
              >
                <div className="h-40 w-full rounded-2xl bg-white/60">
                  <Illustration />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
