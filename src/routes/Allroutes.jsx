import { Route, Routes } from "react-router";
import MovieList from "../components/Movies/MovieList.jsx";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/series" element={<h1>Series</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/documentry" element={<h1>documentry</h1>} />
      </Routes>
    </div>
  );
};

export default Allroutes;
