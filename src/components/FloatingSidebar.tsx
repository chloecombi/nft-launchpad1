'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
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

const FloatingSidebar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 z-50 p-2 rounded-xl">
      <div className="flex gap-2">
        {data.map((item, index) => (
          <NavLink key={index} text={item.text} href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default FloatingSidebar;

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        ' text-stone-300 border-[0.5px] border-neutral-600 p-2 md:px-4 md:py-3 rounded-lg transition-all duration-500 hover:bg-neutral-700',
        pathname === href ? 'text-stone-50 bg-neutral-700 font-medium' : 'font-normal'
      )}
      href={href}
    >
      {text}
    </Link>
  );
};
