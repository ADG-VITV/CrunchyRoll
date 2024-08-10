export const fetchAnime = async(url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    // const animeList = data.data;
    // return animeList;
    if(data) return data.data;
    return [];
}
export const reverseFetchAnime = async(url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    // const animeList = data.data;
    // console.log("----------------------------------------------------------");
    // console.log(animeList);
    // return animeList.reverse() || [];
    if(data) return data.data.reverse();
    return [];
}