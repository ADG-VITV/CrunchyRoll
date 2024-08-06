"use client"
import { useState } from "react"
import { FaRegBookmark } from "react-icons/fa6"
import { LuPlay } from "react-icons/lu"
import { landingPageApi } from "@/interfaces/landingPage"

export default function SwiperNoSwiping() {

    const [index, setIndex] = useState(0)

    function handleDecrement() {
        if(index == 0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }
    }

    return (
        <>
            <div className="relative overflow-hidden">
                <img src={landingPageApi[index].heroImage} alt="" className="h-[105vh] w-[100vw] object-cover"/>
                <div className="absolute top-[11rem] left-0 z-[9]">
                    <div onClick={() => handleDecrement()}>
                        <img src="arrow.png" alt="" className="ml-4 rotate-180 pre-button absolute top-[25vh]"/>
                    </div>
                    <img src={landingPageApi[index].logoImage} alt="" className="w-[20rem] pb-4 ml-[3.25rem]" />
                    <p className="text-gray-500 text-sm font-normal pb-2 ml-[3.25rem]">Sub | Dub</p>
                    <p className="text-white text-md font-normal w-[27rem] pb-6 ml-[3.25rem]">{landingPageApi[index].description}</p>
                    <div className="flex py-2 ml-[3.25rem]">
                        <button className="bg-orange-600 text-black w-52 p-4 mr-3 h-11 font-semibold flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
                            <LuPlay />
                            &nbsp; Start Watching E1
                        </button>
                        <button className="text-orange-600 text-l w-52 p-4 mr-3 h-11 font-semibold flex items-center justify-center border-orange-600 hover:border-orange-500 transition-all duration-300 border-[3px]">
                            <p className="text-lg">
                                <FaRegBookmark />
                            </p>
                            &nbsp; Add to Watchlist
                        </button>
                    </div>
                    <div onClick={() => setIndex((index+1)%5)}>
                        <img src="arrow.png" alt="" className="ml-4 pre-button absolute top-[25vh] left-[97vw]"/>
                    </div>
                </div>
                <div className="absolute top-[0rem] left-[-10rem] z-[8] w-[140vw] h-[160vh] fade">
                </div>
            </div>
        </>
    )
}