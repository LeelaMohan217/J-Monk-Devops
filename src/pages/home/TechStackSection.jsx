import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const stack = [
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
  "Tailwind CSS",
  "Kubernetes",
];

const TechStackSection = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        tweenRef.current = gsap.to(track, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });

        return () => {
          tweenRef.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: trackRef },
  );

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.play();

  return (
    <section className="w-full mb-10 bg-stone-50 py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl justify-center mb-8 px-6 md:px-8">
        <div className="inline-flex items-center gap-2 text-neutral-600">
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Technologies we work with
          </span>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-x-16 md:gap-x-24"
        >
          {[...stack, ...stack].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 whitespace-nowrap text-3xl font-semibold tracking-tight text-neutral-400 transition-colors duration-200 hover:text-neutral-900 md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
