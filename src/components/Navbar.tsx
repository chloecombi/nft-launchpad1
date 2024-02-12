'use client';
import React from 'react';
import Link from 'next/link';
import { User, Wallet } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const data = [
  {
    href: '/',
    text: 'Launchpad',
  },
  {
    href: '#',
    text: 'Marketplace',
  },
  {
    href: '/generateNFT',
    text: 'Genius',
  },
  {
    href: '/createNFT',
    text: 'Create',
  },
];

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm">
      <nav
        className=" relative max-w-[85rem] w-full bg-white py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            LMS Launchpad
          </Link>
          <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ml-5">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              {data.map((item, index) => (
                <NavLink key={index} text={item.text} href={item.href} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="h-10 w-10 cursor-pointer rounded-lg flex items-center justify-center bg-slate-200/50 hover:bg-slate-200 p-2">
            <User size={24} />
          </Link>
          <Button className="flex gap-2">
            <Wallet size={18} />
            <p>Connect</p>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        'items-center font-medium border-b-[3px] border-transparent hover:border-blue-500 md:pb-3 md:pt-4 dark:text-blue-500',
        pathname === href ? 'text-blue-500 border-blue-500' : 'text-gray-500'
      )}
      href={href}
    >
      {text}
    </Link>
  );
};
