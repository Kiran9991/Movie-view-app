export default function apiClient(url, searchInput, page=1) {
  const apiKey = import.meta.env.VITE_API_KEY;
  return fetch(
    `https://api.themoviedb.org/3/${url}?api_key=${apiKey}&query=${searchInput}&page=${page}`
  );
}
