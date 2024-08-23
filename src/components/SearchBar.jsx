// SearchBar.js
import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-2 rounded-l-md"
        />
        <button
          onClick={() => console.log("search for:", search)}
          className="ml-2 p-2 bg-purple-600 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
