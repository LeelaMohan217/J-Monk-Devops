import React from "react";
import c from "../assets/c.jpg";
import { Link } from "react-router-dom";

const ContactCmp = () => {
  return (
    <div className="bg-gradient-to-l from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto py-8 md:py-14 px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Ready to Elevate Your Business?
          </h2>
          <p className="font-medium text-sm lg:text-base text-neutral-600 text-center mt-4">
            Contact us today to discuss how our custom software solutions can
            take your business to the next level. Let's innovate together!
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-4 md:px-6 py-3 font-normal text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCmp;
