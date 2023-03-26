import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MovieCardProps } from "../../../types/Movie";

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div className="bg-white dark:bg-primary-700 rounded-lg overflow-hidden shadow-lg hover:grayscale " onClick={onClick}>
      <Image src={movie.Poster === "N/A" ? "/no_image.png" : movie.Poster} alt={movie.Title} width={300} height={450} className="" />

      <div className="p-4">
        <Link className="font-bold text-lg mb-2 text-primary-700 dark:text-primary-300 dark:hover:text-white hover:text-primary-500" href={`/movie_details/${movie.imdbID}`}>
          {movie.Title}
        </Link>
        <p className="text-priamry-700 dark:text-primary-300 text-base">
          Year: {movie.Year} | ID: {movie.imdbID} | Type: {movie.Type}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
