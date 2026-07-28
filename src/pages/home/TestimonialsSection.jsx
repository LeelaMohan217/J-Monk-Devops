import { motion } from "framer-motion";
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
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Customers"
          title="See What Our Customers Are Saying"
          description="Here's what some of our customers say about our platform."
        />

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
              className="flex flex-col gap-6 rounded-2xl bg-white p-7 shadow-sm"
            >
              <p className="text-neutral-800 text-xs md:text-sm leading-relaxed grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-500 text-xs font-semibold flex items-center justify-center shrink-0">
                  {initialsOf(testimonial.role)}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-neutral-900 leading-tight">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-neutral-500 leading-tight">
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
