import { JSX } from "react";
import { motion } from "framer-motion";

interface FeatureProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Feature = ({title, description, icon}: FeatureProps) => {
	return (
		<motion.div
			variants={itemVariants}
			className="group text-center lg:flex lg:flex-col lg:gap-6 lg:items-center hover:scale-105"
		>
			<div
				className="bg-primary/5 group-hover:bg-primary rounded-full p-6 lg:w-20 lg:h-20 lg:mb-6 flex items-center justify-center transition-colors duration-300"
				aria-hidden="true"
			>
				{icon}
			</div>
			<h3 className="font-bold lg:text-dark text-2xl">{title}</h3>
			<p>{description}</p>
		</motion.div>
	);
};