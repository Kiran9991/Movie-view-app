import React, { createContext } from 'react'
import useFetchData from '../hooks/useFetchData';

const TvShowsConstext = createContext();

export function TvShowsContextProvider({ children }) {
      const { data, isLoading } = useFetchData("discover/tv");

    const value = {
        tvShowsData: data.results,
        isLoading,
        totalResults: data.total_results
    }

  return (
    <TvShowsConstext.Provider value={value}>
        {children}
    </TvShowsConstext.Provider>
  )
}

export default TvShowsConstext;
