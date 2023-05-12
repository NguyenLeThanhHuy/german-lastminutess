'use client';
import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

interface SlideCarouselProps {
   items: JSX.Element[];
}

const SlideCarousel: React.FC<SlideCarouselProps> = ({ items }) => {
   const carouselRef = useRef<AliceCarousel>(null);

   const handlePrevClick = () => {
      if (carouselRef.current) {
         carouselRef.current.slidePrev();
      }
   };

   const handleNextClick = () => {
      if (carouselRef.current) {
         carouselRef.current.slideNext();
      }
   };

   const renderPrevButton = () => {
      return (
         <button
            onClick={handlePrevClick}
            className="prev-button absolute top-[50%] transform -translate-y-[50%] left-[5%] md:left-[10%]"
         >
            <GrLinkPrevious size={30} />
         </button>
      );
   };

   const renderNextButton = () => {
      return (
         <button
            onClick={handleNextClick}
            className="next-button absolute top-[50%] transform -translate-y-[50%] right-[5%] md:right-[10%]"
         >
            <GrLinkNext size={30} />
         </button>
      );
   };

   return (
      <AliceCarousel
         mouseTracking
         items={items}
         renderPrevButton={renderPrevButton}
         renderNextButton={renderNextButton}
         ref={carouselRef}
         disableDotsControls={true}
      />
   );
};

export default SlideCarousel;
