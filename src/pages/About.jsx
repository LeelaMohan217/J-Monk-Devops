import React from "react";
import home from "../assets/home.png";
import { boxData } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="flex flex-col gap-2 py-14">
            <h2 className="text-2xl font-medium text-red-600">About</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800">
              Empowering Digital Innovation
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:m-10"
          >
            {/* Lazy load the image */}
            <LazyLoadImage
              src={home}
              alt="Our Story"
              effect="blur"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h1 className=" text-xl lg:text-2xl xl:text-3xl font-bold">
              Our Story
            </h1>
            <p className="text-base text-neutral-800 text-justify">
              J-Monk Devops is a premier software development company based in
              Guntur, Andhra Pradesh, specializing in custom software solutions
              for businesses of all sizes. Our cutting-edge applications are
              tailored to meet each client’s unique needs, driving digital
              transformation globally.
            </p>
            <div className="my-4">
              <Link
                to=""
                className="bg-red-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500 "
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other sections unchanged */}
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
              variants={fadeIn("up", 0.2)}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10">
          <div className="flex flex-col space-y-4 col-span-1">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-base font-normal tracking-widest"
            >
              UNLEASH THE POWER
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-2xl md:text-4xl font-bold"
            >
              Innovative Solutions for Modern Challenges
            </motion.h1>
          </div>

          <div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 "
            >
              {boxData.map((data, index) => (
                <div
                  key={index}
                  className="w-100 rounded-md p-8 flex flex-col border border-neutral-300 transform transition-transform duration-500 "
                >
                  <div className="text-left font-extrabold text-2xl opacity-20">
                    {data.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <h6 className="mt-2 text-lg md:text-2xl font-medium ">
                      {data.title}
                    </h6>
                    <p className="mt-2 md:mt-4 font-extralight text-sm leading-6">
                      {data.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
