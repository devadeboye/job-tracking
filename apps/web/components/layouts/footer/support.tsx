import Link from "next/link";

export const Support = () => { 
  return (
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
	);
}