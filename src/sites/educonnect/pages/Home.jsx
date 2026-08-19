import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeIn, stagger, riseIn } from "../../../shared/variants";
import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";

const whyPoints = [
  "Personalized Student Guidance",
  "End-to-End Admission Assistance",
  "Transparent & Student-Centric Approach",
  "Experienced Mentorship & Support",
  "Simplified Overseas Education Process",
  "Continuous Student Assistance",
];

const destinations = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Europe",
  "Ireland",
  "New Zealand",
  "Other Global Destinations",
];

const Home = () => {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <section className="bg-neutral-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              Why Choose EduConnect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Transparent guidance, every step of the way
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Our approach focuses on simplifying the study abroad process
              while helping students identify the right opportunities based
              on their goals, interests, and academic background.
            </p>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {whyPoints.map((point) => (
              <motion.li
                key={point}
                variants={riseIn(0.1)}
                className="flex items-start gap-3 bg-white border border-neutral-200 p-4"
              >
                <Check className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                <span className="text-sm text-neutral-700">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Study Destinations We Support
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((item) => (
              <span
                key={item}
                className="text-sm font-medium text-neutral-700 border border-neutral-200 px-5 py-2 hover:border-red-300 hover:text-red-700 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
