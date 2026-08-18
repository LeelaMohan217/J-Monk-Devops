import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserCheck,
  GraduationCap,
  ClipboardCheck,
  Stamp,
  BookOpen,
  PlaneTakeoff,
  Check,
} from "lucide-react";
import { fadeIn, stagger, riseIn } from "../../../shared/variants";

const services = [
  {
    icon: UserCheck,
    title: "Career Counselling & Profile Evaluation",
    description:
      "Personalized counselling sessions to identify suitable countries, universities, and career pathways.",
  },
  {
    icon: GraduationCap,
    title: "University & Course Selection",
    description:
      "Expert assistance in selecting universities and courses aligned with your academic profile and goals.",
  },
  {
    icon: ClipboardCheck,
    title: "Application & Admission Support",
    description:
      "Help with application processes, document preparation, SOP guidance, and admission procedures.",
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    description:
      "Complete support for visa applications, documentation, and interview guidance.",
  },
  {
    icon: BookOpen,
    title: "IELTS / TOEFL / PTE Guidance",
    description:
      "Exam preparation guidance, study planning support, and strategic preparation resources.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure & Student Support",
    description:
      "Accommodation guidance, travel preparation, and international transition support.",
  },
];

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
      <div className="bg-linear-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-6xl mx-auto py-2 md:py-4 px-6 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center gap-4 md:gap-6 pt-24 pb-24 sm:pb-28"
          >
            <motion.span
              variants={fadeIn("up", 0.1)}
              className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold"
            >
              EduConnect
            </motion.span>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold md:font-semibold leading-tight"
            >
              Dream. Move.{" "}
              <span className="bg-linear-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                Become.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="max-w-2xl text-neutral-600 text-base md:text-lg"
            >
              We guide students through every stage of their international
              education journey — from career counselling and university
              selection to visa assistance and pre-departure support.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-wrap justify-center gap-4 mt-2"
            >
              <Link
                to="/educonnect/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 shadow-lg shadow-red-900/20 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="px-6 py-3 border border-neutral-300 text-neutral-800 hover:border-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section id="services" className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl mx-auto text-center flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              End-to-end support for your study abroad journey
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeIn("up", 0.1)}
                className="flex flex-col gap-3 p-7 bg-neutral-50 border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-linear-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
