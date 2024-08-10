import { fetchAnime } from "./action";
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

  const sportsAnimeView = await fetchAnime(
    "https://api.jikan.moe/v4/anime?q=sports&sfw&limit=15"
  );

  const topAnimeView = await fetchAnime(
    "https://api.jikan.moe/v4/top/anime?sfw&limit=15"
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
        <Watchmore />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
