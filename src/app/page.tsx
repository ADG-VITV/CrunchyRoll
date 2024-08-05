import { fetchAnime } from "./action";
import CarouselMap from "@/components/CarouselMap";
import CardSection from "@/components/CardSection";
import Heading from "@/components/Heading";

const Home: React.FC = async () => {
  const carouselView = await fetchAnime(
    "https://api.jikan.moe/v4/top/anime?limit=6"
  );

  const seasonalSamplerView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=15"
  );

  const sportsAnimeView = await fetchAnime(
    "https://api.jikan.moe/v4/anime?q=sports&sfw&limit=15"
  );

  const hindidubsView = await fetchAnime(
    "https://api.jikan.moe/v4/anime?q=hindi&sfw&limit=15"
  );

  return (
    <>
      <CarouselMap item={carouselView} />


      <Heading title={"July 2024 Seasonal Sampler"} subtitle={"Check out the first few episodes of these new shows for free!"} />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={seasonalSamplerView} />
      </section>

      <Heading title={"Free-to-Watch Sports Anime"} subtitle={"Go for glory with these athletes!"} />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={sportsAnimeView} />
      </section>

      <img
        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg"
        alt="banner"
        className="items-center justify-center mx-auto object-cover w-[91vw] h-[55vh] mb-[6.5rem]"
      />
      <Heading title={"Hindi Dubs Available on Crunchyroll!"} subtitle={"Check out these great Hindi dubs!"} />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection apicall={hindidubsView} />
      </section>

      <section className="flex flex-col items-center m-4">
        <img
          src="https://www.crunchyroll.com/build/assets/img/home/yuzu.png"
          alt=""
          className="w-[15rem]"
        />
        <h1 className="text-white text-xl">
          Still looking for something to watch?
        </h1>
        <h1 className="text-white text-xl">Check out our full library</h1>
        <button className="text-orange-600 border-[3px] border-orange-600 w-28 h-10 mt-6">
          View All
        </button>
      </section>
    </>
  );
};

export default Home;
