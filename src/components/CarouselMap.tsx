"use client";
import Carousel from "./Carousel";

interface CarouselMap {
  item: any;
}

const CarouselMap: React.FC<CarouselMap> = ({ item }) => {
  return <Carousel items={item} />;
};

export default CarouselMap;
