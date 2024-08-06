import { Anime } from "@/interfaces/Anime";
import Episode from "./Episode";
import { defaultApi } from "@/app/defaultApi";

interface EpisodeMapProp {
  apicall: Anime[];
}
const EpisodeMap: React.FC<EpisodeMapProp> = ({ apicall }) => {
  apicall = apicall || [defaultApi];
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        aria-labelledby="curated-carousel-svg"
        data-t="curated-carousel-svg"
        viewBox="0 0 24 24"
        className="feed-header__icon--LlqDV text-white w-8 h-8"
      >
        <path d="M22 1.2v17h-5.5L12 22.8l-4.5-4.6H2v-17h20zm-2 1.9H4v13h4.4l3.6 3.8 3.6-3.7H20V3.1zM9.5 5c.3-.1.7-.1 1 .1L16 8.9c.3.1.5.5.5.8 0 .3-.1.6-.4.8l-5.5 3.8c-.2.1-.4.2-.6.2-.2 0-.4 0-.5-.1-.3-.2-.5-.5-.5-.9V5.9c0-.4.2-.7.5-.9zM11 7.8v3.8l2.7-1.9L11 7.8z" />
      </svg>
      <h1 className="text-white mx-16 my-4 text-3xl">New Episodes</h1>
      <h1 className="text-white mx-16 my-2 text-2xl">Today</h1>
      <hr className="mx-16 bg-gray-500 border-0 h-px" />
      <div className="flex mx-16 flex-wrap">
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
      <h1 className="text-white mx-16 my-2 text-2xl">Yesterday</h1>
      <hr className="mx-16 bg-gray-500 border-0 h-px" />
      <div className="flex mx-16 flex-wrap">
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
      <button className="text-white bg-gray-800 mx-16 w-[92vw] h-10 hover:bg-gray-700 transition-all">SHOW MORE</button>
    </>
  );
};

export default EpisodeMap;
