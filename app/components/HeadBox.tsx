import { IconType } from 'react-icons';
import React from 'react';

interface HeadBoxProps {
   title: string;
   icon: IconType | null;
   background?: boolean;
}

const HeadBox: React.FC<HeadBoxProps> = ({ title, icon: Icon, background }) => {
   return (
      <div
         className={`${
            background ? 'bg-[#ffcc00]' : ''
         } rounded-lg flex flex-row justify-between md:py-1 lg:py-2 items-center lg:mx-5 text-white md:text-sm`}
      >
         {Icon && (
            <Icon
               size={25}
               fill={background ? '#cc0033' : 'white'}
               className={
                  background ? 'bg-transparent md:pl-2 pl-1' : 'md:pl-2 pl-1'
               }
            />
         )}
         <div className="flex flex-col items-center justify-center">
            <div
               className={`text-light md:pr-1 lg:pr-3 md:pl-1 lg:pl-2 ${
                  background ? 'text-[#cc0033] font-semibold' : ''
               }`}
            >
               {title}
            </div>
         </div>
      </div>
   );
};

export default HeadBox;
