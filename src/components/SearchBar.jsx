import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search books..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full mb-2"
    />
  );
};

export default SearchBar;
