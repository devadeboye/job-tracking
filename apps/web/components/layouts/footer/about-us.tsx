import { Facebook, Twitter, Linkedin, Instagram } from "@/components/ui/icons/social";
import { lexend } from "@/lib/fonts";
import Link from "next/link";

export const AboutUs = () => { 
  return (
		<div className="flex lg:flex-col lg:gap-10">
			<div
				className={`${lexend.className} antialiased font-bold text-dark lg:text-3xl`}
			>
				<span className="text-primary">Job</span>Nest
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div>
				<ul className="flex gap-4">
					<li>
						<Link href="#">
							<Facebook className="fill-current hover:fill-primary" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Twitter className="fill-current hover:fill-primary" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Linkedin className="fill-current hover:fill-primary" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Instagram className="fill-current hover:fill-primary" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}