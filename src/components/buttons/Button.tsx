import React from "react";

type ButtonProperties = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  shadow,
  disabled,
  ...properties
}: ButtonProperties) => {
  return (
    <button
      disabled={disabled}
      className={`w-fit border border-solid rounded-full px-6 py-2 md:py-3 transition hover:scale-105 ${shadow ? "shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.20)]" : ""} ${className}`}
      {...properties}
    >
      <p className={disabled ? "opacity-50" : ""}>{children}</p>
    </button>
    // Conditionally add 'shadow' class based on shadow prop
  );
};

export default Button;
