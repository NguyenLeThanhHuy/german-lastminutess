import { Studen } from '@prisma/client';
import Heading from '../Heading';
import Testimonials from '../testimonials/Testimonials';

const FormerStudent = ({ studen }: { studen: Studen[] }) => {
   return (
      <div className="relative">
         <div className="w-full h-full">
            <div className="relative w-[70%] mx-auto py-8">
               <Heading label="Học viên của " textbold=" Germen Lastminute" />
               <div className="py-4 text-sm font-light text-neutral-500 w-full md:w-[60%]">
                  Torquem detraxit hosti et quidem faciunt, ut et negent satis
                  esse appetendum, alterum. Si sine causa? quae fuerit causa,
                  mox videro; interea hoc epicurus in liberos.
               </div>
            </div>
            <Testimonials studen={studen} />
         </div>
      </div>
   );
};

export default FormerStudent;
