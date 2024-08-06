import { fetchAnime } from "./action";
import CarouselMap from "@/components/CarouselMap";
import CardSection from "@/components/CardSection";
import Special from "@/components/Special";
import { Anime } from "@/interfaces/Anime";
import { defaultApi } from "./defaultApi";
import Heading from "@/components/Heading";
import EpisodeMap from "@/components/EpisodeMap";
import Banner from "@/components/Banner";

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
  const specialViewArray = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=15"
  );
  let specialView: Anime = specialViewArray[1] || defaultApi;
  let specialView2: Anime = specialViewArray[2] || defaultApi;
  let specialView3: Anime = specialViewArray[5] || defaultApi;
  let bannerView: Anime = specialViewArray[3] || defaultApi;
  let bannerView2: Anime = specialViewArray[4] || defaultApi;

  const episodeView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=5"
  );
  return (
    <>
      <CarouselMap item={carouselView} />
      <Heading
        title={"July 2024 Seasonal Sampler"}
        subtitle={
          "Check out the first few episodes of these new shows for free!"
        }
      />
      <CardSection item={seasonalSamplerView} />
      <Heading
        title={"Free-to-Watch Sports Anime"}
        subtitle={"Go for glory with these athletes!"}
      />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection item={sportsAnimeView} />
      </section>
      <section>
        <Banner apicall={bannerView} />
      </section>
      <Heading
        title={"Hindi Dubs Available on Crunchyroll!"}
        subtitle={"Check out these great Hindi dubs!"}
      />
      <section className="flex flex-col w-[100vw] overflow-y-scroll">
        <CardSection item={hindidubsView} />
      </section>
      <section>
        <Special apicall={specialView} />
      </section>
      <section className="w-[100vw]">
        <EpisodeMap apicall={episodeView} />
      </section>
      <section>
        <Special apicall={specialView2} />
      </section>
      <section>
        <Banner apicall={bannerView2} />
      </section>
      <Heading title={"Most Popular This Season"} subtitle={""} />
      <CardSection item={seasonalSamplerView} />
      <Heading
        title={"Tamil Dubs Available on Crunchyroll!"}
        subtitle={"Great anime dubbed in Tamil"}
      />
      <CardSection item={sportsAnimeView} />
      <section>
        <Special apicall={specialView3} />
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
