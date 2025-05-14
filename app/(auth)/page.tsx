"use client";

import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import { ArrowBigUp, AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = useUser();

  return (
    <div>
      <Header />
      <section>
        <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
          <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          Build a Winning Resume Instantly <span className="text-primary-700 max-sm:block"> With AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
            Skip the hassle. Let our AI craft a polished, professional resume that gets noticed—fast.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white ">
                Start for Free
              </span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary">
                How It Works
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 md:px-10">
        <h2 className="font-bold text-3xl" id="learn-more">
          How it Works?
        </h2>
        <h2 className="text-md text-gray-500">
          Create a resume in 3 easy steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center md:text-start md:grid-cols-2 lg:grid-cols-3 md:px-24">
          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <AtomIcon className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Choose a Template
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Browse through a collection of clean, modern templates designed by professionals. Pick one that fits your style and industry—no design skills needed.
            </p>
          </div>

          <div className="flex hover:shadow-2xl flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Edit className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Fill in Your Details
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Just enter your information—education, experience, skills—and let our AI suggest improvements and format it perfectly.
            </p>
          </div>

          <div className="flex hover:shadow-2xl flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Download or Share
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Instantly download your resume or get a shareable link to send to recruiters. Update it anytime, from any device.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="#get-started"
            className="inline-block rounded-full bg-primary-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring focus:ring-primary-400"
          >
            <div className="flex items-center justify-center">
              <ArrowBigUp className="h-6 w-6 mr-2" />
              Get Started
            </div>
          </Link>
        </div>
      </section>
      <footer className="backdrop-blur-md w-full">
        <div className="w-full mx-auto text-center max-w-screen-xl p-4 flex max-md:flex-col md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <span className="hover:text-primary-500 hover:cursor-pointer">
              Prasunet™
            </span>
            . All Rights Reserved.
          </span>
          
        </div>
      </footer>
    </div>
  );
};

export default page;
