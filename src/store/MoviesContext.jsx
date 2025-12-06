import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const MoviesContext = createContext();

// Sample object in moviesData arr of obj
// adult: false
// backdrop_path: "/5h2EsPKNDdB3MAtOk9MB9Ycg9Rz.jpg"
// genre_ids: (5) [16, 10751, 35, 12, 9648]
// id: 1084242
// original_language: "en"
// original_title: "Zootopia 2"
// overview: "After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De’Snake arrives and turns the animal metropolis upside down. To crack the case, Judy and Nick must go undercover to unexpected new parts of town, where their growing partnership is tested like never before."
// popularity: 588.0777
// poster_path: "/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg"
// release_date: "2025-11-26"
// title: "Zootopia 2"
// video: false
// vote_average: 7.668
// vote_count: 247

export function MoviesContextProvider({ children }) {
  const [moviesData, setMoviesData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  
    useEffect(() => {
      async function getMovieDataApi() {
        try { 
          const res = await apiClient(`discover/movie`);
          const data = await res.json();
          console.log(data)
          setMoviesData(data.results);
          setFilteredMoviesData(data.results);
        } catch (error) {
          console.log("Error when loading movies", error);
        }
      }
      getMovieDataApi();
    }, []);

    useEffect(() => {
        setFilteredMoviesData(moviesData.filter((item) => {
            const title = item.title.toLowerCase();
            const search = searchData.toLowerCase();
            return title.includes(search);
        }))
    },[searchData])

  const getMoviesData = (movies) => {
    setMoviesData([...movies]);
  };

  const addMovie = (movie) => {
    setMoviesData((prev) => [...prev, movie]);
  };

  const value = { 
      moviesData, 
    filteredMoviesData, 
    getMoviesData, 
    addMovie,
    searchData,
    setSearchData
 };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}

export default MoviesContext;
