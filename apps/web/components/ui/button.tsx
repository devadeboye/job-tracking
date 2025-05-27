import { ButtonProps } from "../../types/button";
import clsx from "clsx";

export const Button = ({
	label,
	type = "button",
	variant = "primary",
	className,
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				`font-semibold px-6 py-2 rounded-sm lg:h-[48px] ${className}`,
				{
					"bg-primary text-white": variant === "primary" && !disabled,
					"bg-light-dark text-white": variant === "secondary" && !disabled,
					"bg-white text-white": variant === "tertiary" && !disabled,
					"text-dark border-0": variant === "text" && !disabled,
					"bg-gray-300 text-gray-500 cursor-not-allowed": disabled,
				}
			)}
			type={`${type}`}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
