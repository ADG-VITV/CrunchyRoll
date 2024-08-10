import {FaRegBookmark } from "react-icons/fa";
import { LuPlay } from "react-icons/lu";

import { Anime } from "@/interfaces/Anime";
import { truncate } from "@/app/truncate";
import Link from "next/link";
interface SpecialProps {
  apicall: Anime;
}

const Special: React.FC<SpecialProps> = ({ apicall }) => {
  const truncatedDescription = truncate(apicall.synopsis, 50);

  return (
    <section className="w-[calc(100vw-8rem)] h-[25rem] flex justify-between my-16 mx-auto text-white">
      <div className="w-[50%] mr-8">
        {apicall.trailer?.images?.medium_image_url && (
          <Link href={`/anime/${apicall.mal_id}`}>
          <img
            src={apicall.trailer.images.maximum_image_url}
            alt={apicall.title}
            className="w-full h-full"
            loading="lazy"
          />
          </Link>
        )}
      </div>
      <div className="w-[50%] flex flex-col justify-center text-white">
        <h1 className="py-2">{apicall.title_english || apicall.title}</h1>
        <p className="text-gray-500 py-2">Series &#x2B29; Sub | Dub </p>
        <p className="py-2">{truncatedDescription}</p>
        <div className="flex py-2">
          <button className="bg-orange-600 text-black w-52 p-4 mr-3 h-11 font-semibold flex items-center justify-center hover:bg-orange-500
          transition-all duration-300">
            <LuPlay />
            &nbsp; Start Watching E1
          </button>
          <button className="text-orange-600 text-l w-52 p-4 mr-3 h-11 font-semibold flex items-center justify-center border-orange-600 hover:border-orange-500 transition-all duration-300 border-[3px]">
            <p className="text-lg">
              <FaRegBookmark />
            </p>
            &nbsp; Add to Watchlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;



