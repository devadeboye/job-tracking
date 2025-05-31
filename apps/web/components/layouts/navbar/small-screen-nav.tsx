import { Button } from '@/components/ui/button';
import { lexend } from '@/lib/fonts';
import { SmallScreenNavProps } from '@/types/nav';
import Link from 'next/link';

export const SmallScreenNav = ({ className }: SmallScreenNavProps) => {
  return (
    <div className={`${className} flex flex-row h-[80px] items-center w-full px-5 z-50`}>
      <div className="">
        <Link href='/' className={`${lexend.className} antialiased font-bold text-dark text-3xl`}>
          <span className="text-primary">Job</span>Nest
        </Link>
      </div>

      <div className="flex align-center justify-end w-full">
        <div className="lg:flex lg:gap-5 lg:justify-end lg:items-center">
          <Button className="" label="Sign In" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
