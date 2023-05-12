import getCopyRight from './actions/getCopyRight';
import getInfo from './actions/getInfo';
import getLogo from './actions/getLogo';
import getSlider from './actions/getSlider';
import getSocials from './actions/getSocial';
import getStudent from './actions/getStudent';
import getSub from './actions/getSubtraction';
import Counterpart from './components/Counterpart';
import Footer from './components/Footer';
import ImageInfo from './components/ImageInfo';
// import Loader from './components/Loader';
import FormerStudent from './components/former-students/FormerStudents';
import RectAngle from './components/rectangle/RectAngle';
import SlideCarousel from './components/slider/SlideCarousel';
import Subtraction from './components/subtraction/Subtraction';
import 'aos/dist/aos.css';
import getCourse from './actions/getCourse';
import getFanpage from './actions/getFanpage';
import getDuhoc from './actions/getDuhoc';
import getRectAngle from './actions/getRectAngle';

const Home = async () => {
   const logoSrc = await getLogo();
   const slide = await getSlider();
   const sub = await getSub();
   const studen = await getStudent();
   const social = await getSocials();
   const copyRight = await getCopyRight();
   const infor = await getInfo();
   const fanPage = await getFanpage();
   const course = await getCourse();
   const duhoc = await getDuhoc();
   const rectAngle = await getRectAngle();

   const items = slide.map((item) => (
      <div
         key={item.id}
         className="relative pt-[70%] md:pt-[39.5%]"
         style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
         }}
      >
         {/* <img src="/images/BANNER.png" role="presentation" /> */}
         <div className="absolute text-[#cc0033] w-[35%] transform flex flex-col justify-center items top-[43%] left-[19%] -translate-y-[50%]">
            <h2 className=" sm:text-xl md:text-2xl lg:text-4xl font-bold pb-0 md:pb-2 lg:pb-4">
               {item.text}
            </h2>
            <p
               className="text-xs md:text-sm text-light lg:text-lg font-normal"
               style={{ lineHeight: '1.3' }}
            >
               {' '}
               {item.textsub}
            </p>
         </div>
      </div>
   ));

   // const [loading, setLoading] = useState(true);
   // const hydratedRef = useRef(false);

   // useEffect(() => {
   //    hydratedRef.current = true;
   // }, []);

   // useEffect(() => {
   //    if (hydratedRef.current) {
   //       setLoading(false);
   //    }
   // }, [hydratedRef]);

   return (
      <>
         {/* {loading && <Loader />} */}
         {/* {!loading && ( */}
         <div className="relative">
            <SlideCarousel items={items} />
            <Subtraction sub={sub} />
            <div className="w-full pb-7">
               <RectAngle rectAngle={rectAngle} />
            </div>
            <FormerStudent studen={studen} />
            <ImageInfo />
            <Counterpart logoSrc={logoSrc} />
            <Footer
               duhoc={duhoc}
               course={course}
               fanPage={fanPage}
               infor={infor}
               social={social}
               copyRight={copyRight}
            />
         </div>
         {/* )} */}
      </>
   );
};

export default Home;
