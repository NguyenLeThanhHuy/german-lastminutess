import { Logo } from '@prisma/client';
import Heading from './Heading';
import TestimonialsLogo from './testimonials/TestimonialsLogo';

const Counterpart = ({ logoSrc }: { logoSrc: Logo[] }) => {
   return (
      <div className="w-full py-6">
         <div className="w-[70%] mx-auto">
            <Heading
               label="Đối tác của"
               color="#cc0033"
               textbold="German Lastminute"
            />
            <div className="py-4 text-xs sm:text-sm font-light text-neutral-500">
               Chúng tôi vinh dự là đối tác của nhiều tổ chức giáo dục uy tín
               trong và ngoài nước
            </div>

            <TestimonialsLogo logoSrc={logoSrc} />
         </div>
      </div>
   );
};

export default Counterpart;
