import React from "react";

type Heading2Properties = {
  children: React.ReactNode;
};

const Heading2 = ({ children }: Heading2Properties) => {
  return (
    <h2 className="text-xl font-light text-start text-main-dark-white">
      {children}
    </h2>
  );
};

export default Heading2;
