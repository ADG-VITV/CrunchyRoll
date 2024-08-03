// src/app/page.tsx
'use client'
import Swiper from "@/components/Carousel";
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
  trailer: {
    youtube_id: string,
      url: string,
      embed_url: string,
      images: {
        image_url: string,
        small_image_url: string,
        medium_image_url: string,
        large_image_url: string,
        maximum_image_url: string
      }
    },
  title_english: string;
}

const Home: React.FC = async() => {

  const mostViewedAnime = await fetchAnime("https://api.jikan.moe/v4/top/anime?limit=6")

  return (
    <>
      <Swiper items={mostViewedAnime.data} />
      <main className="flex flex-col w-[100vw] overflow-y-scroll">
        <div className="flex overflow-y-auto w-[250vw] m-[4rem] bg-black gap-x-2">
          {mostViewedAnime.data.map((anime: Anime) => (
            <Card
              key={anime.mal_id}
              img={anime.images.webp.large_image_url}
              name={anime.title_english}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
