export default function Episode (props: any) {
  return (
    <div className="text-white flex w-[25rem] h-[6rem] ">
      <div>
        <img
          src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg"
          alt=""
          className="w-36 h-full mr-4"
        />
      </div>
      <div className="w-[50%]">
        <h1 className="py-1">{props.title}</h1>
        <p className="text-sm text-gray-500">{props.episodes}</p>
        <div className="flex justify-between items-end">
          <p className="text-sm text-gray-500">Sub | Dub</p>
          <p className="text-sm text-gray-500">{props.time}</p>
        </div>
      </div>
    </div>
  );
}
