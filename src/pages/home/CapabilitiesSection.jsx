import { motion } from "framer-motion";
import { Database, Server, MessageSquare } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { capabilities } from "./data";
import SectionHeading from "./SectionHeading";
import { DotPattern } from "../../components/ui/dot-pattern";

const IllustrationFrame = ({ children }) => (
  <div className="relative flex-1 rounded-xl border border-neutral-100 bg-neutral-50 overflow-hidden">
    <DotPattern
      width={18}
      height={18}
      cr={1}
      className="text-neutral-300 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)]"
    />
    <div className="relative z-10 h-full w-full">{children}</div>
  </div>
);

const PipelineIllustration = () => {
  const steps = [
    { label: "Build", status: "Passed" },
    { label: "Test", status: "Passed" },
    { label: "Deploy", status: "Running" },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="flex w-full max-w-[220px] flex-col">
        {steps.map((step, i) => (
          <div key={step.label} className="relative">
            {i !== 0 && <div className="ml-4 h-3 w-px bg-neutral-300" />}
            <div className="flex items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm">
              <span className="text-xs font-medium text-neutral-700">{step.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  step.status === "Passed"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {step.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PulseRingsIllustration = ({ Icon }) => (
  <div className="relative flex h-full w-full items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute rounded-full border border-neutral-300"
        style={{ width: 56 + i * 36, height: 56 + i * 36 }}
        animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
      />
    ))}
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-md">
      <Icon className="h-5 w-5" />
    </div>
  </div>
);

const AutomationListIllustration = () => {
  const items = ["Lint & type-check", "Run test suite", "Build container image", "Deploy to staging"];
  return (
    <div className="relative flex h-full w-full flex-col gap-2 px-5 py-5">
      {items.map((item) => (
        <div
          key={item}
          className="w-fit rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[11px] text-neutral-600 shadow-sm"
        >
          {item}
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-neutral-50 to-transparent" />
    </div>
  );
};

const ApiNodesIllustration = ({ Icon }) => {
  const satellites = [
    { Icon: Database, style: { left: 20, top: 16 } },
    { Icon: Server, style: { left: 20, top: 96 } },
    { Icon: MessageSquare, style: { right: 20, top: 56 } },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 140" fill="none">
        <path d="M110 70 L48 34" stroke="#e5e5e5" strokeWidth="1.5" />
        <path d="M110 70 L48 114" stroke="#e5e5e5" strokeWidth="1.5" />
        <path d="M110 70 L172 74" stroke="#e5e5e5" strokeWidth="1.5" />
      </svg>
      {satellites.map(({ Icon: SatIcon, style }, i) => (
        <div
          key={i}
          className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm"
          style={style}
        >
          <SatIcon className="h-4 w-4 text-neutral-500" />
        </div>
      ))}
      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
};

const RoadmapIllustration = ({ Icon }) => {
  const stages = ["Discover", "Design", "Deliver"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 px-6">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-3">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
              i === 0
                ? "bg-neutral-900 text-white"
                : "border border-neutral-300 text-neutral-400"
            }`}
          >
            {i === 0 ? <Icon className="h-3 w-3" /> : i + 1}
          </span>
          <span className={`text-xs font-medium ${i === 0 ? "text-neutral-900" : "text-neutral-400"}`}>
            {stage}
          </span>
          {i !== stages.length - 1 && <span className="h-px flex-1 bg-neutral-200" />}
        </div>
      ))}
    </div>
  );
};

const BentoCard = ({ capability, children, large, span }) => (
  <motion.div
    variants={fadeIn("up", 0.1)}
    className={`flex h-[414px] flex-col gap-5 rounded-2xl border border-neutral-200 bg-white ${
      large ? "p-7" : "p-6"
    } ${span || ""}`}
  >
    <div className="flex flex-col gap-1.5">
      <h3 className={`font-semibold text-neutral-900 ${large ? "text-lg" : "text-base"}`}>
        {capability.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{capability.description}</p>
    </div>
    <IllustrationFrame>{children}</IllustrationFrame>
  </motion.div>
);

const CapabilitiesSection = () => {
  const [saas, cloud, devops, api, consulting] = capabilities;

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 scroll-mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we build"
          description="The core services behind every engagement — from first prototype to long-term operational support."
        />

        <div className="flex flex-col gap-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-9 gap-2"
          >
            <BentoCard capability={saas} large span="lg:col-span-6">
              <PipelineIllustration />
            </BentoCard>
            <BentoCard capability={cloud} large span="lg:col-span-3">
              <PulseRingsIllustration Icon={cloud.icon} />
            </BentoCard>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            <BentoCard capability={devops}>
              <AutomationListIllustration />
            </BentoCard>
            <BentoCard capability={api}>
              <ApiNodesIllustration Icon={api.icon} />
            </BentoCard>
            <BentoCard capability={consulting}>
              <RoadmapIllustration Icon={consulting.icon} />
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
