import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { platforms } from "./data";
import SectionHeading from "./SectionHeading";

const panelTints = ["bg-neutral-50", "bg-neutral-100", "bg-neutral-50"];

const RailSegment = ({ scrollYProgress, from, to }) => {
  const scaleY = useTransform(scrollYProgress, [from, to], [0, 1], { clamp: true });
  return (
    <div className="relative w-px h-24 bg-neutral-200 my-1 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-full bg-neutral-900 origin-top"
        style={{ scaleY }}
      />
    </div>
  );
};

const ProgressRail = ({ trackRef }) => {
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(platforms.length - 1, Math.floor(v * platforms.length)));
  });

  return (
    <div className="hidden lg:block">
      <div className="sticky -translate-y-1/2 flex flex-col items-center" style={{ top: "50vh" }}>
        {platforms.map((platform, index) => (
          <div key={platform.id} className="flex flex-col items-center">
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-full border text-sm font-semibold shrink-0 transition-colors duration-300 ${
                index <= activeIndex
                  ? "bg-neutral-900 border-neutral-900 text-white"
                  : "bg-white border-neutral-300 text-neutral-400"
              }`}
            >
              {platform.id}
            </span>
            {index !== platforms.length - 1 && (
              <RailSegment
                scrollYProgress={scrollYProgress}
                from={index / platforms.length}
                to={(index + 1) / platforms.length}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformPanel = ({ platform, index, isLast, tint }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div
      ref={ref}
      className={`sticky ${isLast ? "" : "pb-16 md:pb-24"}`}
      style={{ top: 112 }}
    >
      <motion.div
        style={isLast ? undefined : { scale, opacity }}
        className={`rounded-3xl ${tint} p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16`}
      >
        <div className="flex-1 flex flex-col gap-4 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-lg font-cursive font-semibold text-neutral-900">
            <platform.icon className="w-4 h-4" />
            Platform {platform.id}
          </span>

          <div className="flex items-center gap-3">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
              {platform.name}
            </h3>
            {!platform.available && (
              <span className="rounded-full text-[10px] uppercase tracking-wide font-semibold text-neutral-500 border border-neutral-300 px-3 py-1">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-neutral-500 text-sm font-medium">{platform.tagline}</p>

          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-md">
            {platform.description}
          </p>

          <ul className="flex flex-col gap-2 mt-1">
            {platform.offerings.map((offering) => (
              <li key={offering} className="flex items-start gap-2 text-sm text-neutral-600">
                <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                {offering}
              </li>
            ))}
          </ul>

          <div className="mt-3">
            {platform.available ? (
              <Link
                to={platform.href}
                className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 w-fit"
              >
                Visit {platform.name}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <span className="text-neutral-400 font-medium">Launching soon</span>
            )}
          </div>
        </div>

        <div className="flex-1 w-full order-1 md:order-2">
          <div className="rounded-2xl bg-white/70 border border-white/80 aspect-[4/3] flex items-center justify-center">
            <platform.icon className="w-16 h-16 text-neutral-300" strokeWidth={1.25} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PlatformsSection = () => {
  const trackRef = useRef(null);

  return (
    <section id="platforms" className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Platforms"
          title="Three platforms. One ecosystem."
          description="Each platform has its own identity and focus, built on the same commitment to quality and long-term partnership."
        />

        <div ref={trackRef} className="grid lg:grid-cols-[56px_1fr] gap-10">
          <ProgressRail trackRef={trackRef} />

          <div className="flex flex-col">
            {platforms.map((platform, index) => (
              <PlatformPanel
                key={platform.name}
                platform={platform}
                index={index}
                isLast={index === platforms.length - 1}
                tint={panelTints[index % panelTints.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
