import { defaultApi } from "@/app/defaultApi";
import Card from "@/components/Card";
import { Anime } from "@/interfaces/Anime";

interface CardSectionProps {
  apicall: Anime[];
}

// export default function CardSection({ apicall }: { apicall: Anime[] }) {
const CardSection: React.FC<CardSectionProps> = ({ apicall }) => {
  apicall = apicall || [defaultApi];
  return (
    <>
      <div className="flex overflow-y-auto w-[250vw] mx-[4rem] bg-black gap-x-2 mb-[4.5rem]">
        {apicall!.map((anime: Anime) => (
          <Card
            key={anime.mal_id}
            img={anime.images.webp.large_image_url}
            name={anime.title_english}
          />
        ))}
      </div>
    </>
  );
};
export default CardSection;