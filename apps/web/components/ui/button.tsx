import { ButtonProps } from "../../types/button";
import clsx from "clsx";


/**
 * A customizable button component that supports different variants and states
 * @param {Object} props - The component props
 * @param {string} props.label - The text to display inside the button
 * @param {("button"|"submit"|"reset")} [props.type="button"] - The HTML button type
 * @param {("primary"|"secondary"|"tertiary"|"text")} [props.variant="primary"] - The visual style variant
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {() => void} props.onClick - Click event handler
 * @returns {JSX.Element} A styled button component
 */
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
