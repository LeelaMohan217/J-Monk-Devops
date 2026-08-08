const HeroSection = () => {
  return (
    <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="relative z-10 w-full px-6 md:px-8 flex items-center justify-start">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.15] sm:leading-[1.05] lg:whitespace-nowrap">
            <span className="block sm:inline">Digitalizing</span>{' '}
            <span className="block sm:inline">Local</span>{' '}
            <span className="block sm:inline">Bharath</span>
          </h1>

          <p className="max-w-md sm:max-w-lg text-sm sm:text-base text-neutral-600 leading-relaxed">
            We build focused platforms that help businesses grow digitally, give
            students practical skills, and support individuals reaching global
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
