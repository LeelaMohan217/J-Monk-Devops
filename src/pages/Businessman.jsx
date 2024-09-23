import React from "react";
import { offeringPageData } from "../constants";
import fadeIn from "../variants";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Businessman = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="flex flex-col gap-2 py-14">
            <h2 className="text-2xl font-medium text-red-600">Offerings</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800">
              Tailored Software Solutions for Your Business
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
        <div className="flex flex-col space-y-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Explore our range of custom software development services designed
            to elevate your business operations and enhance your digital
            presence.
          </h1>
          <div className="border border-b-0"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
        <div className="grid grid-cols-1">
          {offeringPageData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:space-x-6 transform transition-transform duration-500 my-10"
            >
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="w-full md:w-1/3"
              >
                {/* Lazy load the image */}
                <LazyLoadImage
                  src={data.image}
                  alt={data.title}
                  effect="blur"
                  className="object-cover rounded"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 space-x-0 md:space-x-6 md:w-2/3 my-10 md:my-0">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex flex-col md:space-y-4"
                >
                  <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-700">
                    {data.title}
                  </h6>
                  <p className="text-neutral-600 text-sm md:text-base">
                    {data.subtitle}
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex flex-col space-y-2 md:space-y-4"
                >
                  <p className="font-normal text-sm md:text-base text-neutral-900 leading-6">
                    {data.text}
                  </p>
                  <p className="font-normal text-sm md:text-base text-neutral-900 leading-6">
                    {data.quote}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Businessman;
