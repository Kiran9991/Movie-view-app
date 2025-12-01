import { Route, Routes } from "react-router";
import MovieDetailsPage from "../components/MovieDetailsPage.jsx";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movie" element={<MovieDetailsPage />} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/documentry" element={<h1>documentry</h1>} />
      </Routes>
    </div>
  );
};

export default Allroutes;
