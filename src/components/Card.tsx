import React, { useEffect, useRef } from "react";
import { Anime } from "@/interfaces/Anime";
import { defaultApi } from "@/app/defaultApi";
import { IoStar } from "react-icons/io5";
import { truncate } from "@/app/truncate";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { LuPlay } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

interface CardProps {
  items: Anime[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  items = items || [defaultApi];
  const animeContainerRefs = useRef<HTMLDivElement[]>([]);
  const nxtBtnRefs = useRef<HTMLButtonElement[]>([]);
  const preBtnRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    animeContainerRefs.current = Array.from(
      document.querySelectorAll(".anime-container")
    ) as HTMLDivElement[];
    nxtBtnRefs.current = Array.from(
      document.querySelectorAll(".nxt-btn")
    ) as HTMLButtonElement[];
    preBtnRefs.current = Array.from(
      document.querySelectorAll(".pre-btn")
    ) as HTMLButtonElement[];

    animeContainerRefs.current.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      const handleNextClick = () => {
        item.scrollLeft += containerWidth;
      };

      const handlePrevClick = () => {
        item.scrollLeft -= containerWidth;
      };

      nxtBtnRefs.current[i].addEventListener("click", handleNextClick);
      preBtnRefs.current[i].addEventListener("click", handlePrevClick);

      // Cleanup event listeners on unmount
      return () => {
        nxtBtnRefs.current[i].removeEventListener("click", handleNextClick);
        preBtnRefs.current[i].removeEventListener("click", handlePrevClick);
      };
    });
  }, []);

  return (
    <section className="anime h-full">
      <button className="pre-btn">
        <MdKeyboardArrowRight className="text-white text-5xl z-[9] hover:text-gray-500 transition-colors cursor-pointer absolute top-[12rem] rotate-180" />
      </button>
      <button className="nxt-btn">
        <MdKeyboardArrowRight className="text-white text-5xl z-[9] hover:text-gray-500 transition-colors cursor-pointer absolute top-[12rem] right-0" />
      </button>
      <div className="anime-container overflow-auto scroll-smooth flex w-full h-full mr-10">
        {items.map((item, index) => (
          <div key={item.mal_id}>
            <Link href={`http://localhost:3000/anime/${item.mal_id}`}>
          <div
            className={`anime-card relative overflow-hidden flex-col flex-shrink-0 flex-grow-0 flex-auto mr-7 ${
              index === 0 ? "ml-[4rem]" : ""
            } ${index === items.length - 1 ? "mr-[4rem]" : ""}`}
            key={item.mal_id}
          >
            <img
              src={item.images.webp.large_image_url}
              alt={item.title_english}
              className="h-[23rem] w-[14.5rem] object-cover pb-2"
              loading="lazy"
            />
            <p className="text-white w-[14.5rem] pb-2 text-sm font-normal animeDesc">
              {item.title_english}
            </p>
            <p className="text-gray-500 text-sm font-normal animeDesc">
              Sub | Dub
            </p>

            <div className="overlay absolute top-0 left-0 bg-black-overlay w-full h-full flex p-4 text-white opacity-0 transition-all z-2 hover:opacity-100">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-normal">{item.title_english}</p>
                  <div className="flex gap-x-1 items-center pb-2">
                    <p className="text-sm font-normal pt-0.5">{item.score}</p>{" "}
                    {/* Example additional info */}
                    <IoStar className="text-sm" />
                    <p className="text-sm font-normal pt-0.5">
                      ({item.scored_by})
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-gray-400 pb-1">
                      {item.episodes} Episodes
                    </p>
                    <p className="text-sm font-normal">
                      {truncate(item.synopsis, 25)}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-end text-orange-500 text-xl gap-4 m[-1rem]">
                  <LuPlay />
                  <FaRegBookmark className="text-[1.15rem]"/>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          </Link>

          </div>
        ))}
      </div>
    </section>

  );
};

export default Card;
