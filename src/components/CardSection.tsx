import Card from "@/components/Card";
interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  url: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  title_english: string;
}
export default function CardSection({ apicall }: { apicall: Anime[] }) {
    return (
      <>
        <div className="flex overflow-y-auto w-[250vw] mx-[4rem] bg-black gap-x-2 mb-[4.5rem]">
          {apicall.map((anime: Anime) => (
            <Card
              key={anime.mal_id}
              img={anime.images.webp.large_image_url}
              name={anime.title_english}
            />
          ))}
        </div>
      </>
    );
}