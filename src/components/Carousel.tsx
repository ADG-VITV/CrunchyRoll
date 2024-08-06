// components/Carousel.tsx

import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselItem } from "@/interfaces/Carousel";

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <SwiperComponent
      modules={[Navigation, Pagination]}
      spaceBetween={0} // Ensure no space between slides
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "100%" }} // Ensure Swiper takes full width and height
    >
      {items.map((item) => (
        <SwiperSlide key={item.mal_id}>
          <div className="carousel-item flex flex-col items-center w-full">
            <img
              src={item.trailer.images.maximum_image_url}
              alt={item.title_english}
              className="w-full h-full z-[-1]"
              loading="lazy"
            />
            <h3 className="mt-[3px] text-white">{item.title_english}</h3>
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Carousel;
