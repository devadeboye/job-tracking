'use client';

import { useLayout } from '@/contexts/layout-context';
import { LargeScreenNav } from './navbar/large-screen-nav';
import { SmallScreenNav } from './navbar/small-screen-nav';
import Link from 'next/link';
import { Button } from '../ui/button';
import styles from './navbar.module.css';

export const Navbar = () => {
  const { isScrolled, isHome, isMenuOpen, closeMenu } = useLayout();

  return (
    <nav
      className={`${styles.navContainer} flex flex-col w-full transition-all duration-300 ease-in-out md:px-10 lg:block lg:px-16 xl:px-20 lg:w-full ${
        isScrolled || !isHome
          ? 'fixed top-0 bg-white/80 backdrop-blur-sm shadow-lg lg:py-2 z-50 border-b border-gray-200'
          : 'fixed top-0 bg-transparent lg:py-4'
      } ${isMenuOpen ? 'h-full absolute z-20' : ''}`}
    >
      <SmallScreenNav className="lg:hidden" />
      <LargeScreenNav className="hidden" />
      {isMenuOpen && (
        // menu
        <div
          className={`flex flex-col h-svh overflow-clip bg-white w-full items-center justify-center px-5 md:px-10 lg:hidden`}
        >
          <ul
            className={`${styles.smallScreenNavContainer} flex flex-col gap-4 h-[90%] w-full items-center justify-center`}
          >
            <Link href="#" onClick={closeMenu}>
              <li>Home</li>
            </Link>

            <Link href="#" onClick={closeMenu}>
              <li>Features</li>
            </Link>

            <Link href="#" onClick={closeMenu}>
              <li>Pages</li>
            </Link>

            <Link href="#" onClick={closeMenu}>
              <li>Support</li>
            </Link>
          </ul>

          <div className="flex flex-row gap-4 w-full h-[10%] items-center justify-center">
            <Link href="/signin" className="w-full" onClick={closeMenu}>
              <Button label="Sign In" className="w-full" />
            </Link>

            <Link href="/signup" className="w-full" onClick={closeMenu}>
              <Button variant="secondary" label="Sign Up" className="w-full" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
