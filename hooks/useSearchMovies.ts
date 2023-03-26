import api from "@/utils/api";
import { useState, useEffect } from "react";

import { Movie } from "../types/Movie";

interface SearchMovies {
  loading: boolean;
  error: string | null;
  data: Movie[];
  totalResults: number;
}

const useSearchMovies = (search: string, page: number) => {
  const [result, setResult] = useState<SearchMovies>({
    loading: false,
    error: null,
    data: [],
    totalResults: 0,
  });

  useEffect(() => {
    const searchMovies = async () => {
      window.scrollTo(0, 0);
      setResult((prev) => ({ ...prev, loading: true }));
      // try {
      await api
        .get("/", {
          params: {
            s: search,
            page,
          },
        })
        .then((res) => {
          if (res.data.Response === "False") {
            throw new Error("Movie not found");
          }
          setResult({
            loading: false,
            error: null,
            data: res.data.Search,
            totalResults: parseInt(res.data.totalResults),
          });
        })
        .catch((err) => {
          setResult({
            loading: false,
            error: err.message,
            data: [],
            totalResults: 0,
          });
        });
    };

    // // setResult({
    // //   loading: false,
    // //   error: null,
    // //   data: response.data.Search,
    // //   totalResults: parseInt(response.data.totalResults),
    // // });
    // } catch (error) {
    //   console.log("Error MEssage", JSON.stringify(error));
    // }

    if (search) {
      searchMovies();
    }
  }, [search, page]);

  return result;
};

export default useSearchMovies;
