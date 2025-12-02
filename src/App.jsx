import Allroutes from "./routes/Allroutes.jsx";
import MainNavBar from "./components/MainNavbar.jsx";
import { useContext, useEffect } from "react";
import MoviesContext from "./store/MoviesContext.jsx";
import { Stack, Button } from "react-bootstrap";

function App() {
  const movieContext = useContext(MoviesContext);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function getMovieDataApi() {
      try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        movieContext.getMoviesData(data.results);
      } catch (error) {
        console.log("Error when loading movies", error);
      }
    }
    getMovieDataApi();
  }, []);

  return (
    <>
      <MainNavBar />
      <Allroutes />
    </>
  );
}

export default App;
