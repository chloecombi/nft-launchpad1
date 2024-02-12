'use client';
import React from 'react';
import Link from 'next/link';

import { HeroCarousel } from './HeroCarousel';

const Hero = () => {
  return (
    <div className="container relative overflow-hidden min-h-[calc(100vh-68px)] w-screen">
      <div className="absolute bottom-0 right-[10px] top-[3px] h-[600px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.25),rgba(255,255,255,0))]"></div>
      <div className="mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-10 items-center z-10">
        <div className="w-1/2 h-[calc(100vh-68px)] ml-10 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl dark:text-white">
              <span className="">Don't</span> miss out!
            </h1>
          </div>
          <div className="mt-3 max-w-xl">
            <h2 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl dark:text-white">
              Bring your NFT's to life using <span>FOMO Launchpad</span>
            </h2>
          </div>
          <div className="mt-8 gap-3 flex">
            <Link
              className="
                inline-flex 
                justify-center items-center 
                gap-x-3 text-center 
                bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 text-lg"
              href="/createNFT"
            >
              Submit Project
            </Link>
            <button
              type="button"
              className="relative group py-3 px-4 ps-3 inline-flex items-center gap-x-2 font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
