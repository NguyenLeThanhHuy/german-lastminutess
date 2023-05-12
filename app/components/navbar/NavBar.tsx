'use client';
import Logo from './Logo';
import Categories from './Categories';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Navbar } from '@prisma/client';

interface NavBarProps {
   categories: Navbar[];
}

const NavBar: React.FC<NavBarProps> = ({ categories }) => {
   const [showNavBar, setShowNavBar] = useState(false); // khai báo trạng thái của thanh navbar full width

   const handleClick = () => {
      setShowNavBar(!showNavBar); // đảo ngược trạng thái của thanh navbar full width khi click vào icon bar
      if (!showNavBar) {
         document.body.style.overflow = 'hidden'; // ngăn chặn người dùng scroll màn hình
      } else {
         document.body.style.overflow = 'auto'; // cho phép người dùng scroll màn hình trở lại
      }
   };

   return (
      <div className="flex h-[50px] md:h-[79px] w-full flex-row px-3 md:px-0 justify-between lg:justify-center">
         <div className="z-40 relative flex-1 lg:flex-none flex flex-row items-center justify-between lg:px-3 sm:py-[19px]">
            <Logo />
            <div
               className={`hidden md:flex flex-col justify-center md:ml-4 lg:ml-6 items-center
               }`}
            >
               {' '}
               {/* sử dụng template literals để thêm class "w-full md:w-auto" vào div Categories khi trạng thái showNavBar là true */}
               <Categories categories={categories} />
            </div>
            <FaBars className="md:hidden" size={24} onClick={handleClick} />{' '}
            {/* thêm sự kiện onClick vào FaBars */}
            {showNavBar && (
               <div className="absolute top-0 p-5 right-[50%] transform translate-x-[50%] bg-white w-full">
                  <div className="absolute top-5 right-5">
                     <AiOutlineCloseCircle onClick={handleClick} size={24} />
                  </div>
                  <Categories categories={categories} />
               </div>
            )}
         </div>
      </div>
   );
};

export default NavBar;
