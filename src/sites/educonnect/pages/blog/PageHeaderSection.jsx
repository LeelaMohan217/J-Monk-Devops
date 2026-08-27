import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeIn } from "../../../../shared/variants";
import { PAGE_HEADING_SIZE } from "../../../../shared/headingSizes";
import GlazeSweep from "../../../../shared/components/GlazeSweep";
import { blogPosts } from "../../blogPosts";

const featured = blogPosts.find(
  (post) => post.slug === "travel-home-country-day1-cpt"
);

const pageHeader = {
  eyebrow: "Blog",
  headingLead: "Notes from the ",
  headingAccent: "study abroad process.",
  lead: "Practical guidance on exams, applications, visas, and life abroad, drawn from the questions students ask us most.",
  cta: { label: "Book a consultation", href: "/educonnect/contact" },
};

const PageHeaderSection = () => {
  return (
    <section className="w-full bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start gap-5 text-left">
          <motion.span
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            animate="show"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            {pageHeader.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            className={`max-w-4xl font-semibold text-neutral-800 ${PAGE_HEADING_SIZE}`}
          >
            {pageHeader.headingLead}
            <span className="font-['Playfair_Display',serif] text-red-600 italic md:whitespace-nowrap">
              {pageHeader.headingAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
          >
            {pageHeader.lead}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            animate="show"
            className="mt-2"
          >
            <Link
              to={pageHeader.cta.href}
              className="group relative inline-flex w-fit items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-neutral-900 py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <GlazeSweep className="bg-white/30" />
              {pageHeader.cta.label}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="mt-12 w-full md:mt-16"
        >
          <Link
            to={`/educonnect/blog/${featured.slug}`}
            className="group relative block overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width="1600"
              height="1066"
              decoding="async"
              className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <span className="block font-['IBM_Plex_Mono',monospace] text-xs uppercase tracking-[0.2em] text-white/70">
                {featured.date}
              </span>

              <h2 className="mt-3 max-w-3xl text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
                {featured.title}
              </h2>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
