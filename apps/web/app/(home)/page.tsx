"use client";

import { useLayout } from "@/contexts/layout-context";
import clsx from "clsx";
import Hero from "./hero";
import { CoreFeatures } from "./core-features";

export default function Home() {
	const { isScrolled } = useLayout();
	return (
		<div
			className={clsx(
				"lg:static lg:bg-[radial-gradient(at_top_right,_rgba(74,108,247,0.25)_0%,_white_50%,_rgba(74,108,247,0.25)_100%)]",
				{ "relative z-0": isScrolled }
			)}
		>
			<Hero />
			<CoreFeatures />
		</div>
	);
}
