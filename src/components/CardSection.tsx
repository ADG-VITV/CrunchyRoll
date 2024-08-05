import Card from "@/components/Card";
import { Anime } from "@/interfaces/Anime";

interface CardSectionProps {
  apicall: Anime[];
}

export default function CardSection({ apicall }: { apicall: Anime[] }) {
    return (
      <>
        <div className="flex overflow-y-auto w-[250vw] mx-[4rem] my-4 bg-black gap-x-2">
            {apicall.map((anime) => 
              <Card
                key={anime.mal_id}
                img={anime.images.webp.large_image_url}
                name={anime.title_english}
              />
            )}
        </div>
      </>
    );
}