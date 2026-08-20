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
import { fadeIn, stagger, riseIn } from "../../../shared/variants";
import { ACCENT_CLASS, HEADING_FULL_CLASS } from "../headingStyles";

// Copy rewritten away from the keyword strings this page used to carry. The
// first card said the projects "simulate real industry environments", which
// directly contradicted the services page's promise that the work is live client
// work and "not a sandbox exercise". It now says what actually happens.
//
// No description uses a dash as punctuation.
const offerings = [
  {
    icon: Rocket,
    title: "Real project work",
    description:
      "You are put on live client projects with a real deadline and someone waiting on the result, not an exercise built to be marked and thrown away.",
  },
  {
    icon: TrendingUp,
    title: "Skills in the stack we use",
    description:
      "Training covers what our engineers actually build client work in, so nothing you learn is a warm-up for the thing you will really be asked to do.",
  },
  {
    icon: Handshake,
    title: "Internships and freelance work",
    description:
      "Two ways in besides training. An internship placed on an active project, or freelance work you take on directly while we handle the client side.",
  },
  {
    icon: FileText,
    title: "Something to point at",
    description:
      "You finish with work you can show and talk through in an interview, which does more than a certificate saying you attended.",
  },
  {
    icon: Compass,
    title: "Mentorship from working engineers",
    description:
      "Reviews and guidance come from the people shipping client projects, not from a separate training department.",
  },
  {
    icon: Users,
    title: "People to build with",
    description:
      "You work alongside other learners and the engineers reviewing your code, which is closer to a real team than a classroom is.",
  },
];

const whyPoints = [
  "Live projects rather than practice exercises",
  "Taught in the stack our client work runs on",
  "Reviewed by engineers who ship, not trainers",
  "The freelancing track pays while you learn",
  "Work you can show, not just a certificate",
  "A team to build with, not a classroom",
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
              SkillConnect
            </motion.span>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold md:font-semibold leading-tight"
            >
              {/* Was a red gradient with bg-clip-text. Now the same red
                  Playfair italic accent every other heading on the site uses. */}
              Learn. Build. <span className={ACCENT_CLASS}>Grow.</span>
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
                to="/skillconnect/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 shadow-lg shadow-red-900/20 hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="#offerings"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-800 hover:border-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                What We Offer
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section id="offerings" className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-12">
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
              A practical path from learning to{" "}
              <span className={ACCENT_CLASS}>career-ready</span>
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
                <h3 className={`text-lg ${HEADING_FULL_CLASS}`}>
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
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-14 items-start">
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
              Built around real experience,{" "}
              <span className={ACCENT_CLASS}>not just theory</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              The point is to get you onto work somebody is depending on, with
              engineers reviewing it, early enough that you have something to
              show before you start applying.
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
            Who <span className={ACCENT_CLASS}>can join?</span>
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
