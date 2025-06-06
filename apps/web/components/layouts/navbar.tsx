"use client";


import { useLayout } from '@/contexts/layout-context';
import { LargeScreenNav } from './navbar/large-screen-nav';
import { SmallScreenNav } from './navbar/small-screen-nav';
import Link from 'next/link';

export const Navbar = () => {
  const { isScrolled, isHome, isMenuOpen } = useLayout();

  return (
    <nav
      className={`flex flex-col w-full transition-all duration-300 ease-in-out lg:block lg:px-10 xl:px-20 lg:w-full ${
        isScrolled || !isHome
          ? 'fixed top-0 bg-white/80 backdrop-blur-sm shadow-lg lg:py-2 z-50 border-b border-gray-200'
          : 'fixed top-0 bg-transparent lg:py-4'
      } ${isMenuOpen ? 'h-full absolute z-10' : ''}`}
    >
      <SmallScreenNav className="lg:hidden" />
      <LargeScreenNav className="hidden" />
      {isMenuOpen && (
        <div
          className={`flex flex-1 overflow-clip bg-white w-full items-center justify-center lg:hidden`}
        >
          <ul className="flex flex-col gap-4">
            <Link href="#">
              <li>Home</li>
            </Link>

            <Link href="#">
              <li>Features</li>
            </Link>

            <Link href="#">
              <li>Pages</li>
            </Link>

            <Link href="#">
              <li>Support</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
