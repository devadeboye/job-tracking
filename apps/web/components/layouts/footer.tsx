'use client'

import { lexend } from "@/lib/fonts";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "../ui/icons/social";
import { Send } from "../ui/icons/general";

export const Footer = () => { 
  return (
		<footer className="lg:px-20">
			<div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-10 container border-b border-gray-200 py-20">
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

				<div>
					<h1 className="text-dark text-2xl font-bold">Company</h1>
					<ul className="flex flex-col gap-2 mt-4">
						<li>
							<Link href="#" className="hover:text-primary">
								Home
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-primary">
								Products
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-primary">
								Careers
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-primary">
								Pricing
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h1 className="text-dark text-2xl font-bold">Support</h1>
					<ul className="flex flex-col gap-2 mt-4">
						<li>
							<Link href="#" className="hover:text-primary">
								Company
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-primary">
								Press media
							</Link>
						</li>
						<li>
							<Link href="/blog" className="hover:text-primary">
								Our Blog
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-primary">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h1 className="text-dark text-2xl font-bold">Get in touch</h1>
					<ul className="flex flex-col gap-2 mt-4">
						<li>
							<p>Toll Free Customer Care</p>
							<Link
								href="tel:+2347067396219"
								className="text-dark hover:text-primary"
							>
								+234 706 739 6219
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h1 className="text-dark text-2xl font-bold">Newsletter</h1>
					<p className="mt-4">Subscribe to receive future updates.</p>
					<form className="mt-4">
						<div className="flex w-full border border-gray-300 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-2 border-none focus:outline-none rounded"
							/>
							<button
								type="submit"
								className="p-2 border-none rounded focus:outline-none"
                onClick={() => { }}
							>
								<Send className="fill-current" />
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="container mx-auto flex items-center justify-center flex-col gap-4 py-6">
				<p className="text-gray-600">
					&copy; {new Date().getFullYear()} JobNest. All rights reserved.
				</p>
			</div>
		</footer>
	);
}