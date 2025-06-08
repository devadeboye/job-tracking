import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'icon';
  label: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-white text-primary border border-primary hover:bg-gray-50',
  text: 'bg-transparent text-dark hover:bg-gray-100',
  icon: 'bg-transparent hover:bg-gray-100 p-2 rounded-full',
};

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export function Button({
  className,
  variant = 'primary',
  label,
  icon,
  iconPosition = 'left',
  size = 'md',
  ...props
}: ButtonProps) {
  const isIconButton = variant === 'icon';

  return (
    <button
      className={clsx(
        !isIconButton && 'px-6 py-3 rounded-md transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isIconButton ? (
        icon
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {label}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
}
