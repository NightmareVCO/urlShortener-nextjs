import React, { ReactNode } from "react";

type SectionProperties = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProperties) => {
  return <section className={`flex ${className}`}>{children}</section>;
};

export default Section;
