import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const IntroSection = () => {
  const sectionRef = useRef(null);
  const headingSlideRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphSlideRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      const headingSplit = SplitText.create(headingRef.current, {
        type: "words",
        mask: "words",
      });

      gsap.from(headingSplit.words, {
        yPercent: 110,
        stagger: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: headingSlideRef.current,
          start: "top top",
          end: "+=" + headingSplit.words.length * 70,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      const paragraphSplit = SplitText.create(paragraphRef.current, {
        type: "chars",
      });

      const skewTo = gsap.quickTo(paragraphSplit.chars, "skewX", {
        duration: 0.4,
        ease: "power3",
      });

      gsap.to(paragraphRef.current, {
        x: () =>
          -(paragraphRef.current.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: paragraphSlideRef.current,
          start: "top top",
          end: () =>
            "+=" +
            (paragraphRef.current.scrollWidth - window.innerWidth + 100) *
              1.4,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const velocity = gsap.utils.clamp(-20, 20, self.getVelocity() / -300);
            skewTo(velocity);
          },
          onLeave: () => skewTo(0),
          onLeaveBack: () => skewTo(0),
        },
      });

      return () => {
        headingSplit.revert();
        paragraphSplit.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section id="who-we-are" ref={sectionRef} className="bg-white scroll-mt-36">
      <div
        ref={headingSlideRef}
        className="flex min-h-screen items-center px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h1 ref={headingRef} className="text-left text-9xl font-semibold">
            WHO WE ARE?
          </h1>
        </div>
      </div>

      <div
        ref={paragraphSlideRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <h1
          ref={paragraphRef}
          className="whitespace-nowrap pl-6 text-6xl font-semibold text-neutral-900 will-change-transform md:pl-8 md:text-8xl"
        >
          One ecosystem built to power local businesses, sharpen student
          skills, and fuel infinite digital growth across Bharath.
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
