export default function apiClient(url, page=1, searchInput='') {
  const apiKey = import.meta.env.VITE_API_KEY;
  return fetch(
    `https://api.themoviedb.org/3/${url}?api_key=${apiKey}&include_video=true&language=en-Us&query=${searchInput}&page=${page}&sort_by=popularity.desc`
  );
}


