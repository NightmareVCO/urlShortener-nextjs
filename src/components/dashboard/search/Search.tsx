"use client";

import SearchIcon from "@icons/Dashboard/SearchIcon";

import { useSearch } from "./hook/useSearch";

type SearchProperties = {
  placeholder: string;
};

const Search = ({ placeholder }: SearchProperties) => {
  const { handleSearch } = useSearch();

  return (
    <div className="flex items-center justify-center p-2 rounded-lg gap-x-2 bg-main-gray-border">
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        className="w-40 bg-transparent border-none text-main-dark-white focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
