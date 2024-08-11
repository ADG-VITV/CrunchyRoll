import {
    FaStar,
    FaRegBookmark,
    FaPlus,
} from "react-icons/fa";
import { Anime } from "@/interfaces/Anime";

interface MediaProps {
    anime: Anime;
}
export default function Media({ anime }: { anime: any }) {
    return (
        <div className="mx-[10rem] my-16 flex text-white justify-between">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl">{anime.title_english}</h1>
                    <p className="text-gray-500 text-sm font-normal animeDesc my-4">
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
                </div>
                <div className="flex space-x-4 mt-4">
                    <button className="flex items-center border-[2px] border-orange-500 hover:border-orange-400 font-semibold text-orange-500 px-4 py-2">
                        <FaRegBookmark className="text-orange-500 mr-2" /> ADD TO WATCHLIST
                    </button>
                    <button className="flex items-center border-none text-gray-500 tracking-tighter hover:bg-zinc-800 transition-all hover:text-white font-semibold px-4 py-2 ">
                        <FaPlus className="mr-2" /> ADD TO CRUNCHY LIST
                    </button>
                </div>
            </div>
            <div className="w-[25rem] flex flex-col justify-between">
                {anime.trailer.embed_url ?
                    <iframe
                        src={`${anime.trailer.embed_url}?autoplay=1`}
                        className="w-full h-[12rem]"
                    ></iframe> : <img src="/DeathCodeLogo.jpeg" alt="" className="w-full h-full" />}
                <button className="flex justify-center items-center border w-full text-center border-none bg-orange-500 text-black my-2 px-4 py-2 ">
                    Start Watching E1
                </button>
            </div>
        </div>
    )
}