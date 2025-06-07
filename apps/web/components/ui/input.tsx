import { InputHTMLAttributes } from 'react';

export function Input({
  className,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string; errorMessage?: string }) {
  const { errorMessage } = props;
  return (
    <>
      <label className="text-sm text-gray-500 font-bold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={`w-full h-11 py-6 border-2 border-transparent border-b-gray-100 focus:outline-none focus:border-b-primary ${className || ''}`}
        {...props}
      />
      <p className="text-sm text-red-500">{errorMessage}</p>
    </>
  );
}
