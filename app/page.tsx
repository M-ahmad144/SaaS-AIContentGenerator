"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navigate } from "react-router";
export default function Home() {
  const handleClick = () => {
    window.location.href = "/dashboard";
  };
  return (
    <div className="bg-alf bg-cover bg-center w-full h-64">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 max-w-[85rem]">
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h1 className="block font-bold text-gray-800 dark:text-neutral-200 text-4xl md:text-5xl lg:text-6xl">
            AI content
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-violet-600 text-transparent to">
              Generator
            </span>
          </h1>
        </div>
        <div className="flex justify-center gap-3 mt-16">
          <Button
            className="inline-flex justify-center items-center gap-x-3 bg-gradient-to-tl from-blue-600 hover:from-violet-600 to-violet-600 hover:to-blue-600 px-4 py-3 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800 font-medium text-white text-sm text-center"
            onClick={handleClick}
          >
            Get started
          </Button>
          <div className="mx-a px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-[85rem]"></div>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-[85rem]">
        <div className="items-center gap-2 grid sm:grid-cols-2 lg:grid-cols-4">
          <a className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-neutral-800 p-4 md:p-7 rounded-xl">
            <div className="flex justify-center items-center bg-blue-600 rounded-xl size-12">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L2 7v11l10 5 10-5V7l-10-5zM12 4l7 3.5v9L12 18 5 16.5V7.5L12 4z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-white group-hover:text-gray-600 text-lg">
                20+ Free Templates
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Choose from a wide range of templates
              </p>
            </div>
          </a>

          <a className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-neutral-800 p-4 md:p-7 rounded-xl">
            <div className="flex justify-center items-center bg-green-600 rounded-xl size-12">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-white group-hover:text-gray-600 text-lg">
                Customizable
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Easily adjust to your needs
              </p>
            </div>
          </a>

          <a className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-neutral-800 p-4 md:p-7 rounded-xl">
            <div className="flex justify-center items-center bg-red-600 rounded-xl size-12">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2a10 10 0 0 0-10 10c0 4.41 3.59 8 8 8s8-3.59 8-8a10 10 0 0 0-8-10zm0 16.93c-4.39 0-7.93-3.54-7.93-7.93S7.61 3.07 12 3.07 19.93 6.61 19.93 11 16.39 18.93 12 18.93zm-1-10h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-white group-hover:text-gray-600 text-lg">
                Free to Use
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                No hidden fees or subscriptions
              </p>
            </div>
          </a>

          <a className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-neutral-800 p-4 md:p-7 rounded-xl">
            <div className="flex justify-center items-center bg-yellow-600 rounded-xl size-12">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2a10 10 0 0 0-10 10c0 4.41 3.59 8 8 8 1.76 0 3.41-.57 4.73-1.53l3.46 3.46c.24.24.59.38.94.38.74 0 1.34-.6 1.34-1.34V17c0-.35-.14-.7-.38-.94l-3.46-3.46A8.9 8.9 0 0 0 22 12a10 10 0 0 0-10-10zm-4.5 10h-2v2h2v-2zm3-5h-2v8h2V7zm4 4h-2v4h2v-4z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-white group-hover:text-gray-600 text-lg">
                24/7 Support
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Always available to assist you
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
