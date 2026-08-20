import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { riseIn } from "../../../../shared/variants";
import { aboutIntro } from "./data";
import introImg from "../../assets/blog/best-management-usa.jpg";

// "Who We Are" intro: photo left, copy + CTA right, a stat card floating
// over the photo's bottom-right corner. Reuses a blog post photo (people
// together in a professional setting) since the project has no dedicated
// "students collaborating" photography yet.
const AboutIntroSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24 border-t">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-6">
          <motion.div
            variants={riseIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative lg:col-span-5"
          >
            <div className="aspect-5/5 overflow-hidden rounded-xl border border-neutral-200">
              <img
                src={introImg}
                alt="EduConnect counsellors working with students"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            variants={riseIn(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col items-start"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {aboutIntro.eyebrow}
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
              {aboutIntro.headingLead}
              <span className="font-['Playfair_Display',serif] text-red-600 italic">
                {aboutIntro.headingAccent}
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
              {aboutIntro.paragraph}
            </p>

            <Link
              to={aboutIntro.cta.href}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              {aboutIntro.cta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
