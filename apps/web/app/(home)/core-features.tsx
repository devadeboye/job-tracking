import { Feature } from "./feature";
import { Calendar, Chart, ChatPie, Group, Pencil, Stack } from "../../components/ui/icons/features";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const CoreFeatures = () => {
  return (
		<section className="min-h-screen lg:px-20 lg:py-20 lg:w-full lg:bg-white">
			<div className="lg:w-1/2 lg:text-center lg:flex lg:flex-col lg:m-auto lg:gap-6 lg:pb-6">
				<h2 className="lg:text-5xl lg:font-bold lg:text-dark">
					Our Unique & Powerful Core Features
				</h2>
				<p>Stay focused. Stay organized. Land your dream job.</p>
			</div>

			<motion.div 
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.3 }} className="lg:grid lg:grid-cols-3 lg:gap-32 lg:mt-10 lg:w-full lg:m-auto">
				<Feature
					icon={
						<Chart className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Track Every Application"
					description="Easily manage all your job applications in one place — see where you’ve
				applied, interview stages, and what's pending. No more messy
				spreadsheets."
				/>
				<Feature
					icon={
						<Stack className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Organize Resumes"
					description="Store and attach tailored resumes and cover letters to each job — streamline your workflow and increase your chances of standing out."
				/>
				<Feature
					icon={
						<Calendar className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Automated Reminders"
					description="Never miss a follow-up again. Get smart reminders for interviews, deadlines, and recruiter replies — all in one dashboard."
				/>

				<Feature
					icon={
						<Pencil className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Personal Notes & Insights"
					description="Jot down impressions, interview tips, or recruiter feedback for each job. Build a personal job-hunting knowledge base to sharpen your strategy over time."
				/>
				<Feature
					icon={
						<ChatPie className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Application Analytics"
					description="Visualize your progress with application stats, response rates, and interview conversions — identify what’s working and double down on it."
				/>
				<Feature
					icon={
						<Group className="stroke-primary fill-primary group-hover:stroke-white group-hover:fill-white w-12 h-12 transition-colors duration-300" />
					}
					title="Collaborate with Coaches"
					description="Share your job pipeline with a mentor or career coach for feedback and accountability — job searching doesn’t have to be lonely.

"
				/>
			</motion.div>
		</section>
	);
 }