import React, { useEffect } from 'react'
import apiClient from '../services/apiClient'

export default function HomePage() {

    async function getTrendingMoviesData(url) {
        try{
            const res = await apiClient(url);
            const data = await res.json();
            console.log(data);
        }catch(error) {
            console.log('Error: cannot getting apis data!')
        }
    }

    useEffect(() => {
        getTrendingMoviesData('trending/movie/day');
    },[])
  return (
    <div>
      Welcome to the Movies Home page
    </div>
  )
}
