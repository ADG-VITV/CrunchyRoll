
// app/anime/[id]/page.tsx
import Image from 'next/image';
import { FaStar, FaRegStar, FaPlay, FaBookmark, FaPlus } from 'react-icons/fa';
import { Anime } from '@/interfaces/Anime';
import { truncate } from '@/app/truncate';
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
    <div className="relative min-h-screen bg-black text-white">
      <main className="pt-20 px-8 pb-8">
        <div className="relative">
          <div className="flex justify-center blur-sm w-full h-[15rem]" style={{ backgroundImage: `url(${anime.trailer.images.maximum_image_url})` }}>
            
          </div>
          <div>
          {/* <Image src={anime.trailer.images.maximum_image_url} alt={anime.title} className='z= -1 absolute w-[50%]'   width={900} height={900}  ></Image> */}
          <Image src={anime.trailer.images.maximum_image_url} alt={anime.title} width= {500} height={700} className="object-cover relative h-full w-[40%]" />
          </div>
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="absolute top-0 left-0 w-full flex justify-center items-center  ">
            {/* <Image src={anime.trailer.images.image_url} alt={anime.title} width={400} height={275} className="relative z-10 rounded-md" /> */}
          </div>
        </div>
        <div className="flex mt-[5rem] ">
          <div className="w-2/3 pr-8">
            <h1 className="text-4xl font-bold ml-[5rem]">{anime.title}</h1>
            <div className="flex items-center mt-2 ml-[5rem]">
            <p className='text-gray-500 text-sm font-normal animeDesc'>Sub | Dub</p>
              
              
               
            </div>
            <div className=' ml-[5rem] mt-[1rem]'>
                {anime.score}
                </div>
            <div className="flex space-x-4 mt-4 ml-[5rem]">
              <button className="flex items-center border border-orange-500 hover:border-orange-400 tracnoing-tighter font-semibold text-orange-500 px-4 py-2 rounded">
                <FaBookmark className="mr-2" /> ADD TO WATCHLIST
              </button> 
              <button className="flex items-center border-none text-gray-500 tracking-tighter hover:bg-zinc-800 hover:text-white font-semibold px-4 py-2 ">
                <FaPlus className="mr-2" /> ADD TO CRUNCHY LIST
              </button>
            </div>
            <p className="mt-4 ml-[5rem] ">{truncate(anime.synopsis,100)}</p>
            <div className="mt-[5rem] ml-[5rem]">
                <div className="flex justify-between">
            <h1 className= " text-3xl text-bold   text-white">Publisher</h1>
            <h2 className='text-white'>{anime.producers.name}</h2>
            </div>
            <hr className='w-full mt-[1rem] ' />
            <h1 className= " text-3xl text-bold  mt-[1rem] text-white">Audio</h1>
            <hr className='w-full mt-[1rem] ' />
            <h1 className= " text-3xl text-bold  mt-[1rem] text-white">Subtitles</h1>
            <hr className='w-full mt-[1rem] ' />
           
           
            </div>
          </div>
          <div className="w-1/3 h-">
            <div className="relative">
              <iframe
                src={anime.trailer.embed_url}
                frameBorder="0"
                className="w-full h-72 rounded-md"
                allowFullScreen
              ></iframe>
              <button className="flex justify-center items-center border w-full text-center border-none bg-orange-500 text-black px-4 py-2 ">
                 Start Watching E
              </button>
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
