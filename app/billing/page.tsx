import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col justify-center items-center bg-custom-2 bg-white pt-12 lg:pt-32 min-h-screen"
    >
      <div className="mb-10 px-6 text-center">
        <h3 className="font-semibold text-background-600 text-md uppercase tracking-wide">
          Pricing
        </h3>
        <h2 className="mt-2 font-bold text-gray-900 dark:text-white text-2xl md:text-4xl">
          Find the Perfect Plan for You
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          Choose from flexible pricing options tailored to suit every student’s
          needs, empowering you to unlock your full potential with ease.
        </p>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 lg:px-4 xl:px-8 w-full 2xl:w-9/12">
        <div className="hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-4 bg-black bg-opacity-10 backdrop-blur-md p-6 border border-background-300 rounded-xl text-white dark:text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-black dark:text-white text-3xl">Free</h3>
              <p className="text-black dark:text-white">Starts at</p>
              <p>
                <span className="text-black dark:text-white text-6xl">$0</span>
                <span className="text-black dark:text-white text-2xl">
                  /month
                </span>
              </p>
              <p className="text-black dark:text-white">Simple And Secure </p>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
            </div>

            <button className="bg-gray-300 dark:bg-gray-300 mt-4 p-4 rounded-full text-black dark:text-white text-xl">
              Currently Subscribed
            </button>
          </div>
        </div>
        <div className="hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-4 bg-black bg-opacity-10 backdrop-blur-md p-6 border border-background-300 rounded-xl text-white dark:text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-black dark:text-white text-3xl">Standard</h3>
              <p className="text-black dark:text-white">Starts at</p>
              <p>
                <span className="text-black dark:text-white text-6xl">$10</span>
                <span className="text-black dark:text-white text-2xl">
                  /month
                </span>
              </p>
              <p className="text-black dark:text-white">Simple And Secure </p>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
            </div>

            <button className="bg-background-300 dark:bg-background-700 mt-4 p-4 rounded-full text-black dark:text-white text-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-4 bg-black bg-opacity-10 backdrop-blur-md p-6 border border-background-300 rounded-xl text-white dark:text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-black dark:text-white text-3xl">Premium</h3>
              <p className="text-black dark:text-white">Starts at</p>
              <p>
                <span className="text-black dark:text-white text-6xl">$20</span>
                <span className="text-black dark:text-white text-2xl">
                  /month
                </span>
              </p>
              <p className="text-black dark:text-white">Simple And Secure </p>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
              <p className="flex flex-row items-center gap-4 text-black dark:text-white">
                <FaCheck className="text-2xl lg:text-4xl" />{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, nihil!
                </span>
              </p>
            </div>

            <button className="bg-background-300 dark:bg-background-700 mt-4 p-4 rounded-full text-black dark:text-white text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
