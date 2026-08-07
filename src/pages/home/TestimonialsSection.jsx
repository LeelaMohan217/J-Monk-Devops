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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Our Customers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            What our customers are saying.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            Here&apos;s what some of our customers say about our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-2xl border border-neutral-200 p-7"
            >
              <p className="text-neutral-600 text-xs md:text-sm leading-relaxed grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-neutral-200 text-neutral-500 text-xs font-semibold flex items-center justify-center shrink-0">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
