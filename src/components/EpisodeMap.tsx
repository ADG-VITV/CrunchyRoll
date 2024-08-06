import { Anime } from "@/interfaces/Anime";
import Episode from "./Episode";
import { defaultApi } from "@/app/defaultApi";

interface EpisodeMapProp {
  apicall: Anime[];
}
const EpisodeMap: React.FC<EpisodeMapProp> = ({ apicall }) => {
    apicall = apicall || [defaultApi];
    return(
        <>
            <div className="flex m-16 flex-wrap">
                {apicall.map((anime: Anime) => (
                    <Episode
                        key={anime.mal_id}
                        img={anime.trailer.images.medium_image_url}
                        name={anime.title_english}
                        episodes={anime.episodes}
                        duration={anime.duration.split(" ")[0]}

                    />
                ))}
            </div>
        </>
    )
}

export default EpisodeMap;