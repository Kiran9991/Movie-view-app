export default function apiClient(url, page=1, country='', language='', searchInput='') {
  const apiKey = import.meta.env.VITE_API_KEY;
  return fetch(
    `https://api.themoviedb.org/3/${url}?api_key=${apiKey}&include_video=true&language=en-Us&query=${searchInput}&page=${page}&sort_by=popularity.desc&with_origin_country=${country}&with_original_language=${language}`
  );
}


