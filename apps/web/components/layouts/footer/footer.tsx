'use client';

import { Newsletter } from './newsletter';
import { Support } from './support';
import { Company } from './company';
import { AboutUs } from './about-us';
import { GetInTouch } from './get-in-touch';

export const Footer = () => {
  return (
    <footer className="px-5 md:px-10 lg:px-16 xl:px-20">
      <div className="grid grid-cols-2 w-full text-left gap-4 container border-b border-gray-200 py-20 [&>*:last-child]:col-span-2 md:grid-cols-3 md:[&>*:last-child]:col-span-2 md:gap-10 md:text-start lg:grid lg:grid-cols-[2fr_1fr_1fr_2fr_2fr] lg:[&>*:last-child]:col-span-1 lg:gap-10">
        <AboutUs />

        <Company />

        <Support />

        <GetInTouch />

        <Newsletter />
      </div>
      <div className="container mx-auto flex items-center justify-center flex-col gap-4 py-6">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} JobNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
