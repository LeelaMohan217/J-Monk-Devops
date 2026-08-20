import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Users } from "lucide-react";
import { riseIn } from "../../shared/variants";
import whoWeAreImage from "./assets/who-we-are.webp";
import { STEP, centerTrigger, groupContainer } from "./motionConfig";


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
      {/* Eyebrow then heading, on one shared trigger. They previously had
          separate triggers with different amounts (0.6 and 0.5), so the 0.08
          offset between them was never a real sequence: each started its own
          delay from its own trigger moment. Compact enough to share one. */}
      <motion.div
        variants={groupContainer}
        {...centerTrigger}
        className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:px-8"
      >
        <motion.div
          variants={riseIn(0)}
          className="inline-flex items-center gap-2 text-neutral-600"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Who we are
          </span>
        </motion.div>

        <motion.h2
          variants={riseIn(STEP)}
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900"
        >
          <span className="font-['Playfair_Display',serif] text-red-600 italic">
            One ecosystem
          </span>{" "}
          built to power
          local businesses, sharpen student skills, and fuel infinite digital
          growth across Bharath.
        </motion.h2>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-10 px-6 md:mt-14 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          variants={riseIn()}
          {...centerTrigger}
          className="h-full rounded-2xl border border-neutral-200 bg-surface p-2 shadow-sm"
        >
          <img
            src={whoWeAreImage}
            alt="The JMonkDevOps team collaborating"
            className="h-full w-full rounded-xl object-cover ring-1 ring-inset ring-black/10"
          />
        </motion.div>

        {/* This column is ~600 to 880px tall, taller than the space it gets on
            screen, so it deliberately does NOT share one in-view trigger. A
            single trigger on the whole column fires when its top enters view,
            which animates the rows and the button while they are still below the
            fold; they finish unseen and are static by the time you reach them.

            Instead there are three independently triggered groups: the paragraph
            pair, the principle rows, and the button. Each group's members sit
            adjacent to each other, so each group's stagger is actually visible
            when that group comes into view. Delays restart at 0 per group,
            because a group's delays are relative to its own trigger. */}
        <div className="flex h-full flex-col justify-between gap-8">
          <motion.div
            variants={groupContainer}
            {...centerTrigger}
            className="flex flex-col gap-4"
          >
            <motion.p
              variants={riseIn(0)}
              className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base"
            >
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </motion.p>

            <motion.p
              variants={riseIn(STEP)}
              className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base"
            >
              We work across all three because they&apos;re really the same
              problem. A business that needs building. A person who needs the
              skills to build it. A student who needs a door opened.
              Splitting them into three companies would have meant three
              different standards, and we&apos;d rather hold one.
            </motion.p>
          </motion.div>

          {/* The three rows are one group on their own trigger, so they ripple
              when the list comes into view rather than when the column's top
              does. Delays start at 0 because they are relative to this group. */}
          <motion.dl
            variants={groupContainer}
            {...centerTrigger}
            className="flex flex-col border-t border-neutral-200"
          >
            {operatingPrinciples.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={riseIn(index * STEP)}
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
          </motion.dl>

          {/* Its own trigger, since it sits below the rows and would otherwise
              animate off-screen while they were still being read. */}
          <motion.div
            variants={riseIn(0)}
            {...centerTrigger}
            className="w-fit"
          >
            {/* Solid red fill matching GlobalNav's CTA: same rounded-lg,
                px-5 py-2.5, text-sm font-medium, and red-600 to red-700 on
                hover. Was an outlined neutral button. */}
            <Link
              to="/#stats"
              className="group inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700"
            >
              See our numbers
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
