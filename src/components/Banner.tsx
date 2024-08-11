import { Anime } from "@/interfaces/Anime";
import Link from "next/link";
interface BannerProps{
    apicall: Anime;
}
const Banner: React.FC<BannerProps> = ({apicall}) => {
  return (
    <Link href={`/anime/${apicall.mal_id}`}>
    <section className="w-[calc((100vw-8rem))] h-[30rem] mx-auto mb-16 object-cover">
      {apicall.trailer?.images?.maximum_image_url && (
        <img
          src={apicall.trailer.images.maximum_image_url}
          alt={apicall.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </section>
    </Link>
  );
}
export default Banner;