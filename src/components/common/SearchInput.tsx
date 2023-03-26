import React, { useState } from "react";
import SearchIcon from "../../../icons/SearchIcon";

interface SearchInputProps {
  onSubmit: (searchQuery: string) => void;
}
export default function SearchInput({ onSubmit }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.length < 3) return alert("Please enter at least 3 characters");
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input autoComplete="off" type="search" name="search" className="search-input" placeholder="Search Movies by Title" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="custom-button">
          Search
        </button>
      </div>
    </form>
  );
}
