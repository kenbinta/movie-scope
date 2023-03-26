import CustomHead from "@/components/common/CustomHead";
import MovieCard from "@/components/common/MovieCard";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import useSearchMovies from "../../hooks/useSearchMovies";
import SearchIcon from "../../icons/SearchIcon";

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { loading, error, data, totalResults } = useSearchMovies(searchQuery, currentPage);

  const handleMovieClick = (id: string) => {
    router.push(`/movie_details/${id}`);
  };
  const handleSubmit = (query: string) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };
  return (
    <>
      <CustomHead title="Search page" description="Welcome to Movie Scope" />
      <div className="bg-primary-300 dark:bg-primary-900 py-16 lg:py-24 ">
        <div className=" mx-4 md:w-[900px] md:mx-auto">
          <SearchInput onSubmit={handleSubmit} />
          {totalResults > 0 && <div className="text-primary-700 dark:text-primary-200">Found {totalResults} Results </div>}
        </div>
      </div>
      <div className="custom-container">
        <div className="container mx-auto py-16 px-4 ">
          {loading && <p className="custom-loading-text">Loading ...</p>}
          {error && !loading && <p className="custom-loading-text"> {error}</p>}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {data.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} onClick={() => handleMovieClick(movie.imdbID)} />
                ))}
              </div>
              {totalResults > 10 && <Pagination currentPage={currentPage} maxPage={Math.ceil(totalResults / itemsPerPage)} onPageChange={setCurrentPage} />}
            </>
          )}
        </div>
      </div>
    </>
  );
}
