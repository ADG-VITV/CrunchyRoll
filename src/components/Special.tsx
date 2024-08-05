import { FaPlay, FaRegBookmark } from "react-icons/fa";
import { Anime } from "@/interfaces/Anime";
import { truncate } from "@/app/truncate";

interface SpecialProps {
  apicall: Anime | null;
}

const Special: React.FC<SpecialProps> = ({ apicall }) => {
  const truncatedDescription = truncate(apicall!.synopsis, 50);

  return (
    <section className="w-[92%] h-[25rem] flex justify-between mx-auto text-white">
      <div className="w-[50%] mr-8">
        {apicall!.trailer?.images?.medium_image_url && (
          <img
            src={apicall!.trailer.images.medium_image_url}
            alt={apicall!.title}
            className="w-full h-full"
          />
        )}
      </div>
      <div className="w-[50%] flex flex-col justify-center text-white">
        <h1 className="py-2">{apicall!.title_english || apicall!.title}</h1>
        <p className="text-gray-500 py-2">Series &#x2B29; Sub | Dub </p>
        <p className="py-2">{truncatedDescription}</p>
        <div className="flex py-2">
          <button className="bg-orange-600 text-black w-52 p-4 mr-3 h-11 font-semibold flex items-center">
            <FaPlay />
            &nbsp; Start Watching
          </button>
          <button className="text-orange-600 text-l w-52 p-4 mr-3 h-11 font-semibold flex items-center border-orange-600 border-[3px]">
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
