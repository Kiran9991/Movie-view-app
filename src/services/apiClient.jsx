export default function apiClient(url, options = {}) {
  const {
    page = 1,
    searchInput = "",
    sortBy = "popularity.desc",
    country = "",
    language = "",
  } = options;

  const apiKey = import.meta.env.VITE_API_KEY;

  const params = new URLSearchParams({
    api_key: apiKey,
    include_video: true,
    language: "en-US",
    query: searchInput,
    page,
    sort_by: sortBy,
    with_origin_country: country,
    with_original_language: language,
  });

  return fetch(`https://api.themoviedb.org/3/${url}?${params.toString()}`);
}
