'use client';
import RectAngleBox from './RectAngleBox';
import { FaPlus } from 'react-icons/fa';
import { BsPercent } from 'react-icons/bs';
import { RectAngle } from '@prisma/client';
import { IconType } from 'react-icons/lib';

function getIconByName(iconName: string): IconType {
   switch (iconName) {
      case 'FaPlus':
         return FaPlus;
      case 'BsPercent':
         return BsPercent;

      default:
         return BsPercent;
   }
}

const RectAngle = ({ rectAngle }: { rectAngle: RectAngle[] }) => {
   return (
      <div className="flex flex-col md:flex-col mx-auto lg:flex-row justify-center items-center">
         {rectAngle.map((item, index) => {
            const Icon = getIconByName(item.icon);
            return (
               <div
                  key={item.id}
                  className={`w-full ${
                     index % 2 !== 1 ? 'lg:w-2/5' : 'lg:w-1/5'
                  } md:w-full`}
               >
                  {' '}
                  <RectAngleBox
                     iconSize={item.iconsize}
                     desc={item.text}
                     label={item.label}
                     count={item.count}
                     icon={Icon}
                     direction={item?.direction ? item?.direction : ''}
                     border={item?.border ? item?.border : ''}
                  />
               </div>
            );
         })}
      </div>
   );
};

export default RectAngle;
