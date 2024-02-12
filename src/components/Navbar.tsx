'use client';
import React from 'react';
import Link from 'next/link';
import { User, Wallet } from 'lucide-react';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';


const Navbar: React.FC = () => {
  return (
    <header className="w-screen">
      <nav
        className="py-3 px-6 flex md:items-center justify-between md:py-4 md:px-6 lg:px-8 xl:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl md:text-2xl font-semibold dark:text-white"
            href="/"
            aria-label="FOMO_LAUNCHPAD"
          >
            FOMO Launchpad
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="">
            <Button variant="outline" className="p-2">
              <User size={24} />
            </Button>
          </Link>
          <ModeToggle />
          <Button
            className="flex dark:text-white px-6 py-3 gap-2 bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600"
          >
            <Wallet size={18} />
            <p>Connect</p>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

