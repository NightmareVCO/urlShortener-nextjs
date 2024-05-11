import React from "react";

type ButtonProperties = {
  id?: string;
  type?: "email" | "password" | "text";
  name?: string;
  placeholder?: string;
  className?: string;
  shadow?: boolean; // Add a shadow prop
  onChange?: () => void;
};

const InputButton = ({
  className,
  shadow,
  ...properties
}: ButtonProperties) => {
  return (
    <input
      required
      className={`bg-main-gray border-2 border-solid border-main-gray-border w-96 py-3 px-6 focus:outline-none caret-main-pink rounded-full ${shadow ? "shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px" : ""} ${className}`}
      {...properties}
    ></input>
  );
};

export default InputButton;
