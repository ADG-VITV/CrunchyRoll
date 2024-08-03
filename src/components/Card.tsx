export default function Card(props: any) {
  return (
    <div className="w-[15rem] h-[28rem] bg-black pr-4 flex flex-col gap-2">
      <img src={props.img} className="w-[15rem] h-[22.5rem]"></img>
      <p className="text-white">{props.name}</p>
      <p className="text-gray-500 text-sm">Sub | Dub</p>
    </div>
  );
}
