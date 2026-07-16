import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeIn } from "../../shared/variants";
import { platforms } from "./data";
import SectionHeading from "./SectionHeading";

// Same offset-block-behind-card pattern used in CapabilitiesSection: an
// absolutely positioned colored layer sits behind a white bordered card,
// revealed as a shade strip when the card lifts on hover.
const cardStyles = [
  { back: "bg-red-600", dark: false },
  { back: "bg-neutral-900", dark: true },
  { back: "bg-red-700", dark: false },
];

const PlatformCard = ({ platform, style, index }) => (
  <motion.div
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="relative"
  >
    <div aria-hidden="true" className={`absolute inset-0 ${style.back}`} />
    <div className="relative z-10 bg-white border border-neutral-200 p-8 md:p-10 flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 z-20"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1.5 h-1.5 translate-x-1/2 translate-y-1/2 bg-neutral-900 z-20"
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`w-7 h-7 flex items-center justify-center text-white flex-shrink-0 ${
            style.dark ? "bg-neutral-900" : "bg-red-600"
          }`}
        >
          <platform.icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-sm font-mono text-neutral-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-900">
          {platform.name}
        </h3>
        <p className="text-red-600 text-sm italic font-medium">
          {platform.tagline}
        </p>
      </div>

      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
        {platform.description}
      </p>

      <ul className="flex flex-col gap-2">
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

      <Link
        to={platform.href}
        className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-red-600 transition-colors duration-300 mt-2 w-fit"
      >
        Visit {platform.name}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for long-term partnerships"
            description="A consistent set of principles carried across every platform we build."
            align="left"
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
              style={cardStyles[index % cardStyles.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
