import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeIn, stagger } from "../../shared/variants";
import { testimonials } from "./data";
import SectionHeading from "./SectionHeading";

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
    <section className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What partners are saying"
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.role}
              variants={fadeIn("up", 0.1)}
              className="flex flex-col gap-5 p-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-red-500/70" />
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {initialsOf(testimonial.role)}
                </div>
                <div className="flex-grow">
                  <span className="text-sm text-neutral-300 block leading-tight">
                    {testimonial.role}
                  </span>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-red-500 text-red-500"
                      />
                    ))}
                  </div>
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
