import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { STEP, centerTrigger, groupContainer } from "../../../../shared/motionConfig";
import { story } from "./data";
import { ACCENT_CLASS } from "../../headingStyles";
import GlazeSweep from "../../../../shared/components/GlazeSweep";

const StorySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={groupContainer}
          {...centerTrigger}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            variants={fadeIn("up", 0)}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[3/2] w-full overflow-hidden rounded-sm">
              <img
                src={story.image}
                alt=""
                width="3000"
                height="2000"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={groupContainer} className="order-1 lg:order-2">
            <motion.span
              variants={fadeIn("up", 1 * STEP)}
              className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {story.eyebrow}
            </motion.span>

            <motion.h2
              variants={fadeIn("up", 2 * STEP)}
              className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-800 sm:text-4xl md:text-5xl"
            >
              {story.headingLead}
              <span className={ACCENT_CLASS}>{story.headingAccent}</span>
            </motion.h2>

            {story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                variants={fadeIn("up", (3 + index) * STEP)}
                className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={fadeIn("up", (3 + story.paragraphs.length) * STEP)}
              className="mt-8 hidden lg:block"
            >
              <Link
                to="/digiconnect/services"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <GlazeSweep className="bg-white/30" />
                Explore Services
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          {...centerTrigger}
          className="mt-8 lg:hidden"
        >
          <Link
            to="/digiconnect/services"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <GlazeSweep className="bg-white/30" />
            Explore Services
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

export default StorySection;
