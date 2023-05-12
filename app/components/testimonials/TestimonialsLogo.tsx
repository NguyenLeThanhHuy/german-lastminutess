'use client';
import Image from 'next/legacy/image';
import TestimonialsLogoBox from './TestimonialsLogoBox';

import { Logo } from '@prisma/client';

const TestimonialsLogo = ({ logoSrc }: { logoSrc: Logo[] }) => {
   const items = logoSrc.map((item) => (
      <div key={item.id} className="w-full h-full px-5">
         <Image
            alt="Image"
            src={item.src}
            className="object-contain w-full h-full"
            width={500}
            height={500}
            layout="responsive"
         />
      </div>
   ));
   return (
      <div className="py-5 w-full">
         <TestimonialsLogoBox items={items} />
      </div>
   );
};

export default TestimonialsLogo;
