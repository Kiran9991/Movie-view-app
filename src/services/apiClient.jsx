const apiKey = import.meta.env.VITE_API_KEY;

export default function apiClient(url) {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${apiKey}`)
}