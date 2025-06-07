'use client';

import { Menu } from '@/components/ui/icons/general';
import { useLayout } from '@/contexts/layout-context';
import { lexend } from '@/lib/fonts';
import { SmallScreenNavProps } from '@/types/nav';
import Link from 'next/link';

export const SmallScreenNav = ({ className }: SmallScreenNavProps) => {
  const { toggleMenu, closeMenu } = useLayout();

  return (
    <div className={`${className} flex flex-row h-[80px] items-center w-full px-5 md:px-10 z-50`}>
      <div className="">
        <Link
          href="/"
          onClick={closeMenu}
          className={`${lexend.className} antialiased font-bold text-dark text-3xl`}
        >
          <span className="text-primary">Job</span>Nest
        </Link>
      </div>

      <div className="flex align-center justify-end w-full">
        <div className="lg:flex lg:gap-5 lg:justify-end lg:items-center">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};

// TODO: impelement sign up screen
// TODO: impelement sign in screen
