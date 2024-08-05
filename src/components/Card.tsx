export default function Card(props: any) {
  return (
    <div className="cardContainer w-[20rem] h-[28rem]">
      <div className="animeInfo bg-gray-950 h-full w-full p-4">
        <p className="text-white text-md">{props.name}</p>
        <p className="text-white text-md">{props.synopsis}</p>
       
      </div>

      <div className="bg-black flex flex-col gap-2 card h-full overflow-hidden">
        <img src={props.img} className="w-[18rem] h-[23rem]"></img>
<<<<<<< HEAD
        <p className="text-white text-md">{props.name}</p>
      
        <p className="text-gray-500 text-sm">Sub | Dub</p>

=======
        <p className="text-white text-md font-light">{props.name}</p>
        <p className="text-gray-500 text-sm font-normal">Sub | Dub</p>
>>>>>>> de0b5a7d06ac50dcaef42fc355c39808222df46c
      </div>
    </div>
  );
}
