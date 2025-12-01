import { createContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [moviesData, setMoviesData] = useState([]);

  const getMoviesData = (movies) => {
    setMoviesData([...movies]);
  };

  const addMovie = (movie) => {
    setMoviesData((prev) => [...prev, movie]);
  };

  const value = { moviesData, getMoviesData, addMovie };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}

export default MoviesContext;
