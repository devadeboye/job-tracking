import { Facebook, X, Linkedin, Instagram } from "@/components/ui/icons/social";
import { lexend } from "@/lib/fonts";
import Link from "next/link";

export const AboutUs = () => {
	return (
    <div className="flex flex-col gap-4 pb-8 w-full lg:pb-0 lg:flex-col lg:gap-10 lg:text-start">
      <div className={`${lexend.className} antialiased font-bold text-dark text-3xl lg:text-3xl`}>
        <span className="text-primary">Job</span>Nest
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="w-full flex items-center justify-start md:justify-start lg:justify-start">
        <ul className="flex gap-4 lg:gap-4">
          <li>
            <Link href="https://www.facebook.com" target="_blank">
              <Facebook className="fill-current hover:fill-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com" target="_blank">
              <X className="fill-current hover:fill-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com" target="_blank">
              <Linkedin className="fill-current hover:fill-primary" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com" target="_blank">
              <Instagram className="fill-current hover:fill-primary" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
