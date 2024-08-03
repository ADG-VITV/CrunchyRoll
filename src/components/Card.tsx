export default function Card(props: any) {
  return (
    <div className="cardContainer w-[20rem] h-[28rem]">

      <div className="animeInfo bg-gray-950 h-full w-full p-4">
        <p className="text-white text-md">{props.name}</p>
      </div>

      <div className="bg-black flex flex-col gap-2 card h-full overflow-hidden">
        <img src={props.img} className="w-[18rem] h-[23rem]"></img>
        <p className="text-white text-md">{props.name}</p>
        <p className="text-gray-500 text-sm">Sub | Dub</p>
      </div>
    </div>
  );
}
