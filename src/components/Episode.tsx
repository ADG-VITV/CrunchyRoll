export default function Episode (props: any) {
  return (
    <div className="text-white flex w-[28rem] h-[6rem] my-4">
      <div>
        <img
          src={props.img}
          alt={props.name}
          className="w-36 h-full mr-4"
          loading="lazy"
        />
      </div>
      <div className="w-[50%] flex flex-col justify-between">
        <h1 className="py-1">{props.name}</h1>
        <p className="text-sm text-gray-500">{props.episodes?props.episodes:5} Episodes</p>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Sub | Dub</p>
          <p className="text-sm text-gray-500">{props.duration} min</p>
        </div>
      </div>
    </div>
  );
}
