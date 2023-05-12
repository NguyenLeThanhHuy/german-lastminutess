'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const Logo = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(true);
   const hydratedRef = useRef(false);

   useEffect(() => {
      hydratedRef.current = true;
   }, []);

   useEffect(() => {
      if (hydratedRef.current) {
         setLoading(false);
      }
   }, [hydratedRef]);
   return (
      <>
         {loading && <Skeleton />}
         {!loading && (
            <Image
               onClick={() => router.push('/')}
               width={120}
               height={120}
               className="h-auto"
               alt="Logo"
               src={'/images/LOGO-3.png'}
            />
         )}
      </>
   );
};

export default Logo;
