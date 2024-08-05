import { Anime } from "@/interfaces/Anime";
import Episode from "./Episode";

interface EpisodeMapProp {
  apicall: Anime[];
}
const EpisodeMap: React.FC<EpisodeMapProp> = ({ apicall }) => {
    return(
        <>
            <div className="flex m-16 flex-wrap">
                {apicall.map((anime: Anime) => (
                    <Episode
                        key={anime.mal_id}
                        img={anime.images.webp.image_url}
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