"use client";


import { useLayout } from '@/contexts/layout-context';
import { LargeScreenNav } from './navbar/large-screen-nav';
import { SmallScreenNav } from './navbar/small-screen-nav';

export const Navbar = () => {
  const { isScrolled, isHome } = useLayout();

  return (
    <nav
      className={`w-full transition-all duration-300 ease-in-out lg:px-10 xl:px-20 lg:w-full ${
        isScrolled || !isHome
          ? 'fixed top-0 bg-white/80 backdrop-blur-sm shadow-lg lg:py-2 z-50 border-b border-gray-200'
          : 'fixed top-0 bg-transparent lg:py-4'
      }`}
    >
      <SmallScreenNav className="lg:hidden" />
      <LargeScreenNav className="hidden" />
    </nav>
  );
};
