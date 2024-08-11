import { Anime } from "@/interfaces/Anime";
import { truncate } from "@/app/truncate";
interface DetailsProps {
    anime: Anime;
}
export default function Details({ anime }: { anime: any }) {
    return (
        <div className="mx-[10rem] w-[45%] text-white">
            <p className="mt-4">{truncate(anime.synopsis, 70)}</p>
            <div className="mt-[5rem] text-md">
                <div className="flex justify-between">
                    <h1 className="text-bold   text-white">Publisher</h1>
                    <h2 className="text-white">
                        {anime.producers
                            .map((publisher: { name: any; }) => publisher.name)
                            .join(", ")}
                    </h2>
                </div>
                <hr className="w-full my-[1rem] " />
                <div className="flex justify-between">
                    <h1 className="text-bold   text-white">Genre</h1>
                    <h2 className="text-white">
                        {anime.genres.map((genre: { name: any; }) => genre.name).join(", ")}
                    </h2>
                </div>
                <hr className="w-full my-[1rem] " />
                <div className="flex justify-between">
                    <h1 className="text-bold   text-white">Studio</h1>
                    <h2 className="text-white">
                        {anime.studios
                            .map((studio: { name: any; }) => studio.name)
                            .join(", ")}
                    </h2>
                </div>
                <hr className="w-full my-[1rem] " />
            </div>
        </div>
    )
}