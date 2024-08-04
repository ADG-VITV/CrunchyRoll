import { fetchAnime } from "./action";
import CarouselMap from "@/components/CarouselMap";
import CardSection from "@/components/CardSection";

const Home: React.FC = async () => {
  const carouselView = await fetchAnime(
    "https://api.jikan.moe/v4/top/anime?limit=6"
  );

  const seasonalReleaseView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=15"
  );

  const hindidubsView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/2022/spring?limit=15"
  );

  return (
    <>
      <CarouselMap item={carouselView} />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={seasonalReleaseView} />
      </section>
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={hindidubsView} />
      </section>
      <img
        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg"
        alt="banner"
        className="items-center justify-center mx-auto object-cover w-[85vw] h-[72vh]"
      />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={hindidubsView} />
      </section>
    </>
  );
};

export default Home;
