import Container from './Container';
import HeadBox from './HeadBox';
import { FaMapMarkerAlt, FaGift } from 'react-icons/fa';
import { MdOutlinePhoneIphone, MdEmail } from 'react-icons/md';

import { Infor } from '@prisma/client';
import React from 'react';

function getIconByName(iconName: string) {
   switch (iconName) {
      case 'FaMapMarkerAlt':
         return FaMapMarkerAlt;
      case 'FaGift':
         return FaGift;
      case 'MdOutlinePhoneIphone':
         return MdOutlinePhoneIphone;
      case 'MdEmail':
         return MdEmail;
      default:
         return null;
   }
}

interface HeadProps {
   infor: Infor[];
}

const Head: React.FC<HeadProps> = ({ infor }) => {
   // console.log(infor);
   return (
      <div className="hidden md:block md:py-2 w-full bg-[#cc0033] shadow-sm">
         <Container>
            <div className="flex xl:py-1 flex-row md:justify-between justify-center items-center xl:gap-16">
               {infor &&
                  infor.map((item) => {
                     const Icon = getIconByName(item.icon);
                     return (
                        <HeadBox key={item.id} title={item.title} icon={Icon} />
                     );
                  })}
            </div>
         </Container>
      </div>
   );
};

export default Head;
