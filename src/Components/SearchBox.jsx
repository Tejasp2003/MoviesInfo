"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchTerm) return;
    router.push(`/search/${searchTerm}`);

  }
  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handleSubmit}>
      <input
      value={searchTerm}
        type="text"
        placeholder="Search for a movie..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent "
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400 flex-1"
        disabled={!searchTerm}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
