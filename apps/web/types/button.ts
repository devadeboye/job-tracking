export interface ButtonProps {
	label: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary" | "tertiary" | "text";
}