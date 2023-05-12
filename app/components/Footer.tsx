// 'use client';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaGift, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md';
import { SiTiktok } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';
import Image from 'next/image';
import {
   CopyRight,
   Infor,
   Social,
   FanPage,
   duhoc,
   Course,
} from '@prisma/client';
import { IconType } from 'react-icons/lib';

function getIconByName(iconName: string): IconType {
   switch (iconName) {
      case 'FaFacebookF':
         return FaFacebookF;
      case 'BsInstagram':
         return BsInstagram;
      case 'SiTiktok':
         return SiTiktok;
      case 'BsTwitter':
         return BsTwitter;
      case 'ImWhatsapp':
         return ImWhatsapp;
      case 'FaYoutube':
         return FaYoutube;
      default:
         return FaFacebookF;
   }
}

function getIconByName2(iconName: string): IconType {
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
         return FaMapMarkerAlt;
   }
}

const Footer = ({
   social,
   infor,
   copyRight,
   fanPage,
   course,
   duhoc,
}: {
   social: Social[];
   infor: Infor[];
   copyRight: CopyRight[];
   fanPage: FanPage[];
   course: Course[];
   duhoc: duhoc[];
}) => {
   return (
      <div className="w-full bg-[#ffcc00] pt-6 py-3">
         <div className="lg:max-w-[90%] w-full max-w-[100%] mx-auto flex flex-col items-center justify-center">
            <div className=" w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:px-5 gap-5">
               <div className="w-full sm:w-[50%] md:w-full mx-auto  md:mr-3 pl-2 flex flex-col md:justify-start items-center sm:items-start justify-center  gap-2">
                  <Image
                     src="/images/LOGO-5.png"
                     className=" object-contain"
                     alt="Logo"
                     width={100}
                     height={100}
                  />
                  {infor.map((item) => {
                     const Icon = getIconByName2(item.icon);
                     return (
                        <div
                           key={item.id}
                           className="flex flex-row justify-start gap-2"
                        >
                           <Icon size={18} />{' '}
                           <span className="pl-2 text-sm">{item.title}</span>
                        </div>
                     );
                  })}
               </div>
               <div className="w-full sm:w-[50%] md:w-full mx-auto  md:mr-3 pl-2 flex flex-col md:justify-start items-center sm:items-start justify-center  gap-2">
                  <div className="uppercase text-base text-neutral-700 font-bold">
                     Khóa học
                  </div>
                  {course.map((item) => (
                     <div
                        key={item.id}
                        className=" text-sm text-neutral-800 font-light"
                     >
                        {item.text}
                     </div>
                  ))}
               </div>
               <div className="w-full sm:w-[50%] md:w-full mx-auto  md:mr-3 pl-2 flex flex-col md:justify-start items-center sm:items-start justify-center  gap-2">
                  <div className="uppercase text-base text-neutral-700 font-bold">
                     Du học Đức
                  </div>

                  {duhoc.map((item) => (
                     <div
                        key={item.id}
                        className=" text-sm text-neutral-800 font-light"
                     >
                        {item.text}
                     </div>
                  ))}
               </div>
               <div className="w-full sm:w-[50%] md:w-full mx-auto  md:mr-3 pl-2 flex flex-col md:justify-start items-center sm:items-start justify-center  gap-2">
                  <div className="uppercase text-base text-neutral-800 font-bold">
                     fanpage
                  </div>
                  {fanPage.map((item) => (
                     <iframe
                        key={item.id}
                        src={item.src}
                        width="200"
                        height="150"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                     ></iframe>
                  ))}
               </div>
            </div>
         </div>
         <div className="mt-5 mb-3">
            <hr
               style={{ backgroundColor: '#3a3b3c' }}
               className="w-full mt-3 h-[0.5px] border-none"
            />
         </div>
         <div className="flex overflow-x-auto flex-col justify-center mr-2 px-4 items-start sm:items-center gap-3">
            <div className="flex flex-row justify-center mx-2 items-center gap-2 sm:gap-5">
               {social &&
                  social.map((item) => {
                     const Icon = getIconByName(item.icon);
                     return (
                        <div
                           key={item.id}
                           className="w-[50px] h-[50px] flex flex-row items-center justify-center rounded-full bg-white"
                        >
                           <Icon fill={item.color} size={18} />
                        </div>
                     );
                  })}
            </div>
         </div>
         <div className="flex overflow-x-auto flex-col justify-center pt-3 mr-2 px-4 items-start sm:items-center gap-3">
            <div className="text-sm font-bold text-neutral-800">
               {copyRight.map((item) => (
                  <div key={item.id} className="">
                     {item.text}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Footer;
