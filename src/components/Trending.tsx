import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { Bitcoin, EyeIcon } from 'lucide-react';

const Trending = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Upcoming FOMO 🔥</h2>
      <div className="m-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          <Card className="rounded-lg overflow-hidden ">
            <CardHeader className="p-2 h-[220px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold">Doodles</p>
                <div className="bg-indigo-500 p-[2px] rounded-full">
                  <Bitcoin className="text-white" size={20} />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between">
                <p>NFT Price</p>
                <p className="text-black font-medium">1 BTC</p>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button
                variant="secondary"
                className="text-white w-full gap-4 bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600"
              >
                <EyeIcon />
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className="rounded-lg overflow-hidden ">
            <CardHeader className="p-2 h-[220px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold">Doodles</p>
                <div className="bg-indigo-500 p-[2px] rounded-full">
                  <Bitcoin className="text-white" size={20} />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between">
                <p>NFT Price</p>
                <p className="text-black font-medium">1 BTC</p>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button
                variant="secondary"
                className="text-white w-full gap-4 bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600"
              >
                <EyeIcon />
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className="rounded-lg overflow-hidden ">
            <CardHeader className="p-2 h-[220px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold">Doodles</p>
                <div className="bg-indigo-500 p-[2px] rounded-full">
                  <Bitcoin className="text-white" size={20} />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between">
                <p>NFT Price</p>
                <p className="text-black font-medium">1 BTC</p>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button
                variant="secondary"
                className="text-white w-full gap-4 bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600"
              >
                <EyeIcon />
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className="rounded-lg overflow-hidden ">
            <CardHeader className="p-2 h-[220px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold">Doodles</p>
                <div className="bg-indigo-500 p-[2px] rounded-full">
                  <Bitcoin className="text-white" size={20} />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between">
                <p>NFT Price</p>
                <p className="text-black font-medium">1 BTC</p>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button
                variant="secondary"
                className="text-white w-full gap-4 bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600"
              >
                <EyeIcon />
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trending;
