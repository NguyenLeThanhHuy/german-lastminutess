import { useRef } from 'react';
import Testimonials from 'react-alice-carousel';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

interface TestimonialsBoxProps {
   items: JSX.Element[];
}

const TestimonialsBox: React.FC<TestimonialsBoxProps> = ({ items }) => {
   const carouselRef = useRef<Testimonials>(null);

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
            className="prev-button hidden sm:block absolute top-[-220px] md:top-[-200px] right-[60px] "
         >
            <GrLinkPrevious size={30} />
         </button>
      );
   };

   const renderNextButton = () => {
      return (
         <button
            onClick={handleNextClick}
            className="next-button hidden sm:block absolute top-[-220px] md:top-[-200px] right-[25px] "
         >
            <GrLinkNext size={30} />
         </button>
      );
   };

   return (
      <div className="w-full">
         <Testimonials
            items={items}
            ref={carouselRef}
            mouseTracking
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            touchTracking
            disableDotsControls
            controlsStrategy="default"
            responsive={{
               0: { items: 1 },
               768: { items: 1 },
               1024: { items: 1 },
            }}
         />
      </div>
   );
};

export default TestimonialsBox;
