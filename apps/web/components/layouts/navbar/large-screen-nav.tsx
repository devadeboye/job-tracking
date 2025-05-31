import { Button } from '@/components/ui/button';
import { lexend } from '@/lib/fonts';
import { LargeScreenNavProps } from '@/types/nav';
import Link from 'next/link';

export const LargeScreenNav = ({ className }: LargeScreenNavProps) => {
  return (
    <div className={`${className} lg:w-full lg:flex lg:flex-row lg:h-[80px] lg:items-center`}>
      <div className="lg:w-1/6">
        <Link href='/' className={`${lexend.className} antialiased font-bold text-dark lg:text-3xl`}>
          <span className="text-primary">Job</span>Nest
        </Link>
      </div>

      <div className={`${lexend.className} lg:flex lg:flex-col items-center lg:w-3/6`}>
        <ul className="lg:flex lg:flex-row lg:gap-10 lg:font-medium">
          <Link href={'/'}>
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

      <div className="lg:w-2/6">
        <div className="lg:flex lg:gap-5 lg:justify-end lg:items-center">
          <Button className="" label="Sign In" onClick={() => {}} />

          <Button variant="secondary" label="Sign Up" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
