import { useRef } from "react";
import { Check } from "lucide-react";
import { platforms } from "./data";
import SectionHeading from "./SectionHeading";

const TILT_MAX_DEG = 8;

const TiltCard = ({ platform }) => {
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    const tilt = tiltRef.current;
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transition = "transform 100ms ease-out";
    tilt.style.transform = `perspective(800px) rotateX(${(-py * TILT_MAX_DEG).toFixed(2)}deg) rotateY(${(px * TILT_MAX_DEG).toFixed(2)}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const tilt = tiltRef.current;
    if (!tilt) return;
    tilt.style.transition = "transform 400ms ease-out";
    tilt.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      {/* Tilt layer: only ever receives inline `transform`/`transition` from JS above,
          kept separate from the border/shadow layer below so the JS never clobbers
          their Tailwind-driven transitions (setting `style.transition` is a shorthand
          that replaces the whole transition list, not just the `transform` entry). */}
      <div ref={tiltRef} className="h-full [will-change:transform]">
        {/* Border/shadow live on this outer layer, separate from the overflow-hidden
            layer below — overflow-hidden clips an element's OWN box-shadow too, not
            just its children, so the shadow needs its own unclipped box. */}
        <div className="relative h-full bg-white border border-neutral-200 hover:shadow-2xl hover:shadow-black/10 hover:transition-shadow hover:duration-300 hover:ease-out">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 z-20"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-1.5 h-1.5 translate-x-1/2 translate-y-1/2 bg-neutral-900 z-20"
          />
          <div className="relative flex flex-col gap-5 p-10 h-full overflow-hidden">
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg shadow-red-900/20">
              <platform.icon className="w-7 h-7" />
            </div>
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="font-display font-bold text-2xl text-neutral-900">
                {platform.name}
              </h3>
              <p className="text-red-600 text-sm italic font-medium">
                {platform.tagline}
              </p>
            </div>
            <p className="relative z-10 text-base text-neutral-600 leading-relaxed">
              {platform.description}
            </p>
            <ul className="relative z-10 flex flex-col gap-2 mt-1">
              {platform.offerings.map((offering) => (
                <li
                  key={offering}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  {offering}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for long-term partnerships"
          description="A consistent set of principles carried across every platform we build."
        />

        <div className="relative">
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pb-20"
            style={{ perspective: "1200px" }}
          >
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={index !== 1 ? "lg:translate-y-20" : ""}
              >
                <TiltCard platform={platform} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
