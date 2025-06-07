import { ButtonProps } from '../../types/button';
import clsx from 'clsx';

export const Button = ({
  label,
  type = 'button',
  variant = 'primary',
  className,
  disabled = false,
  onClick = () => {},
  icon,
  iconPosition = 'left',
  size = 'md',
}: ButtonProps) => {
  const buttonClasses = clsx(
    `font-semibold rounded-sm transition-all duration-300 ease-in-out ${className}`,
    {
      // Size variants
      'px-6 py-2 lg:h-[48px]': size === 'md' && variant !== 'icon',
      'px-4 py-1 text-sm': size === 'sm' && variant !== 'icon',
      'px-8 py-3 text-lg': size === 'lg' && variant !== 'icon',
      'p-2': variant === 'icon' && size === 'sm',
      'p-3': variant === 'icon' && size === 'md',
      'p-4': variant === 'icon' && size === 'lg',

      // Color variants
      'bg-primary text-white hover:bg-primary/90': variant === 'primary' && !disabled,
      'bg-light-dark text-white hover:bg-light-dark/90': variant === 'secondary' && !disabled,
      'bg-white text-white hover:bg-white/90': variant === 'tertiary' && !disabled,
      'text-dark border-0 hover:text-primary': variant === 'text' && !disabled,
      'bg-transparent hover:bg-gray-100': variant === 'icon' && !disabled,
      'bg-gray-300 text-gray-500 cursor-not-allowed': disabled,

      // Icon positioning classes
      'flex items-center gap-2': icon && variant !== 'icon',
      'flex-row-reverse': icon && iconPosition === 'right' && variant !== 'icon',
    }
  );

  return (
    <button className={buttonClasses} type={type} onClick={onClick} disabled={disabled}>
      {variant === 'icon' ? (
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
};
