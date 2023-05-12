'use client';
import Image from 'next/image';
import TestimonialsBox from './TestimonialsBox';
import { Studen } from '@prisma/client';

const Testimonials = ({ studen }: { studen: Studen[] }) => {
   const items = studen.map((item) => (
      <div
         key={item.name}
         className="flex flex-row gap-3 justify-between bg-transparent"
      >
         <div className="p-2 lg:p-5 flex flex-col flex-1 gap-2 bg-white rounded-2xl shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)]">
            <div className="flex flex-row justify-start items-start gap-2">
               <Image
                  alt="Image"
                  src={item.image}
                  className="object-cover rounded-lg"
                  width={50}
                  height={50}
               />
               <div className="flex flex-col">
                  <div className="text-xs sm:text-sm text-neutral-800 font-bold">
                     {item.name}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500">
                     {item.subtext}
                  </div>
               </div>
            </div>
            <div className="text-neutral-500 font-light text-xs sm:text-sm">
               {item.text}
            </div>
         </div>
         <div className="p-2 lg:p-5 flex flex-col flex-1 gap-2 bg-white rounded-2xl shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)]">
            <div className="flex flex-row justify-start items-start gap-2">
               <Image
                  alt="Image"
                  src={item.image2}
                  className="object-cover rounded-lg"
                  width={50}
                  height={50}
               />
               <div className="flex flex-col">
                  <div className="sm:text-sm text-xs text-neutral-800 font-bold">
                     {item.name2}
                  </div>
                  <div className="sm:text-sm text-xs text-neutral-500">
                     Đỗ B1 với điểm trung bình 9.1!
                  </div>
               </div>
            </div>
            <div className="text-neutral-500 font-light text-xs sm:text-sm">
               {item.text2}
            </div>
         </div>
      </div>
   ));
   return (
      <div className="mt-10 py-2 md:py-4 w-full h-[5%] sm:h-[33vh] md:h-[40vh] bg-[#cc0033]">
         <div className="px-2 w-full lg:w-[70%] mx-auto">
            {' '}
            <TestimonialsBox items={items} />
         </div>
      </div>
   );
};

export default Testimonials;
