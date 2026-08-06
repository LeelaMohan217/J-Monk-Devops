import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { homeImages } from "./images";

const platforms = [
  { name: "DigiConnect", href: "/digiconnect" },
  { name: "SkillConnect", href: "/skillconnect" },
  { name: "EduConnect", href: "/educonnect" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen -mt-20 overflow-hidden bg-black">
      <motion.img
        src={homeImages.heroBackground}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.08, clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          scale: [1.08, 1, 1.08],
          clipPath: "circle(150% at 50% 50%)",
        }}
        transition={{
          clipPath: { duration: 1.8, ease: "easeInOut" },
          scale: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          },
        }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="absolute top-28 right-6 md:right-10 z-10 hidden lg:flex flex-col items-end gap-2"
      >
        {platforms.map((platform) => (
          <motion.div key={platform.name} variants={fadeIn("left", 0.2)}>
            <Link
              to={platform.href}
              className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/50 transition-colors duration-300 hover:text-white"
            >
              {platform.name}
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10 h-full w-full px-6 md:px-8 flex items-center justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              One Ecosystem. Three Platforms.
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.2)}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] lg:whitespace-nowrap"
          >
            Digitalizing Local Bharath
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.25)}
            className="max-w-md sm:max-w-lg text-sm sm:text-base text-white/80 leading-relaxed"
          >
            We build focused platforms that help businesses grow digitally, give
            students practical skills, and support individuals reaching global
            opportunities.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.3)}
            className="flex lg:hidden flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                to={platform.href}
                className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/50 transition-colors duration-300 hover:text-white"
              >
                {platform.name}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#platforms"
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5"
            >
              Explore Platforms
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#who-we-are"
              className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Know More About Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-16 z-10 px-6 md:px-8 flex items-end justify-between gap-6 [@media(max-height:700px)]:hidden">
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="hidden md:block shrink-0 text-xs font-medium uppercase tracking-widest text-white/50 leading-relaxed"
        >
          Businesses, Students
          <br />
          &amp; Professionals
        </motion.p>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="hidden md:block shrink-0 text-right text-xs font-medium uppercase tracking-widest text-white/50 leading-relaxed"
        >
          Building Digital
          <br />
          Ecosystems for Bharath
        </motion.p>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to next section"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 transition-colors duration-300 hover:text-white/70 [@media(max-height:700px)]:hidden"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
