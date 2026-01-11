import { Route, Routes } from "react-router";
import MoviePage from "../pages/MoviePage";
import TvShowPage from "../pages/TvShowPage";
import HomePage from "../pages/HomePage";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie" element={<MoviePage />}>
        <Route path="popular" element={<MoviePage />} />
        <Route path="now_playing" element={<MoviePage />} />
        <Route path="top_rated" element={<MoviePage />} />
        <Route path="upcoming" element={<MoviePage />} />
      </Route>
      <Route path="/tv-shows" element={<TvShowPage />} />
      <Route path="/documentry" element={<h1>documentry</h1>} />
      <Route path="/about" element={<h1>about</h1>} />
    </Routes>
  );
};

export default Allroutes;
