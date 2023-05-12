import Image from 'next/image';
import Heading from './Heading';

const ImageInfo = () => {
   return (
      <div className="w-full bg-[#eee] pt-6 py-10">
         <div className="w-full px-2 md:w-[70%] mx-auto">
            <Heading
               label="Một số hình ảnh tại"
               textbold="German Lastminute"
               color="#cc0033"
            />
            <div className="grid gap-5 lg:gap-10 mt-10 h-full  grid-cols-2 w-full">
               <div className="w-full  gap-2 lg:gap-5 max-h-[120vh] grid grid-rows-2 grid-cols-2">
                  <div className="row-span-2 col-span-2 bg-gray-400">
                     <img
                        className="w-full h-full object-cover"
                        src="/images/img1.png"
                        alt=""
                     />
                  </div>
                  <div className="row-span-1  gap-2 xl:gap-5 col-span-2 grid grid-cols-2">
                     <div className="bg-gray-200">
                        <img
                           className="w-full h-full object-cover"
                           src="/images/img2.png"
                           alt=""
                        />
                     </div>
                     <div className="bg-gray-200">
                        <img
                           className="w-full h-full object-cover"
                           src="/images/img3.png"
                           alt=""
                        />
                     </div>
                     <div className="bg-gray-200">
                        <img
                           className="w-full h-full object-cover"
                           src="/images/img5.png"
                           alt=""
                        />
                     </div>
                     <div className="bg-gray-200">
                        <img
                           className="w-full h-full object-cover"
                           src="/images/img4.png"
                           alt=""
                        />
                     </div>
                  </div>
               </div>

               <div className="col-span-1 max-h-[120vh] grid  gap-2 xl:gap-5 grid-rows-4">
                  <div className="row-span-1 relative">
                     <img
                        className="w-full h-full object-cover"
                        src="/images/OP1.png"
                        alt=""
                     />
                     <img
                        className="w-[40px] absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] h-[40px] object-cover"
                        src="/images/icon.png"
                        alt=""
                     />
                  </div>
                  <div className="row-span-1 relative">
                     <img
                        className="w-full h-full object-cover"
                        src="/images/OP2.png"
                        alt=""
                     />
                     <img
                        className="w-[40px] absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] h-[40px] object-cover"
                        src="/images/icon.png"
                        alt=""
                     />
                  </div>
                  <div className="row-span-1 relative">
                     {' '}
                     <img
                        className="w-full h-full object-cover"
                        src="/images/OP3.png"
                        alt=""
                     />
                     <img
                        className="w-[40px] absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] h-[40px] object-cover"
                        src="/images/icon.png"
                        alt=""
                     />
                  </div>
                  <div className="row-span-1 relative">
                     <img
                        className="w-full h-full object-cover"
                        src="/images/OP4.png"
                        alt=""
                     />
                     <img
                        className="w-[40px] absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] h-[40px] object-cover"
                        src="/images/icon.png"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ImageInfo;
