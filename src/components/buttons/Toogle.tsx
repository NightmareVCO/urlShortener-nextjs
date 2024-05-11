import React from "react";

type ToogleProperties = {
  children: React.ReactNode;
};

const Toogle = ({ children }: ToogleProperties) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6  rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="text-sm ms-3 font-mediumtext-gray-300">{children}</span>
    </label>
  );
};

export default Toogle;
