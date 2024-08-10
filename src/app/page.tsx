import { fetchAnime, reverseFetchAnime } from "./action";
import CarouselMap from "@/components/CarouselMap";
import CardSection from "@/components/CardSection";
import Special from "@/components/Special";
import { Anime } from "@/interfaces/Anime";
import { defaultApi } from "./defaultApi";
import Heading from "@/components/Heading";
import EpisodeMap from "@/components/EpisodeMap";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Watchmore from "@/components/Watchmore";
import SwiperNoSwiping from "@/components/SwiperNoSwiping";

const Home: React.FC = async () => {
  const seasonalSamplerView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now"
  );
  const reverseSeasonalSamplerView = await reverseFetchAnime(
    "https://api.jikan.moe/v4/seasons/now"
  );

  const sportsAnimeView = await fetchAnime(
    "https://api.jikan.moe/v4/anime?q=sports&sfw&limit=15"
  );
  const reverseSportsAnimeView = await reverseFetchAnime(
    "https://api.jikan.moe/v4/anime?q=sports&sfw&limit=15"
  );

  const topAnimeView = await reverseFetchAnime(
    "https://api.jikan.moe/v4/top/anime?sfw&limit=15"
  );
  const specialViewArray = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=15"
  );
  let specialView: Anime = specialViewArray ? specialViewArray[1] : defaultApi;
  let specialView2: Anime = specialViewArray ? specialViewArray[2] : defaultApi;
  let specialView3: Anime = specialViewArray ? specialViewArray[5] : defaultApi;
  let bannerView: Anime = specialViewArray ? specialViewArray[3] : defaultApi;
  let bannerView2: Anime = specialViewArray ? specialViewArray[4] : defaultApi;

  const episodeView = await fetchAnime(
    "https://api.jikan.moe/v4/seasons/now?limit=5"
  );
  const episodeView2 = await reverseFetchAnime(
    "https://api.jikan.moe/v4/top/anime?sfw&limit=5"
  );

  return (
    <div className="relative">
      {/* <CarouselMap item={carouselView} /> */}
      <SwiperNoSwiping />
      <div className="absolute top-[90vh] w-full h-full z-10">
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
          title={"Top Animes Available on Crunchyroll!"}
          subtitle={"Check these out!"}
        />
        <section className="flex flex-col w-[100vw] overflow-y-scroll">
          <CardSection item={topAnimeView} />
        </section>
        <section>
          <Special apicall={specialView} />
        </section>
        <section className="w-[100vw]">
          <h1 className="text-white mx-16 my-4 text-3xl">New Episodes</h1>
          <h1 className="text-white mx-16 my-2 text-2xl">Today</h1>
          <EpisodeMap apicall={episodeView} />
          <h1 className="text-white mx-16 my-2 text-2xl">Yesterday</h1>
          <EpisodeMap apicall={episodeView2} />
          <button className="text-white bg-gray-800 mx-16 w-[calc(100vw-8rem)] h-10 hover:bg-gray-700 transition-all">
            SHOW MORE
          </button>
        </section>
        <section>
          <Special apicall={specialView2} />
        </section>
        <section>
          <Banner apicall={bannerView2} />
        </section>
        <Heading title={"Most Popular This Season"} subtitle={""} />
        <CardSection item={reverseSeasonalSamplerView} />
        <Heading
          title={"Tamil Dubs Available on Crunchyroll!"}
          subtitle={"Great anime dubbed in Tamil"}
        />
        <CardSection item={reverseSportsAnimeView} />
        <section>
          <Special apicall={specialView3} />
        </section>
        <Watchmore />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
