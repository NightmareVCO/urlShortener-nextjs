"use client";

import CopyIcon from "@icons/CopyIcon";
import React from "react";

type CopyButtonProperties = {
  children?: React.ReactNode;
  text: string;
};

const handleCopy = (text: string) => {
  "use client";
  navigator.clipboard.writeText(text);
};

const CopyButton = ({ text }: CopyButtonProperties) => {
  return (
    <button onClick={() => handleCopy(text)}>
      <CopyIcon />
    </button>
  );
};

export default CopyButton;
