import whoWeAreImage from "./assets/who-we-are.jpg";

const IntroSection = () => {
  return (
    <section id="who-we-are" className="bg-white py-16 md:py-24 scroll-mt-36">
      <div className="px-6 md:px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Who we are
            </span>
          </div>

          <h2 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            <span className="text-neutral-900">One ecosystem </span>{" "}
            <span className="text-neutral-600">built to power </span> local
            businesses, sharpen student skills,{" "}
            <span className="text-neutral-700">and fuel infinite</span> digital
            growth across Bharath.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl items-center gap-10 md:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <img
            src={whoWeAreImage}
            alt="The JMonkDevOps team collaborating"
            className="w-full rounded-2xl object-cover"
          />

          <div className="flex flex-col gap-4">
            <p className="text-left text-sm sm:text-base leading-relaxed text-neutral-600">
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </p>
            <p className="text-left text-sm sm:text-base leading-relaxed text-neutral-600">
              DigiConnect builds custom software, cloud infrastructure, and
              DevOps automation for businesses ready to modernize. SkillConnect
              pairs students and career-switchers with live projects and
              mentorship instead of theory alone. EduConnect guides students
              through the full journey to studying abroad, from choosing a
              university to visa support. Three different paths, held to the
              same standard of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
