import Results from "@/Components/Results";
import React from "react";

const SearchPage = async ({params}) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchTerm}&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1
          className="text-4xl text-center mt-20">
          No results found
        </h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
