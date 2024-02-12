'use client';
import React from 'react';
import Link from 'next/link';
import HoverCard from './HoverCard';

const Hero = () => {
  return (
    <div className="container relative overflow-hidden min-h-[calc(100vh-68px)] w-screen">
      <div className="mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-10 items-center z-10">
        <div className="w-1/2 h-[calc(100vh-68px)] ml-10 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl dark:text-white">
              <span className="text-yellow-400">Don't</span> miss out!
            </h1>
          </div>
          <div className="mt-3 max-w-xl">
            <h2 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl dark:text-white">
              Bring your NFT's to life using{' '}
              <span className="text-yellow-400">FOMO Launchpad</span>
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
        <div className="relative w-1/2 flex gap-4">
          <div className="absolute right-0 -top-[160px] h-[700px] w-[700px] rounded-full bg-[url('/blob.svg')] bg-no-repeat rotate-12"></div>
          <div
            style={{
              transform: 'translateZ(75px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <HoverCard image="/nft4.jpeg" createdBy="LAMO BAE" />
          </div>
          <HoverCard image="/nft5.jpeg" createdBy="CAiO naE" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
