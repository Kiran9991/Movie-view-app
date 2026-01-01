import { Route, Routes } from "react-router";
import MoviePage from "../pages/MoviePage";
import TvShowPage from "../pages/TvShowPage";
import HomePage from "../pages/HomePage";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/tv-shows" element={<TvShowPage />} />
        <Route path="/documentry" element={<h1>documentry</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>
    </div>
  );
};

export default Allroutes;
