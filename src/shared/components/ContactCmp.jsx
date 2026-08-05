import { Link } from "react-router-dom";

const ContactCmp = ({ heading, subtext, ctaLabel, ctaHref }) => {
  return (
    <div className="bg-linear-to-l from-neutral-50 to-neutral-100">
      <div className="max-w-6xl mx-auto py-8 md:py-14 px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {heading}
          </h2>
          <p className="font-medium text-sm lg:text-base text-neutral-600 text-center mt-4">
            {subtext}
          </p>
          <div className="mt-8">
            <Link
              to={ctaHref}
              className="px-4 md:px-6 py-3 font-normal text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-hidden focus:ring-3 focus:ring-red-300"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCmp;
