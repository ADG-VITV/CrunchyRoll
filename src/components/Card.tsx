import React, { useEffect, useRef } from 'react';

interface CardItem {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  title_english: string;
}

interface CardProps {
  items: CardItem[];
}

const Card: React.FC<CardProps> = ({ items }) => {
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
