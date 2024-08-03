// components/Carousel.tsx

import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface CarouselItem {
  mal_id: number;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  title_english: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  console.log("Carousel items:", items); // Debug log

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
          <div className="carousel-item">
            <img
              src={item.images.webp.large_image_url}
              alt={item.title_english}
            />
            <h3>{item.title_english}</h3>
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Carousel;
