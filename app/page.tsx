import Image from 'next/image';
import Navbar from './components/Navbar';
import MailingList from './components/MailingList';
import Navbar1 from './components/Navbar1';
import Carousel from './components/Carousel';
import ConcourseShort from './components/ConcourseShort';

export default function Home() {
  const slides = ['/techhero.jpg', '/techslide2.png', '/techslide3.jpg'];

  return (
    <main className="relative bg-[#0d0d0e]">
      <div className="techhero h-screen lg:h-[100vh]">
        <Navbar />
        <h1 className="pl-8 text-[45px] font-bold leading-[45px] text-white lg:pl-[8%] lg:pt-8 lg:leading-[75px]">
          {' '}
          Komorný orchester
        </h1>
        <h2 className="-mt-2 pl-8 text-[75px] font-bold text-white lg:-mt-10  lg:pl-[10%] lg:text-[105px]">
          Technik
        </h2>
      </div>
      <MailingList />
      <div className="m-auto w-[75%]">
        <Carousel slides={slides} />
      </div>
      <ConcourseShort />
    </main>
  );
}
