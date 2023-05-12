interface SubtractionBoxProps {
   order: number;
   label: string;
   background: string;
}

const SubtractionBox: React.FC<SubtractionBoxProps> = ({
   order,
   label,
   background,
}) => {
   return (
      <div className="relative rounded-md bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)] py-3 px-2 lg:py-6 lg:px-4">
         <div className="flex relative flex-col items-center justify-center">
            <div
               style={{ backgroundColor: `${background}` }}
               className={`order w-[55px] 
            top-[-50px] flex flex-row items-center text-white box-shadow-custom font-semibold text-2xl justify-center h-[55px] rounded-full 
            absolute left-[50%] transform -translate-x-[50%]`}
            >
               {' '}
               {order}
            </div>
            <div className="font-semibold p-1 pt-3 w-[60%] text-center">
               {label}
            </div>
         </div>
      </div>
   );
};

export default SubtractionBox;
