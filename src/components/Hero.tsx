import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container relative overflow-hidden min-h-[calc(100vh-68px)] before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className="mx-auto px-4 sm:px-6 flex gap-10 items-center">
        <div className="w-1/2 h-[calc(100vh-68px)] flex flex-col justify-center">
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Let's Build
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Together
              </span>
            </h1>
          </div>
          <div className="mt-5 max-w-2xl">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build your brand to Metaverse and grow your community, or discover
              new collection While preserving Web2 Consumber Rights Experience
            </p>
          </div>
          <div className="mt-8 gap-3 flex">
            <a
              className="
                inline-flex 
                justify-center items-center 
                gap-x-3 text-center 
                bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Submit Project
              <svg
                className="flex-shrink-0 w-4 h-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <button
              type="button"
              className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="h-[400px] w-[350px] relative">
            <Card className="absolute top-0 left-0 z-20 w-[350px] h-full">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b border-gray-200">
                <div>
                  <CardTitle className="text-sm">AZUKI</CardTitle>
                  <CardDescription>@Azukinft</CardDescription>
                </div>
                <Button>Upcoming</Button>
              </CardHeader>
              <CardContent className="p-1">
                <div className="relative aspect-[0] h-[250px]">
                  <Image src="/nft2.jpeg" alt="nft" fill />
                </div>
              </CardContent>
              <CardFooter className="p-3 justify-between self-end">
                <div>
                  <div className="font-bold text-lg">12.42ETH</div>
                  <div className="text-xs text-muted-foreground">
                    Mint Price
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-end">5,201</div>
                  <div className="text-xs text-muted-foreground">
                    NFT Supply
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="absolute top-0 left-0 w-[350px] -translate-x-[120px] translate-y-4 h-full -rotate-[16deg]">
              <CardHeader className="p-3 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-sm">AZUKI</CardTitle>
                  <CardDescription>@Azukinft</CardDescription>
                </div>
                <Button>Upcoming</Button>
              </CardHeader>
              <CardContent className="p-1">
                <div className="relative aspect-[0] h-[250px]">
                  <Image src="/nft3.jpeg" alt="nft" fill />
                </div>
              </CardContent>
              <CardFooter className="p-4 justify-between">
                <div>
                  <div className="font-bold text-lg">12.42ETH</div>
                  <div className="text-xs text-muted-foreground">
                    Mint Price
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-end">5,201</div>
                  <div className="text-xs text-muted-foreground">
                    NFT Supply
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="absolute top-0 left-0 w-[350px] translate-x-[100px] translate-y-4 h-full rotate-[18deg]">
              <CardHeader className="p-3 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-sm">BORED</CardTitle>
                  <CardDescription>@Azukinft</CardDescription>
                </div>
                <Button>Upcoming</Button>
              </CardHeader>
              <CardContent className="p-1">
                <div className="relative aspect-[0] h-[250px]">
                  <Image src="/nft.jpeg" alt="nft" fill />
                </div>
              </CardContent>
              <CardFooter className="p-4 justify-between">
                <div>
                  <div className="font-bold text-lg">12.42ETH</div>
                  <div className="text-xs text-muted-foreground">
                    Mint Price
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-end">5,201</div>
                  <div className="text-xs text-muted-foreground">
                    NFT Supply
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
