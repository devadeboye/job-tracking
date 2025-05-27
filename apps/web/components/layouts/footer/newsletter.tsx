import { Send } from "@/components/ui/icons/general";

export const Newsletter = () => { 
  return(
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
						onClick={() => {}}
					>
						<Send className="fill-current" />
					</button>
				</div>
			</form>
		</div>
	);
}