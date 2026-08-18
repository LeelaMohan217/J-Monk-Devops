import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { riseIn } from "../../shared/variants";
import { testimonials } from "./data";

// Not rendered on the live page yet — see the comment above `testimonials`
// in ./data.js. Wire this into Landing.jsx once every slot has a real quote
// and real attribution.
const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            What people say
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
            One voice from each platform.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.platform}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-3xl border border-neutral-200 bg-stone-50 p-8"
            >
              <Quote
                className="h-8 w-8 text-red-200"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                {item.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600">
                  {item.platform.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
                  <p className="text-xs text-neutral-500">
                    {item.role} · {item.platform}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
