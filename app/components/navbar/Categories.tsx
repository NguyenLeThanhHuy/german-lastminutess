'use client';

import { usePathname } from 'next/navigation';
import CategoryBox from '../CategoryBox';
import { Navbar } from '@prisma/client';
import React from 'react';

interface CategoriesProps {
   categories: Navbar[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
   const pathname = usePathname();

   return (
      <div className="flex flex-col w-full md:flex-row justify-center overflow-x-auto items-center">
         {categories.map((item) => (
            <CategoryBox
               key={item.label}
               label={item.label}
               icon={item.icon}
               selected={pathname === item.path}
               direct={item.path}
            />
         ))}
      </div>
   );
};

export default Categories;
