import React from "react";
import { studentPageData } from "../constants";
import { dataSBe } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: for blur effect

import { Link } from "react-router-dom";

const Student = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="flex flex-col gap-2 py-14">
            <h2 className="text-2xl font-medium text-red-600">Student</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800">
              Empowering Digital Innovation
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-2 md:py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {studentPageData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:space-x-8 transform transition-transform duration-500 my-10"
            >
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="md:w-1/3"
              >
                <LazyLoadImage
                  src={data.image}
                  alt={data.title}
                  effect="blur" // Optional blur effect while image is loading
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="flex flex-col space-y-4 md:w-2/3 px-8 md:px-0"
              >
                <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800">
                  {data.title}
                </h6>
                <p className="text-red-600 text-sm md:text-base">
                  {data.subtitle}
                </p>
                <p className="font-normal text-sm md:text-base text-neutral-700 leading-6">
                  {data.text}
                </p>
                <p className="font-light text-sm md:text-base leading-6">
                  {data.quote}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-l from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10">
            <div className="space-y-4">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-2xl md:text-4xl font-bold text-red-600"
              >
                Unlock your potential and transform your life today!
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-base font-light text-neutral-800 text-justify"
              >
                Don't wait any longer. Take action today and embark on an
                exciting journey to achieve your goals. Let us guide you through
                the process and help you unleash your true potential.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex justify-center items-center space-x-4"
            >
              <Link
                to="/about"
                className="bg-red-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="border border-neutral-500 font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:border-red-600 hover:text-red-600 transition-all duration-500"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:my-16 xl:my-20 md:space-x-6">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col space-y-4"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Core Values
            </h1>
            <h1 className="text-base">
              At J-Monks, we uphold a set of core values that guide our work,
              interactions, and business decisions.
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="grid grid-cols-1 space-y-4 mt-10 md:mt-0"
          >
            {dataSBe.map((data, index) => (
              <div key={index} className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-4">
                  <h6 className="text-lg md:text-2xl font-semibold tracking-wide">
                    {data.title}
                  </h6>
                  <p className="text-base">{data.text}</p>
                </div>
                <div className="border border-b-0"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Student;
