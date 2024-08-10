// app/anime/[id]/page.tsx
import Image from "next/image";
import {
  FaStar,
  FaRegBookmark,
  FaPlus,
} from "react-icons/fa";
import { Anime } from "@/interfaces/Anime";
import { truncate } from "@/app/truncate";
import { fetchAnime } from "@/app/action";

const AnimeDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error("Invalid ID");
  }

  const anime = await fetchAnime(`https://api.jikan.moe/v4/anime/${id}`);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="pt-20">
        <div className="relative">
          <div className="relative w-full h-[15rem]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${anime.trailer.images.maximum_image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(7px)",
              }}
            ></div>

            <div className="relative z-10 flex justify-center items-center h-full w-[100vw]">
              <Image
                src={anime.trailer.images.maximum_image_url}
                alt={anime.title}
                width={500}
                height={800}
                className="object-cover h-full w-[25rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex mx-[15rem] my-[3rem]">
          <div className="w-2/3 pr-8">
            <h1 className="text-4xl">{anime.title_english}</h1>
            <p className="text-gray-500 text-sm font-normal animeDesc">
              Sub | Dub
            </p>
            <div className="flex items-center mt-2">
              <div className="flex gap-2 text-xl items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              &nbsp;&nbsp;|&nbsp;&nbsp; Average rating: {anime.score}
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center border-[3px] border-orange-500 hover:border-orange-400 font-semibold text-orange-500 px-4 py-2">
                <FaRegBookmark className="mr-2" /> ADD TO WATCHLIST
              </button>
              <button className="flex items-center border-none text-gray-500 tracking-tighter hover:bg-zinc-800 transition-all hover:text-white font-semibold px-4 py-2 ">
                <FaPlus className="mr-2" /> ADD TO CRUNCHY LIST
              </button>
            </div>
            <p className="mt-4">{truncate(anime.synopsis, 70)}</p>
            <div className="mt-[5rem] text-md">
              <div className="flex justify-between">
                <h1 className="text-bold   text-white">Publisher</h1>
                <h2 className="text-white">
                  {anime.producers
                    .map((publisher: { name: any; }) => publisher.name)
                    .join(", ")}
                </h2>
              </div>
              <hr className="w-full my-[1rem] " />
              <div className="flex justify-between">
                <h1 className="text-bold   text-white">Genre</h1>
                <h2 className="text-white">
                  {anime.genres.map((genre: { name: any; }) => genre.name).join(", ")}
                </h2>
              </div>
              <hr className="w-full my-[1rem] " />
              <div className="flex justify-between">
                <h1 className="text-bold   text-white">Studio</h1>
                <h2 className="text-white">
                  {anime.studios
                    .map((studio: { name: any; }) => studio.name)
                    .join(", ")}
                </h2>
              </div>
              <hr className="w-full my-[1rem] " />
            </div>
          </div>
          <div className="w-1/3 h-">
            <div className="relative">
              <iframe
                src={`${anime.trailer.embed_url}?autoplay=1`}
                className="w-full h-72 rounded-md"
              ></iframe>
              <button className="flex justify-center items-center border w-full text-center border-none bg-orange-500 text-black px-4 py-2 ">
                Start Watching E1
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnimeDetail;