import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { riseIn } from "../../../../shared/variants";
import { testimonials } from "./data";

// Same visual language as BentoCard (icon badge, ghost watermark, gradient
// tint, hover lift) rather than a new card style, so this doesn't introduce
// a second design system. No inverted "closer" tile here — a dark card would
// read as a heavier statement than a testimonial calls for, so all three
// stay uniform. Monogram avatar instead of a photo, same reasoning as the
// hero rating card: no real reviewer headshots exist, so a fabricated one
// would be worse than none.
const TestimonialsSection = () => {
  return (
    <section className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={riseIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {testimonials.eyebrow}
          </span>

          <h2 className="mt-5 text-display-sm font-semibold text-neutral-900">
            {testimonials.heading}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <motion.figure
              key={item.name}
              variants={riseIn(index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-red-50/60 via-surface to-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-red-200/70 hover:shadow-lg"
            >
              <Quote
                className="pointer-events-none absolute -top-4 -right-4 h-28 w-28 text-neutral-900 opacity-[0.05]"
                strokeWidth={1}
                aria-hidden="true"
              />

              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100/40 ring-1 ring-red-100/80 transition-[background-color,transform] duration-300 group-hover:scale-105 group-hover:bg-red-100">
                <Quote
                  className="h-5 w-5 text-red-600"
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden="true"
                />
              </span>

              <blockquote className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                {item.quote}
              </blockquote>

              <figcaption className="relative z-10 mt-6 flex items-center gap-3 border-t border-neutral-200 pt-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600"
                  aria-hidden="true"
                >
                  {item.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-medium text-neutral-900">{item.name}</p>
                  <p className="font-['IBM_Plex_Mono',monospace] text-xs text-neutral-500">
                    {item.detail}
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
