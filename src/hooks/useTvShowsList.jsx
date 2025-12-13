import React, { useContext, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import MoviesContext from "../store/MoviesContext";

export default function useTvShowsList() {
  const { searchData, page, setPageLimit, setTotalResults, setIsLoading } =
    useContext(MoviesContext);
  const [tvShowsList, setTvShowsList] = useState([]);

  async function getTvShowsData(url) {
    setIsLoading(true);
    try {
      const res = await apiClient(url, page, searchData);
      const data = await res.json();
      data.total_pages <= 500 && setPageLimit(data.total_pages);
      data.totalResults <= 10000 && setTotalResults(data.total_results);
      setTvShowsList(data.results);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log(`Error: Not getting Tv shows data`, error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    let url = searchData.length > 0 ? "search/tv" : "discover/tv";
    getTvShowsData(url);
  }, [page, searchData]);

  return { tvShowsList, getTvShowsData };
}
