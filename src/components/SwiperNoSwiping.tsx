"use client"
import { useState, useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { LuPlay } from "react-icons/lu";
import { landingPageApi } from "@/interfaces/landingPage";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SwiperNoSwiping() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    function handleDecrement() {
        setFade(false);
        setTimeout(() => {
            setIndex((index === 0 ? 4 : index - 1));
            setFade(true);
        }, 200);
    }

    function handleIncrement() {
        setFade(false);
        setTimeout(() => {
            setIndex((index + 1) % 5);
            setFade(true);
        }, 200);
    }

    return (
        <>
            <div className={`relative overflow-hidden transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>

                <img src={landingPageApi[index].heroImage} alt="" className="h-[105vh] z-[5] w-[100vw] object-cover" />
                <div onClick={() => handleDecrement()} className="absolute top-[10rem] z-[9] left-0 w-4 h-4">
                    <MdKeyboardArrowRight className="text-white text-5xl rotate-180 z-[9] absolute top-[25vh] hover:text-gray-500 transition-colors cursor-pointer" />
                </div>
                <img src={landingPageApi[index].logoImage} alt="" className="w-[20rem] z-[5] pb-4 ml-[3.25rem] scale-75 absolute bottom-[29rem] left-0" />
                <p className="text-gray-500 text-sm font-normal pb-2 ml-[3.25rem] absolute top-[30rem] left-4 z-[5]">Sub | Dub</p>
                <p className="text-white text-md font-normal w-[27rem] pb-6 ml-[3.25rem] absolute top-[36rem] left-4 z-[5]">{landingPageApi[index].description}</p>
                <div className="flex py-2 ml-[3.25rem] absolute top-[31rem] left-4 z-[5]">
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
                <div onClick={() => handleIncrement()} className="absolute top-[10rem] z-[9] left-0 w-4 h-4">
                    <MdKeyboardArrowRight className="text-white text-5xl absolute top-[25vh] z-[9] left-[97vw] hover:text-gray-500 transition-colors cursor-pointer" />
                </div>
                <div className="absolute top-[0rem] left-[-10rem] z-[4] w-[140vw] h-[160vh] verticalfade"></div>
                <div className="absolute top-[0rem] left-[-10rem] z-[4] w-[140vw] h-[160vh] horizontalfade"></div>
            </div>
        </>
    );
}
