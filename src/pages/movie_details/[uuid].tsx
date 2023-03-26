import CustomHead from "@/components/common/CustomHead";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useMovieDetails from "../../../hooks/useMovieDetails";

const MovieDetails = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const { loading, error, data: movie } = useMovieDetails(uuid as any);

  if (loading)
    return (
      <div className="custom-container pt-8">
        <p className="custom-loading-text"> Loading...</p>
      </div>
    );
  if (error && !loading)
    return (
      <div className="custom-container pt-8">
        <p className="custom-loading-text"> {error}</p>;
      </div>
    );
  if (movie === null && !loading) {
    return (
      <div className="custom-container pt-8">
        <p className="custom-loading-text">Movie not found</p>;
      </div>
    );
  }
  if (movie && !loading)
    return (
      <>
        <CustomHead title={movie.Title} description="Single Movie Page showing movie details" />
        <div className="custom-container">
          <div className="container mx-auto py-4 lg:py-16 px-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="col-span-1 mx-auto ">
                <Image width={500} height={200} src={movie.Poster === "N/A" ? "/no_image.png" : movie.Poster} alt={movie.Title} />
              </div>
              <div className="col-span-1 text-primary-900 dark:text-primary-200">
                <h1 className="text-3xl font-bold text-primary-800 dark:text-primary-200">{movie.Title}</h1>
                <p className="text-primary-700 dark:text-primary-200">{movie.Genre}</p>
                <p className="text-primary-700 dark:text-primary-200">{movie.Year}</p>
                <div className="my-4">
                  <h2 className="text-xl font-bold">Plot</h2>
                  <p>{movie.Plot}</p>
                </div>
                <div className="my-4">
                  <h2 className="text-xl font-bold">Director</h2>
                  <p>{movie.Director}</p>
                </div>
                <div className="my-4">
                  <h2 className="text-xl font-bold">Writer</h2>
                  <p>{movie.Writer}</p>
                </div>
                <div className="my-4">
                  <h2 className="text-xl font-bold">Actors</h2>
                  <p>{movie.Actors}</p>
                </div>
                <div className="my-4">
                  <h2 className="text-xl font-bold">Ratings</h2>
                  {movie.Ratings?.map((rating: any) => (
                    <p key={rating.Source}>
                      {rating.Source}: {rating.Value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default MovieDetails;
