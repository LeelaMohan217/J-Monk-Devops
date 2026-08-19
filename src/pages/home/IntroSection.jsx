import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Users } from "lucide-react";
import { riseIn } from "../../shared/variants";
import whoWeAreImage from "./assets/who-we-are.jpeg";

// Concretizes the "one team, one standard" philosophy already stated in the
// paragraphs below, rather than introducing new claims. A scannable
// structural device for something the prose already says.
const operatingPrinciples = [
  {
    icon: Users,
    title: "One team",
    detail: "The people who scope your project are the ones who build it. No handoff to a different bench.",
  },
  {
    icon: ShieldCheck,
    title: "One standard",
    detail:
      "We hold business software, student mentorship, and study-abroad guidance to the same bar. Not a lighter one for any of them.",
  },
  {
    icon: MapPin,
    title: "Rooted in Bharath",
    detail: "Based in Andhra Pradesh, building platforms meant to hold up anywhere.",
  },
];

const IntroSection = () => {
  return (
    <section id="who-we-are" className="bg-white py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="inline-flex items-center gap-2 text-neutral-600"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Who we are
          </span>
        </motion.div>

        <motion.h2
          variants={riseIn(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900"
        >
          <span className="text-red-600">One ecosystem</span> built to power
          local businesses, sharpen student skills, and fuel infinite digital
          growth across Bharath.
        </motion.h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-10 px-6 md:mt-14 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="h-full rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm"
        >
          <img
            src={whoWeAreImage}
            alt="The JMonkDevOps team collaborating"
            className="h-full w-full rounded-xl object-cover ring-1 ring-inset ring-black/10"
          />
        </motion.div>

        <motion.div
          variants={riseIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex h-full flex-col justify-between gap-8"
        >
          <div className="flex flex-col gap-4">
            <p className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </p>

            <p className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              We work across all three because they&apos;re really the same
              problem. A business that needs building. A person who needs the
              skills to build it. A student who needs a door opened.
              Splitting them into three companies would have meant three
              different standards, and we&apos;d rather hold one.
            </p>
          </div>

          <dl className="flex flex-col border-t border-neutral-200">
            {operatingPrinciples.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={riseIn(0.15 + index * 0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex items-start gap-4 border-b border-neutral-200 py-5 text-left"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-red-600">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {item.detail}
                    </dd>
                  </div>
                </motion.div>
              );
            })}
          </dl>

          <Link
            to="/#stats"
            className="group inline-flex w-fit items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-red-600 hover:text-red-700"
          >
            See our numbers
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
