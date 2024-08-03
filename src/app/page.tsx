import { fetchAnime } from "./action";
import Card from "@/components/Card"
async function Home() {
  const result = await fetchAnime();
  console.log(result);

  return (
    <>
    <h1>CrunchyRoll</h1>
    <main className="flex flex-col w-[100vw] overflow-y-scroll">
      <div className="flex overflow-y-auto w-[200vw]">
        {result.data.map((anime: any) => (
          // <div key={anime.mal_id} className="w-[35rem]">
          //   <p>{anime.mal_id}</p>
          //   <img src={anime.images.webp.large_image_url} alt="anime logo" className="w-full h-80"/>
          // </div>
          <Card key={anime.mal_id}  img={anime.images.webp.large_image_url}/>
        ))}
      </div>
      
    </main>
    </>
  );
}

export default Home;
