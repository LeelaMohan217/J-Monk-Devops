import React from "react";
import { Link } from "react-router-dom";
import { dataSB } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { stagger } from "framer-motion";
import fit from "../assets/fit.png";
import why from "../assets/why.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-neutral-50 to-neutral-200">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start md:items-center space-y-4 md:space-y-6 py-24 sm:py-28"
          >
            <div className="flex flex-col items-center space-y-4 md:space-y-6 md:my-10">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                className="text-5xl sm:text-6xl md:text-7xl font-bold md:font-semibold md:leading-none md:text-center"
              >
                Digitalizing Local{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                  Bharat
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.4)}
                className="text-red-600 sm:text-lg md:text-xl lg:text-2xl md:text-center"
              >
                Building a community of developers to build digital India
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.6)}
                className="md:text-center lg:px-10 text-base"
              >
                Empowering Developers, Transforming India Digitally! Join us as
                we unite talents, foster collaboration, and innovate towards a
                digitally empowered nation. Together, let&apos;s code the future
                of India, one breakthrough at a time!
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 my-8 md:my-0"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-4 md:px-6 py-3 font-normal text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="hidden md:block w-full sm:w-auto text-sm md:text-base text-center px-2 sm:px-4 md:px-6 py-3 border border-neutral-500 hover:border-red-600 hover:text-red-700 hover:bg-neutral-50 transition-all duration-700 ease-in-out"
              >
                Know More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white xl:py-10">
        <div className="max-w-7xl mx-auto py-2 md:py-4 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-24 xl:gap-44 mt-1 md:mt-10">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide leading-relaxed font-medium text-black"
            >
              Our Tailored Software Solutions
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-base font-normal text-left leading-6 text-gray-900"
            >
              Discover our range of custom software offerings designed to meet
              the diverse needs of businesses of all sizes.
            </motion.p>
          </div>

          <div className="border-t border-gray-400 my-4 sm:my-6"></div>

          <motion.div
            variants={stagger} // This ensures the children animate with a stagger
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10"
          >
            {dataSB.map((data, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", index * 0.14)} // Adjust delay for each card
                className="w-full bg-white rounded-md p-8 flex flex-col shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-left font-extrabold text-2xl opacity-20 text-gray-800">
                  {data.id}
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="mt-2 text-lg md:text-2xl font-medium text-black">
                    {data.title}
                  </h6>
                  <p className="mt-2 md:mt-4 text-sm font-normal italic text-gray-500">
                    {data.quote}
                  </p>
                  <p className="mt-2 md:mt-4 font-normal text-sm leading-6 text-gray-700">
                    {data.text}
                  </p>
                </div>
                <div className="mt-4">
                  <Link to="/student" className="text-start text-red-600">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="border-t border-gray-400 my-4 sm:my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:mt-10 mb-10">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ amount: 0.7 }}
              className="text-xl lg:text-2xl xl:text-3xl leading-relaxed text-black"
            >
              Ready to Transform Your Business? Connect With Us Today
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ amount: 0.7 }}
              className="text-left mt-10 md:mt-0 md:justify-self-end"
            >
              <Link
                to="/contact"
                className="text-center text-base md:text-lg text-white bg-red-600 p-3 lg:p-4 hover:bg-red-800 transition-all"
              >
                Explore Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 md:py-0 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="order-2 md:order-1"
          >
            <h1 className="font-bold text-lg py-4 text-red-700">Explore</h1>
            <h1 className="text-3xl md:text-4xl">Why J-Monk Devops?</h1>
            <p className="py-4 font-normal text-justify text-sm lg:text-base">
              J-Monk Devops is an emerging player in the offshore software
              development industry, dedicated to offering innovative software
              solutions to clients worldwide.
            </p>
            <p className="pb-4 font-normal text-sm lg:text-base">
              We offer a unique service to our clients who are interested in
              keeping pace with a rapidly evolving Internet world.
            </p>
            <p className="pb-4 font-normal text-justify text-sm lg:text-base">
              We do this by offering a strong emphasis on Technical excellence.
              Understanding our clients’ needs is the most important factor and
              the results are evident in the finished product.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="order-1 md:order-2"
          >
            <LazyLoadImage
              alt="Why Image"
              effect="blur"
              className="rounded-lg w-full"
              src={why}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <LazyLoadImage
              alt="Fit Image"
              effect="blur"
              className="rounded-lg w-full"
              src={fit}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <h1 className="font-bold text-lg py-4 text-red-700">Find</h1>
            <h1 className="text-3xl md:text-4xl">
              Is J-Monk Devops the right fit for you?
            </h1>
            <p className="py-4 font-normal text-justify text-sm lg:text-base">
              J-Monk Devops works hard to achieve 100% customer satisfaction.
              The offshore development services we provide are comprehensive and
              of high quality. Our development services give you the best value
              for money.
            </p>
            <p className="pb-4 font-normal text-sm lg:text-base">
              Our experienced technical team at J-Monk Devops helps you design
              and implement an ideal solution.
            </p>
            <p className="pb-4 font-normal text-sm lg:text-base">
              We provide scalable and flexible solutions to grow with your
              business, all while maintaining transparent and ethical practices.
              Trust us to be your dedicated partner in achieving success.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
