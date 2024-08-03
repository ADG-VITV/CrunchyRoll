import { fetchAnime } from "./action";
import Card from "@/components/Card";
async function Home() {
  const result = await fetchAnime();
  console.log(result);

  return (
    <>
      <main className="flex flex-col w-[100vw] overflow-y-scroll">
        <div className="flex overflow-y-auto w-[200vw]">
          {result.data.map((anime: any) => (
            <Card key={anime.mal_id} img={anime.images.webp.large_image_url} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
