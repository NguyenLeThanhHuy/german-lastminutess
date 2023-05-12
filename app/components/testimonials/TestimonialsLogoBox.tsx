import { useRef } from 'react';
import Testimonials from 'react-alice-carousel';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

interface TestimonialsLogoBoxProps {
   items: JSX.Element[];
}

const TestimonialsLogoBox: React.FC<TestimonialsLogoBoxProps> = ({ items }) => {
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
            className="prev-button hidden sm:block sm:top-[-120px] absolute md:top-[-110px] lg:top-[-100px] right-[-40px] sm:right-[-25px]"
         >
            <GrLinkPrevious size={30} />
         </button>
      );
   };

   const renderNextButton = () => {
      return (
         <button
            onClick={handleNextClick}
            className="next-button hidden sm:block sm:top-[-120px] absolute md:top-[-110px] lg:top-[-100px] right-[-105px] sm:right-[-60px] "
         >
            <GrLinkNext size={30} />
         </button>
      );
   };

   return (
      <div className="w-full flex flex-row items-center justify-center gap-3">
         <Testimonials
            items={items}
            ref={carouselRef}
            mouseTracking
            responsive={{
               0: { items: 1 },
               768: { items: 2 },
               1024: { items: 4 },
            }}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            touchTracking
            disableDotsControls
            controlsStrategy="default"
         />
      </div>
   );
};

export default TestimonialsLogoBox;
