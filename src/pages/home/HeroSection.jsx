import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { DotPattern } from "../../components/ui/dot-pattern";
import { DiaTextReveal } from "../../components/ui/dia-text-reveal";
import { BorderBeam } from "../../components/ui/border-beam";

const items = [
  "Custom Software & SaaS Development",
  "Cloud Infrastructure",
  "DevOps & CI/CD Pipelines",
  "API Development & Integration",
  "Technical Consulting",
  "Real-World Project Experience",
  "Internship Programs",
  "Mentorship & Career Guidance",
  "University Selection",
  "Visa & Application Assistance",
  "Pre-Departure Support",
  "Startup to Enterprise Ready",
  "Long-Term Partnership",
  "Agile Delivery",
  "Automation-Driven Engineering",
  "Secure & Scalable Systems",
];

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <DotPattern
        width={24}
        height={24}
        cr={1}
        className="[mask-image:radial-gradient(560px_circle_at_center,white,transparent)]"
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-10 md:pb-14 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5"
        >
          <motion.span
            variants={fadeIn("up", 0.1)}
            className="relative inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[12px] font-medium text-neutral-700"
          >
            One Ecosystem. Three Platforms.
            <BorderBeam
              size={40}
              duration={6}
              colorFrom="#dc2626"
              colorTo="#171717"
            />
          </motion.span>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black leading-[1.1]"
          >
            JMonkDevOps
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <DiaTextReveal
              text="Digitalizing Local Bharath"
              colors={["#dc2626", "#991b1b", "#171717"]}
              textColor="#171717"
              duration={1.4}
              delay={0.6}
            />
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="max-w-3xl text-black/60 text-sm md:text-base leading-relaxed"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills through real world learning, and support
            aspiring individuals in reaching global opportunities. Every
            platform has its own identity, but all are built with the same
            commitment to quality.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex flex-wrap justify-center gap-4 mt-1"
          >
            <a
              href="#platforms"
              className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-neutral-800 hover:shadow-md hover:-translate-y-0.5"
            >
              Explore Platforms
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#who-we-are"
              className="rounded-lg bg-white border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 hover:-translate-y-0.5"
            >
              Know More About Us
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            className="w-full mt-8 md:mt-12 rounded-3xl bg-neutral-50 px-4 py-12 md:px-10 md:py-16 flex flex-col items-center gap-10"
          >
            <div className="flex flex-col items-center gap-3 text-center max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                Everything under one ecosystem
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                From custom software to global education guidance — three
                connected platforms, one consistent standard of quality.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white border border-neutral-200 px-5 py-3 text-sm text-neutral-700 whitespace-nowrap transition-colors duration-300 hover:border-red-200 hover:text-red-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
