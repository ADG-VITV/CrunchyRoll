
// app/anime/[id]/page.tsx
import Image from 'next/image';
import { FaStar, FaRegStar, FaPlay, FaBookmark, FaPlus } from 'react-icons/fa';
import { Anime } from '@/interfaces/Anime';

// Function to fetch data from the API
const fetchAnimeData = async (id: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`, {
    cache: 'no-store', // Ensure fresh data is fetched on each request
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const AnimeDetail = async ({ params }: { params: { id: string } }) => {
  // Parse `id` as a number
  const id = Number(params.id);

  // If `id` is not a valid number, throw an error or handle it appropriately
  if (isNaN(id)) {
    throw new Error('Invalid ID');
  }

  // Fetch data
  const animeData = await fetchAnimeData(id);
  const anime: Anime = animeData.data;

//   const stars = Array.from({ length: 5 }, (_, index) =>
//  <FaStar key={index} className="text-yellow-500" /> : <FaRegStar key={} />
//   );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <main className="pt-20 px-8 pb-8">
        <div className="relative">
          <Image src={anime.images.webp.image_url} alt={anime.title} layout="fill" className="object-cover blur-lg" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full flex justify-center items-center p-4">
            <Image src={anime.trailer.images.image_url} alt={anime.title} width={200} height={300} className="relative z-10 rounded-md" />
          </div>
        </div>
        <div className="flex mt-8">
          <div className="w-2/3 pr-8">
            <h1 className="text-4xl font-bold">{anime.title}</h1>
            <div className="flex items-center mt-2">
              {anime.score}
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded">
                <FaBookmark className="mr-2" /> Add to Watchlist
              </button>
              <button className="flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded">
                <FaPlus className="mr-2" /> Add to Crunchylist
              </button>
            </div>
            <p className="mt-4">{anime.synopsis}</p>
          </div>
          <div className="w-1/3">
            <div className="relative">
              <iframe
                src={anime.trailer.embed_url}
                frameBorder="0"
                className="w-full h-48 rounded-md"
                allowFullScreen
              ></iframe>
              {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 text-sm">
                {anime.duration}
              </div> */}
            </div>
            {/* <button
              className="mt-4 flex items-center justify-center w-full bg-orange-500 text-black px-4 py-2 rounded"
              onClick={() => window.open(anime.trailer.url, 'miniwindow', 'width=800,height=600')}
            >
              <FaPlay className="mr-2" /> Watch Trailer
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnimeDetail;
