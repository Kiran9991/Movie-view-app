import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";

export default function apiClient(url, page=1) {
    const apiKey = import.meta.env.VITE_API_KEY;
    // const { page } = useContext(MoviesContext);
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${apiKey}&page=${page}`)
}