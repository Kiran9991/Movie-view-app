import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [searchData, setSearchData] = useState("");
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [pageLimit, setPageLimit] = useState(500);
  const [totalResults, setTotalResults] = useState(10000);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const setNextPage = () => {
    page < pageLimit && setPage(page + 1);
  };

  const setPrevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(pageLimit);
  };

  const getSearchMoviesData = async () => {
    setIsLoading(true);
    try {
      const res = await apiClient(`search/movie`, searchData, page);
      const data = await res.json();
      data.total_pages <= 500 && setPageLimit(data.total_pages);
      setTotalResults(data.total_results);
      setFilteredMoviesData(data.results);
    //   console.log("Searched data ->",searchData, data);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log(`Error: Not getting Data`, error);
    }
    setIsLoading(false);
  };

  async function getMovieDataApi() {
    setIsLoading(true);
    try {
      const res = await apiClient(`discover/movie`, '', page);
      const data = await res.json();
    //   console.log('data from all', data);;
      setFilteredMoviesData(data.results);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log("Error when loading movies", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    // console.log('searchData>>', searchData)
    searchData.length > 0 ? getSearchMoviesData() : getMovieDataApi();
  }, [page]);

  const value = {
    filteredMoviesData,
    searchData,
    setSearchData,
    page,
    pageLimit,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
    isLoading,
    getMovieDataApi,
    getSearchMoviesData,
    totalResults,
    show,
    setShow,
    modalObj,
    setModalObj
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesContext;
