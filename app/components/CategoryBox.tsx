'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineDown } from 'react-icons/ai';

interface CategoryBoxProps {
   label: string;
   icon?: boolean;
   selected?: boolean;
   direct: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
   label,
   icon: Icon,
   selected,
   direct,
}) => {
   const router = useRouter();
   return (
      <div
         onClick={() => router.push(direct)}
         className={`flex flex-row items-center 
    justify-center px-1 py-3 md:py-1 lg:px-3 cursor-pointer gap-1 hover:text-neutral-800 transition border-b-2
    ${
       selected
          ? 'text-neutral-800 font-semibold  '
          : 'text-neutral-500 font-medium'
    }
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}`}
      >
         {' '}
         <div className="inline uppercase text-sm md:text-xs lg:text-sm">
            {label}
         </div>{' '}
         {Icon && <AiOutlineDown size={18} />}{' '}
      </div>
   );
};

export default CategoryBox;
