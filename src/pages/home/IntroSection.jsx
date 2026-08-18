import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import whoWeAreImage from "./assets/who-we-are.jpg";

const IntroSection = () => {
  return (
    <section id="who-we-are" className="bg-white py-16 md:py-24 scroll-mt-36">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:px-8">
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

      <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-10 px-6 md:mt-14 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <img
          src={whoWeAreImage}
          alt="The JMonkDevOps team collaborating"
          className="w-full rounded-2xl object-cover"
        />

        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our mission is to create impactful and accessible platforms that
              help businesses scale digitally, students gain real-world skills,
              and aspiring individuals access global education and career
              opportunities.
            </p>

            <p className="text-left text-sm leading-relaxed text-neutral-600 sm:text-base">
              We work across all three because they are the same problem seen
              from different points in a life — a business that needs building,
              a person who needs the skills to build it, a student who needs a
              door opened. Splitting them into three companies would have meant
              three different standards. We would rather hold one.
            </p>
          </div>

          <Link
            to="/#platforms"
            className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black lg:mt-0"
          >
            Know More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
