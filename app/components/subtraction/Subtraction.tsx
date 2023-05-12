import { Subtraction } from '@prisma/client';
import SubtractionBox from './SubtractionBox';

const Subtraction = ({ sub }: { sub: Subtraction[] }) => {
   return (
      <div className="max-w-[2520px] bg-[#eee] xl:px-20 md:px-10 sm:px-2 px-4">
         <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-center">
               <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-14 gap-y-14 gap-x-8 lg:py-14 lg:gap-14 sm:overflow-x-auto">
                  {sub.map((item) => (
                     <SubtractionBox
                        key={item.order}
                        order={item.order}
                        background={item.background}
                        label={item.label}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Subtraction;
