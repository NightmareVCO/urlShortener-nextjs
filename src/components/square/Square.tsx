import React from "react";

type SquareProperties = {
  children: React.ReactNode;
};

const Square = ({ children }: SquareProperties) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[450px] min-h-[450px] p-1 shadow-xl sm:p-14 md:p-20 w-fit gap-y-8 rounded-3xl bg-background-gray-translucent">
      {children}
    </div>
  );
};

export default Square;
