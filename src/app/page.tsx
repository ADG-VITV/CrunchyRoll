import { fetchAnime } from "./action";
import Card from "@/components/Card";

interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  url: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  title_english: string;
}

async function Home() {
  const result = await fetchAnime();
  console.log(result);

  return (
    <>
      <main className="flex flex-col w-[100vw] overflow-y-scroll">
        <div className="flex overflow-y-auto w-[250vw] m-[4rem] bg-black">
          {result.data.map((anime: Anime) => (
            <Card key={anime.mal_id} img={anime.images.webp.large_image_url} name={anime.title_english}/>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
