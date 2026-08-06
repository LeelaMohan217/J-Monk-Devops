import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import ImageVisual from "./components/ImageVisual";
import { homeImages } from "./images";

const IntroSection = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-black py-20 md:py-28 scroll-mt-36"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right", 0.1)}
            className="order-1 max-w-md mx-auto lg:mx-0"
          >
            <ImageVisual
              src={homeImages.introGrowth}
              alt="Professionals collaborating to represent digital growth"
              aspect="aspect-square"
              dark
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
            <motion.div variants={fadeIn("up", 0.1)}>
              <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300">
                <span className="font-raleway text-xs font-light uppercase tracking-[0.2em]">
                  Who We Are
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn("up", 0.15)}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white"
            >
              One <span className="text-orange-400">ecosystem</span> built to
              power local businesses, sharpen student skills, and fuel
              infinite digital <span className="text-red-500">growth</span>{" "}
              across Bharath.
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.1)}
              className="text-sm leading-relaxed text-white/60 md:text-base"
            >
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.2)}
              className="text-sm leading-relaxed text-white/60 md:text-base"
            >
              We&apos;re building toward a future-ready ecosystem where
              technology, practical skills, and global opportunities empower
              individuals and businesses to grow without limitations.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
