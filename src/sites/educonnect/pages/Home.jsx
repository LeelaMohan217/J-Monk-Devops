import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/variants";
import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";
import WhyChooseSection from "./home/WhyChooseSection";

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

      <WhyChooseSection />

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
