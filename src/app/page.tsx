// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Swiper from "@/components/Carousel";
import { fetchAnime } from "./action";
import Card from "@/components/Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const Home: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAnime();
      console.log("Fetched anime:", result.data); // Debug log
      setAnimes(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper items={animes} />
      <main className="flex flex-col w-[100vw] overflow-y-scroll">
        <div className="flex overflow-y-auto w-[250vw] m-[4rem] bg-black">
          {animes.map((anime) => (
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
