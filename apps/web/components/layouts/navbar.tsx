"use client";

import { lexend } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useLayout } from "@/contexts/layout-context";

export const Navbar = () => {
	const { isScrolled, isHome } = useLayout();

	return (
		<nav
			className={`lg:px-20 lg:w-full transition-all duration-300 ease-in-out ${
				isScrolled || !isHome
					? "fixed top-0 bg-white/80 backdrop-blur-sm shadow-lg lg:py-2 lg:z-50 border-b border-gray-200"
					: "fixed top-0 bg-transparent lg:py-4"
			}`}
		>
			<div className="lg:flex lg:flex-row lg:h-[80px] lg:items-center">
				<div className="lg:w-1/4">
					<div
						className={`${lexend.className} antialiased font-bold text-dark lg:text-3xl`}
					>
						<span className="text-primary">Job</span>Nest
					</div>
				</div>

				<div className={`${lexend.className} lg:px-9 lg:w-2/4`}>
					<ul className="lg:flex lg:flex-row lg:gap-10 lg:font-medium">
						<Link href={"/"}>
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

				<div className="lg:w-1/4">
					<div className="lg:flex lg:gap-5 lg:justify-end lg:items-center">
						<Button className="" label="Sign In" onClick={() => {}} />

						<Button variant="secondary" label="Sign Up" onClick={() => {}} />
					</div>
				</div>
			</div>
		</nav>
	);
};
