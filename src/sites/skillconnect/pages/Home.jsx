import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Handshake,
  FileText,
  Compass,
  Users,
  Check,
} from "lucide-react";
import { fadeIn, stagger } from "../../../shared/variants";

const offerings = [
  {
    icon: Rocket,
    title: "Real-World Project Experience",
    description:
      "Work on practical projects that simulate real industry environments and build hands-on experience.",
  },
  {
    icon: TrendingUp,
    title: "Skill-Based Learning Opportunities",
    description:
      "Develop industry-relevant skills through structured guidance and collaborative workflows.",
  },
  {
    icon: Handshake,
    title: "Internship & Collaboration Programs",
    description:
      "Take part in project collaborations, internships, and community initiatives.",
  },
  {
    icon: FileText,
    title: "Portfolio & Resume Building",
    description:
      "Create strong portfolios, project showcases, and professional profiles for better opportunities.",
  },
  {
    icon: Compass,
    title: "Mentorship & Career Guidance",
    description:
      "Learn from experienced professionals through mentorship, career roadmaps, and interview prep.",
  },
  {
    icon: Users,
    title: "Community & Networking",
    description:
      "Join a collaborative ecosystem of learners, developers, creators, and founders.",
  },
];

const whyPoints = [
  "Practical Learning Over Traditional Theory",
  "Industry-Oriented Skill Development",
  "Exposure to Real Work Environments",
  "Opportunities to Learn While Earning",
  "Career-Focused Learning Ecosystem",
  "Collaborative & Supportive Community",
];

const audience = [
  "Students",
  "Freshers",
  "Career Switchers",
  "Freelancers",
  "Tech Enthusiasts",
  "Creators",
];

const Home = () => {
  return (
    <>
      <div className="bg-linear-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-6xl mx-auto py-2 md:py-4 px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center gap-4 md:gap-6 py-24 sm:py-28"
          >
            <motion.span
              variants={fadeIn("up", 0.1)}
              className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold"
            >
              SkillConnect
            </motion.span>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold md:font-semibold leading-tight"
            >
              Learn. Build.{" "}
              <span className="bg-linear-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                Grow.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="max-w-2xl text-neutral-600 text-base md:text-lg"
            >
              A hands-on learning ecosystem where students, freshers, and
              career-switchers gain industry exposure, real-world experience,
              and career-building opportunities beyond traditional education.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-wrap justify-center gap-4 mt-2"
            >
              <Link
                to="/digiconnect/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 shadow-lg shadow-red-900/20 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#offerings"
                className="px-6 py-3 border border-neutral-300 text-neutral-800 hover:border-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                What We Offer
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section id="offerings" className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-8 flex flex-col gap-12">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl mx-auto text-center flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              A practical path from learning to career-ready
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offerings.map((offering) => (
              <motion.div
                key={offering.title}
                variants={fadeIn("up", 0.1)}
                className="flex flex-col gap-3 p-7 bg-neutral-50 border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-linear-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20">
                  <offering.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">
                  {offering.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              Why SkillConnect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Built around real experience, not just theory
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              We help learners move beyond theoretical education and gain
              practical exposure through live projects, teamwork, mentorship,
              and career-oriented learning experiences.
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
                variants={fadeIn("left", 0.1)}
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
          className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Who Can Join?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {audience.map((item) => (
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
