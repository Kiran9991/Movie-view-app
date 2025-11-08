import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        if(Array.isArray(movie)) {
            setMovies([...movie]);    
        }else {
            setMovies((prev) => [...prev, movie]);
        }
    };

    const value = { movies, addMovie };

    return <AppContext.Provider>{children}</AppContext.Provider>
}

export default AppContext;