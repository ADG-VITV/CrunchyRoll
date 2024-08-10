// app/anime/[id]/page.tsx
import Image from "next/image";
import { FaStar, FaRegBookmark, FaPlus } from "react-icons/fa";
import { Anime } from "@/interfaces/Anime";
import { truncate } from "@/app/truncate";
import { fetchAnime } from "@/app/action";
import Banner from "./Banner";
import Footer from "@/components/Footer";
import Media from "@/app/anime/[id]/Media";
import Details from "@/app/anime/[id]/Details";
import { defaultApi } from "@/app/defaultApi";

const AnimeDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error("Invalid ID");
  }

  const anime: Anime =
    (await fetchAnime(`https://api.jikan.moe/v4/anime/${id}`)) || defaultApi;

  return (
    <>
      <Banner image={anime.trailer.images.maximum_image_url} key={id} />
      <Media anime={anime} key={id} />
      <Details anime={anime} key={id} />
      <Footer key={id} />
    </>
  );
};

export default AnimeDetail;
