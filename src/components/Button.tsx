import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...props }: IButtonProps) {
  return (
    <>
      <button
        {...props}
        className={`px-6 py-2 min-w-[120px] text-center text-white bg-secondary2 border border-secondary2 rounded hover:bg-transparent hover:text-secondary2 focus:outline-none focus:ring ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
