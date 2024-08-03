export const fetchAnime = async() => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=15")
    const data = await response.json()
    return data;
}