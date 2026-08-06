import { motion } from "framer-motion";
import { fadeIn, stagger } from "../../shared/variants";
import { testimonials } from "./data";

const initialsOf = (role) =>
  role
    .split(",")[0]
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialsSection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-md px-4 py-1.5 text-neutral-300">
              <span className="font-raleway text-xs font-light uppercase tracking-[0.2em]">
                Our Customers
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.15)}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white"
          >
            What our <span className="text-orange-400">customers</span> are{" "}
            <span className="text-red-500">saying</span>.
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-sm sm:text-base leading-relaxed text-white/60"
          >
            Here&apos;s what some of our customers say about our platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1)}
              className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-colors duration-300 hover:border-white/20"
            >
              <p className="text-white/70 text-xs md:text-sm leading-relaxed grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 text-neutral-300 text-xs font-semibold flex items-center justify-center shrink-0">
                  {initialsOf(testimonial.role)}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white leading-tight">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-neutral-400 leading-tight">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
