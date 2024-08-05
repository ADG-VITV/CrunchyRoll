import { Anime } from "@/interfaces/Anime";
import Episode from "./Episode";

interface EpisodeMapProp {
  apicall: Anime[];
}
const EpisodeMap: React.FC<EpisodeMapProp> = ({ apicall }) => {
    return(
        <>
            <div className="flex overflow-y-auto w-[250vw] text-white mx-[4rem] bg-black gap-x-2 mb-[4.5rem]">
                {apicall.map((anime: Anime) => (
                    <Episode
                        key={anime.mal_id}
                        img={anime.images.webp.image_url}
                        name={anime.title_english}
                    />
                ))}
            </div>
        </>
    )
}

export default EpisodeMap;