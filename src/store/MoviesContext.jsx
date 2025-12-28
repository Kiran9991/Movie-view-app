import { createContext, useCallback, useReducer, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const MoviesContext = createContext();

const initialState = { page: parseInt(localStorage.getItem('page')) || 1, pageLimit: 500 };

function pageReducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, page: Math.min(state.pageLimit, state.page + 1) };

    case "PREV":
      return { ...state, page: Math.max(1, state.page - 1) };

    case "FIRST":
      return { ...state, page: 1 };

    case "LAST":
      return { ...state, page: 500 };

    case "SETLIMIT":
      return { ...state, page: 1, pageLimit: action.limit };

    case "SETPAGE":
      return { ...state, page: action.pageNo };

    default:
      return state;
  }
}


export function MoviesContextProvider({ children }) {
  const [searchData, setSearchData] = useState("");
  const [pageState, dispatch] = useReducer(pageReducer, initialState);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const MoviesData = useFetchData("discover/movie", pageState.page, searchData);

  const value = {
    searchData,
    setSearchData,
    pageState,
    dispatch,
    show,
    setShow,
    modalContent,
    setModalContent,
    moviesData: MoviesData.data.results,
    moviesDataApi: MoviesData.getDataFromApi,
    totalResults: MoviesData.data.total_results,
    isLoading: MoviesData.isLoading,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export default MoviesContext;
