export default function Episode() {
  return (
    <div className="text-white flex w-56 justify-between">
      <div>
        <img
          src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg"
          alt=""
          className="w-32 h-20"
        />
      </div>
      <div>
        <h1>Title</h1>
        <p className="text-sm text-gray-500">Episodes</p>
        <div className="flex justify-between items-end">
          <p className="text-sm text-gray-500">Sub | Dub</p>
          <p className="text-sm text-gray-500">Free</p>
        </div>
      </div>
    </div>
  );
}
