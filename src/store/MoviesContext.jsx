import { createContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [searchData, setSearchData] = useState("");
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [pageLimit, setPageLimit] = useState(500);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [totalResults, setTotalResults] = useState(10000);
  const [isLoading, setIsLoading] = useState(false);

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

  const value = {
    searchData,
    setSearchData,
    page,
    pageLimit,
    setPageLimit,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
    show,
    setShow,
    modalContent,
    setModalContent,
    totalResults,
    setTotalResults,
    isLoading,
    setIsLoading,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesContext;
