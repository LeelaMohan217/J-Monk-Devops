import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import ImageVisual from "./components/ImageVisual";
import { homeImages } from "./images";
import SectionHeading from "./SectionHeading";

const IntroSection = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-white py-10 md:py-14 scroll-mt-36"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building the ecosystem behind digital growth"
          align="split"
        />

        <div className="grid items-center gap-8 lg:grid-cols-[2fr_3fr]">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right", 0.1)}
            className="order-1"
          >
            <ImageVisual
              src={homeImages.introGrowth}
              alt="Professionals collaborating to represent digital growth"
              aspect="aspect-square"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="order-2 flex flex-col gap-4"
          >
            <motion.p
              variants={fadeIn("up", 0.1)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              We&apos;re building toward a future-ready ecosystem where
              technology, practical skills, and global opportunities empower
              individuals and businesses to grow without limitations.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              From DigiConnect&apos;s software and cloud expertise to
              SkillConnect&apos;s hands-on learning and EduConnect&apos;s global
              guidance, every platform is held to the same standard — thoughtful
              execution, transparent communication, and outcomes that actually
              move the needle.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.4)}
              className="text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              We stay rooted in the communities we build for — working closely
              with the businesses, learners, and institutions on the other side
              of every platform, rather than designing in isolation and hoping
              it fits.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
