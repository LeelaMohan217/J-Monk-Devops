import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import { fadeIn, stagger, riseIn } from "../../../shared/variants";

const values = [
  {
    icon: Target,
    title: "Student-First Guidance",
    description:
      "Every recommendation starts with your goals, budget, and academic profile — not a preferred university list.",
  },
  {
    icon: Heart,
    title: "Honest Advice",
    description:
      "We tell you when a course or country isn't the right fit, even if that means a harder conversation.",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description:
      "From shortlisting to landing abroad, the same team stays with you through every stage of the process.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Years of helping students navigate applications, visas, and the move to a new country with confidence.",
  },
];

const About = () => {
  return (
    <>
      <section className="border-b border-neutral-200 bg-stone-50 pt-32 pb-14 md:pt-40 md:pb-20">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl px-6 md:px-8"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            About EduConnect
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight leading-[1.1] text-neutral-900 md:text-6xl">
            Guiding students from decision to departure.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            EduConnect helps students navigate every stage of studying
            abroad — university selection, applications, visas, and the
            practical details of moving to a new country.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-8 lg:grid-cols-2 items-start">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Built around what students actually need
            </h2>
          </motion.div>
          <motion.div
            variants={riseIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 text-neutral-600 text-base leading-relaxed"
          >
            <p>
              We started EduConnect because too many students were making
              five- and six-figure decisions about their education based on
              rankings lists and rumours, without anyone walking them
              through the tradeoffs.
            </p>
            <p>
              Our counsellors work with students one-on-one — evaluating
              academic profiles, shortlisting universities and courses that
              genuinely fit, and staying involved through applications,
              visas, and pre-departure preparation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl mx-auto text-center flex flex-col gap-4"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs md:text-sm font-semibold">
              What We Value
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              The principles behind every recommendation
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={riseIn(0.1)}
                className="flex flex-col gap-3 p-7 bg-white border border-neutral-200"
              >
                <div className="w-11 h-11 bg-linear-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-900/20">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
