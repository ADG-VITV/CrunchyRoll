export const fetchAnime = async(url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    const animeList = data.data;
    return animeList;
}