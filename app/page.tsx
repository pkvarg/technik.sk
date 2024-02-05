import Image from 'next/image';
import Navbar from './components/Navbar';
import NewEvents from './components/shorts/NewEvents';
import MailingList from './components/MailingList';
import ConcourseShort from './components/shorts/ConcourseShort';

export default function Home() {
  // const slides = ['/techhero.jpg', '/techslide2.png', '/techslide3.jpg'];

  return (
    <main className="relative  bg-[#0d0e2f]">
      <div className="techhero h-screen lg:h-[100vh]">
        {/* <div className="absolute left-1/2 w-[100%] -translate-x-1/2 transform">
          <Carousel slides={slides} />
        </div> */}
        <Navbar />
        <h1 className="pl-8 pt-12 text-[35px] font-bold leading-[45px] text-white lg:pl-[8%] lg:pt-8 lg:text-[45px] lg:leading-[75px]">
          {' '}
          Komorný orchester
        </h1>
        <h2 className="-mt-2 pl-8 text-[95px] font-bold text-white lg:-mt-10  lg:pl-[10%] lg:text-[105px]">
          Technik
        </h2>
      </div>
      <NewEvents />
      <MailingList />
      {/* <div className="m-auto w-[75%]">
        <Carousel slides={slides} />
      </div> */}
      <ConcourseShort />
    </main>
  );
}
