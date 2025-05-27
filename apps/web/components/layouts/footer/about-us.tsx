import { Facebook, X, Linkedin, Instagram } from "@/components/ui/icons/social";
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
