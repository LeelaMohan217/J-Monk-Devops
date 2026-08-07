const IntroSection = () => {
  return (
    <section id="who-we-are" className="bg-white py-20 md:py-28 scroll-mt-36">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">
          {/* Image placeholder */}
          <div className="order-1 max-w-md mx-auto lg:mx-0 w-full">
            <div className="aspect-square w-full rounded-2xl border border-neutral-200" />
          </div>

          {/* Content */}
          <div className="order-2 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-600">
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
              One ecosystem built to power local businesses, sharpen student
              skills, and fuel infinite digital growth across Bharath.
            </h2>

            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world
              skills, and aspiring individuals access global education and
              career opportunities.
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              We&apos;re building toward a future-ready ecosystem where
              technology, practical skills, and global opportunities empower
              individuals and businesses to grow without limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
