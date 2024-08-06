export default function Watchmore(){
    return(
        <section className="flex flex-col items-center p-20">
          <img
            src="https://www.crunchyroll.com/build/assets/img/home/yuzu.png"
            alt=""
            className="w-[15rem]"
          />
          <h1 className="text-white text-xl">
            Still looking for something to watch?
          </h1>
          <h1 className="text-white text-xl">Check out our full library</h1>
          <button className="text-orange-600 border-[3px] border-orange-600 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 w-28 h-10 mt-6">
            View All
          </button>
        </section>
    )
}