import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, stagger } from "../shared/variants";
import { digiConnectConfig } from "../sites/digiconnect/config";

const brands = [
  {
    id: "01.",
    name: "DigiConnect",
    href: "/digiconnect",
    available: true,
    description:
      "Internships, freelancing, training, and custom software solutions for students and businesses.",
  },
  {
    id: "02.",
    name: "SkillConnect",
    href: "/skillconnect",
    available: false,
    description:
      "A hands-on learning platform for students and career-switchers — coming soon.",
  },
  {
    id: "03.",
    name: "EduConnect",
    href: "/educonnect",
    available: false,
    description:
      "A learning platform in the works — designed to connect students with the skills that matter.",
  },
];

const Landing = () => {
  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-red-700/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-red-900/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-28 md:py-36">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center gap-6"
          >
            <motion.span
              variants={fadeIn("up", 0.1)}
              className="uppercase tracking-[0.3em] text-red-500 text-xs md:text-sm font-semibold"
            >
              One Umbrella. Three Platforms.
            </motion.span>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              JMonk
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
                DevOps
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="max-w-2xl text-neutral-400 text-base md:text-lg"
            >
              We build focused platforms for students, businesses, and
              beyond — each with its own identity, all backed by the same
              commitment to quality.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              <a
                href="#brands"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors rounded-full"
              >
                Explore Platforms
              </a>
              <Link
                to="/digiconnect"
                className="px-6 py-3 border border-white/20 text-white hover:border-red-500 hover:text-red-400 font-medium transition-colors rounded-full"
              >
                Visit DigiConnect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="relative pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                variants={fadeIn("up", 0.2 + index * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-neutral-900 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 overflow-hidden hover:border-red-600/60 transition-colors duration-500"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-colors duration-500" />

                {!brand.available && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wide font-semibold text-neutral-400 border border-white/10 rounded-full px-3 py-1">
                    Coming Soon
                  </span>
                )}

                <span className="text-sm font-mono text-red-500">
                  {brand.id}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {brand.name}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base flex-grow">
                  {brand.description}
                </p>

                {brand.available ? (
                  <Link
                    to={brand.href}
                    className="inline-flex items-center gap-2 text-red-500 font-medium group-hover:gap-3 transition-all w-fit"
                  >
                    Visit {brand.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-neutral-600 font-medium">
                    Launching soon
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} JMonkDevOps. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {digiConnectConfig.footer.platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-red-500 transition-colors"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
