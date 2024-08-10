import { Anime } from "@/interfaces/Anime";
import Episode from "./Episode";
import { defaultApi } from "@/app/defaultApi";

interface EpisodeMapProp {
  apicall: Anime[];
}
const EpisodeMap: React.FC<EpisodeMapProp> = ({ apicall }) => {
  apicall = apicall || [defaultApi];
  return (
    <div className="w-full mb-8">
      {/* <h1 className="text-white mx-16 my-4 text-3xl">New Episodes</h1>
      <h1 className="text-white mx-16 my-2 text-2xl">Today</h1> */}
      <hr className="mx-16 bg-gray-500 border-0 h-px" />
      <div className="flex mx-16 flex-wrap">
        {apicall.map((anime: Anime) => (
          <Episode
            key={anime.mal_id}
            mal_id={anime.mal_id}
            img={anime.images.webp.image_url}
            name={anime.title_english}
            episodes={anime.episodes}
            // duration={anime.duration.split(" ")[0]}
          />
        ))}
      </div>
      {/* <h1 className="text-white mx-16 my-2 text-2xl">Yesterday</h1>
      <hr className="mx-16 bg-gray-500 border-0 h-px" />
      <div className="flex mx-16 flex-wrap">
        {apicall.map((anime: Anime) => (
          <Episode
            key={anime.mal_id}
            img={anime.images.webp.image_url}
            name={anime.title_english}
            episodes={anime.episodes}
            // duration={anime.duration.split(" ")[0]}
          />
        ))}
      </div>
    <button className="text-white bg-gray-800 mx-16 w-[calc(100vw-8rem)] h-10 hover:bg-gray-700 transition-all">SHOW MORE</button> */}
    </div>
  );
};

export default EpisodeMap;
