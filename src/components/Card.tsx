import React, { useEffect, useRef } from 'react';
import { Anime } from '@/interfaces/Anime';
import { defaultApi } from '@/app/defaultApi';

interface CardProps {
  items: Anime[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  items = items || [defaultApi];
  const productContainerRefs = useRef<HTMLDivElement[]>([]);
  const nxtBtnRefs = useRef<HTMLButtonElement[]>([]);
  const preBtnRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    productContainerRefs.current = Array.from(document.querySelectorAll('.product-container')) as HTMLDivElement[];
    nxtBtnRefs.current = Array.from(document.querySelectorAll('.nxt-btn')) as HTMLButtonElement[];
    preBtnRefs.current = Array.from(document.querySelectorAll('.pre-btn')) as HTMLButtonElement[];

    productContainerRefs.current.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      const handleNextClick = () => {
        item.scrollLeft += containerWidth;
      };

      const handlePrevClick = () => {
        item.scrollLeft -= containerWidth;
      };

      nxtBtnRefs.current[i].addEventListener('click', handleNextClick);
      preBtnRefs.current[i].addEventListener('click', handlePrevClick);

      // Cleanup event listeners on unmount
      return () => {
        nxtBtnRefs.current[i].removeEventListener('click', handleNextClick);
        preBtnRefs.current[i].removeEventListener('click', handlePrevClick);
      };
    });
  }, []);

  return (
    <section className="product h-full"> 
      <button className="pre-btn">
        <img src="arrow.png" alt="Previous"/>
      </button>
      <button className="nxt-btn">
        <img src="arrow.png" alt="Next"/>
      </button>
      <div className="product-container overflow-auto scroll-smooth flex w-full h-full mr-10">
        {items.map((item, index) => (
          <div className={`product-card flex flex-shrink-0 flex-grow-0 flex-auto mr-7 ${index === 0 ? 'ml-[4rem]' : ''} ${index === (items.length - 1) ? 'mr-[4rem]' : ''}`} key={item.mal_id}>
            <img src={item.images.webp.large_image_url} alt={item.title_english} className="h-[23rem] w-[14.5rem] object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
