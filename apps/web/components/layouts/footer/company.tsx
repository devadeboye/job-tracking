import Link from "next/link";

export const Company = () => { 
  return (
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
	);
}