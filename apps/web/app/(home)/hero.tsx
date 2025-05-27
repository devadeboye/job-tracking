import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={`min-h-screen box-border lg:px-20 lg:pt-36 lg:pb-30 `}
		>
			<div className="flex lg:flex-row lg:items-center lg:justify-center h-full">
				<div className="lg:w-1/2 flex flex-col gap-6 lg:gap-6 lg:pr-20 lg:h-[45vh] justify-end">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="lg:text-[56px]/[1] font-bold text-dark"
					>
						Organize Your Job Hunt, Effortlessly.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="text-foreground mb-6"
					>
						Ditch the spreadsheets. Stay organized and never miss a follow-up
						again with JobNest — your smart job application tracker.
					</motion.p>

					<div className="flex gap-4">
						<Button
							variant="primary"
							label="Start Tracking for Free"
							onClick={() => {}}
						/>

						<Button variant="text" label="How It Works" onClick={() => {}} />
					</div>
				</div>

				<div className="lg:w-1/2 lg:pl-20">
					<div className="lg:w-full">
						<Image
							src="/image-2.jpg"
							alt="background image 2"
							width={560}
							height={520}
							className="lg:w-full"
						></Image>
					</div>

					<div className="lg:h-[62%] lg:w-[21rem] lg:top-[37%] lg:left-[53.5%] z-10 absolute lg:bg-primary/10 backdrop-blur-sm"></div>

					<div className="absolute lg:h-[62%] lg:w-[21rem] lg:top-[40%] lg:left-[52%] z-10">
							<Image
								src="/image-1.jpg"
								alt="background image 1"
								width={350}
              height={420}
              className="lg:h-full lg:w-full"
							></Image>
						</div>
				</div>
			</div>
		</motion.section>
	);
}
