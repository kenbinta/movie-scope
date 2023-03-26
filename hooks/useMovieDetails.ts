import api from "@/utils/api";
import { useState, useEffect } from "react";
import { MovieDetails } from "../types/Movie";

interface MovieDetailsResult {
  loading: boolean;
  error: string | null;
  data: MovieDetails | null;
}

const useMovieDetails = (id: string) => {
  const [result, setResult] = useState<MovieDetailsResult>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setResult((prev) => ({ ...prev, loading: true }));
      try {
        const response = await api.get("/", {
          params: {
            i: id,
          },
        });
        if (response.data.Response === "False") {
          throw new Error("Movie not found");
        }
        
        setResult({
          loading: false,
          error: null,
          data: response.data,
        });
      } catch (error) {
        setResult({
          loading: false,
          // @ts-ignore
          error: error.message,
          data: null,
        });
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  return result;
};

export default useMovieDetails;
