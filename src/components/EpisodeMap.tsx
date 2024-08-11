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
      <hr className="mx-16 bg-gray-500 border-0 h-px" />
      <div className="flex mx-16 flex-wrap">
        {apicall.map((anime: Anime) => (
          <Episode
            key={anime.mal_id}
            mal_id={anime.mal_id}
            img={anime.images.webp.image_url}
            name={anime.title_english}
            episodes={anime.episodes}
            duration={anime.duration.split(" ")[0]}
          />
        ))}
      </div>
      
    </div>
  );
};

export default EpisodeMap;
