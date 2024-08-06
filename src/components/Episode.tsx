export default function Episode(props: any) {
  return (
    <div className="text-white flex w-[calc((100vw-8rem)/3)] h-[5rem] my-4 pr-4 gap-x-4">
      <div>
        <img src={props.img} alt={props.name} className="w-36 h-full mr-4" />
      </div>
      <div className="w-full flex flex-col justify-center">
        <h1 className="p-0 m-0">{props.name}</h1>
        <p className="text-sm text-gray-500">
          {props.episodes ? props.episodes : 5} Episodes
        </p>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Sub | Dub</p>
          <p className="text-sm text-[rgb(41,189,187)]">{props.duration}:00</p>
        </div>
      </div>
    </div>
  );
}
