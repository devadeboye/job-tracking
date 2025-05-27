'use client'

import { Newsletter } from "./newsletter";
import { Support } from "./support";
import { Company } from "./company";
import { AboutUs } from "./about-us";
import { GetInTouch } from "./get-in-touch";

export const Footer = () => { 
  return (
		<footer className="lg:px-20">
			<div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-10 container border-b border-gray-200 py-20">
				<AboutUs />

				<Company  />

				<Support  />

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
}