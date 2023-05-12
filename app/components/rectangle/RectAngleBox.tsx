'use client';
import { IconType } from 'react-icons/lib';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface RectAngleBoxProps {
   label: string;
   count: number;
   desc: string;
   icon?: IconType;
   direction?: string;
   border?: string;
   iconSize: number;
}

const RectAngleBox: React.FC<RectAngleBoxProps> = ({
   label,
   count,
   desc,
   border,
   iconSize,
   icon: Icon,
}) => {
   const [showCount, setShowCount] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.pageYOffset;
         const threshold =
            document.documentElement.scrollHeight - window.innerHeight * 0.2;
         console.log(threshold);
         if (currentScrollY > threshold) {
            setShowCount(true);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
         console.log(2);
      };
   }, []);

   return (
      <div className={`w-full flex items-center flex-col justify-between`}>
         <div
            style={{
               borderRight: `${border}`,
               borderLeft: `${border}`,
            }}
            className={`flex items-center w-full py-3 px-20 bg-[#cc0033] flex-col justify-center`}
         >
            <div className="flex flex-row gap-3 items-center justify-center text-center">
               <div className="text-white text-[24px]">{label}</div>
               <div
                  className={`${
                     Icon
                        ? 'flex flex-row justify-between items-center gap-1'
                        : ''
                  } font-semibold text-[#ffcc00] text-4xl`}
               >
                  {showCount && (
                     <CountUp
                        end={count} // Thay 100 bằng số mà bạn muốn
                        duration={3}
                        separator=","
                     />
                  )}
                  {Icon && <Icon fill="#ffcc00" size={iconSize} />}
               </div>
            </div>
         </div>
         <div className="w-full items-center py-5 lg:w-[325px] lg:px-20 px-25 lg:pt-5 text-center">
            {desc}
         </div>
      </div>
   );
};

export default RectAngleBox;
