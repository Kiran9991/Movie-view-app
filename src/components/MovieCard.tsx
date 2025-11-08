import React, { useState, useEffect } from 'react'

export default function MovieCard() {
  let [card, setCard] = useState();
     const apiKey = import.meta.env.VITE_API_KEY;

  async function fetchPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log("results",data.results[0]);
    setCard(data.results[0]);
  } catch (error) {
    console.error(error);
  }
}

// useEffect(() => {
//   fetchPopularMovies();
//   console.log(card)
// },[card])


  return (
    <div className='flex flex-col items-center justify-between
       bg-amber-300 h-[400px] w-80 rounded-md'>
        <div className='bg-amber-50 h-[70%] w-full'>img</div>
        <div className='h-[10%] w-[80%]'>title</div>
        <div className='h-[10%] w-[80%]'>description</div>
    </div>
  )
}
