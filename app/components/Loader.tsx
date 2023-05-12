'use client';

import { ClipLoader } from 'react-spinners';

const Loader = () => {
   return (
      <div
         className="
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
      >
         <ClipLoader color="#cc0033" loading size={100} />
      </div>
   );
};

export default Loader;
