import React, { useContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import MoviesContext from "../store/MoviesContext";

export default function useMoviesList() {
  const { searchData, setPageLimit, page } = useContext(MoviesContext);
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(10000);

  async function getMoviesData(url) {
    setIsLoading(true);
    try {
      const res = await apiClient(url, page, searchData);
      const data = await res.json();
      data.total_pages <= 500 && setPageLimit(data.total_pages);
      data.totalResults <= 10000 && setTotalResults(data.total_results);
      setMoviesData(data.results);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log("Error: Not getting movies data", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    let url = searchData.length > 0 ? "search/movie" : "discover/movie";
    getMoviesData(url);
  }, [page, searchData]);

  return { moviesData, isLoading, totalResults, getMoviesData };
}
