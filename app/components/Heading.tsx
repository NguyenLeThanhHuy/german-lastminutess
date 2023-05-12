'use client';

interface HeadingProps {
   label: string;
   color?: string;
   textbold: string;
}

const Heading: React.FC<HeadingProps> = ({
   label,
   textbold,
   color = 'black',
}) => {
   return (
      <div className="lg:text-[30px] text-lg md:text-xl ">
         <h3 className="font-sm relative inline">
            {label}{' '}
            <span className={`text-[${color}] font-semibold`}>{textbold}</span>
            <hr
               style={{ backgroundColor: '#f5d062', height: '2px' }}
               className="absolute right-0 left-0 mt-1 transform -translate-x-4"
            />
         </h3>
      </div>
   );
};

export default Heading;
