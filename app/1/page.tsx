import Image from 'next/image';
import Navbar1 from './../components/Navbar1';

export default function Home() {
  return (
    <main className="relative h-screen bg-[#cfb069e4]">
      <Navbar1 />
      <div className="absolute left-[10%] top-[33%] z-0 h-[700px] w-[95%] bg-white"></div>
      <div className="z-9999 techhero1 absolute left-[5%] top-[17.5%] h-[82.5vh] w-[90%]">
        <h1 className="m-8 text-[45px] font-bold leading-[75px] text-white">
          {' '}
          Komorný orchester <br />
          <span className="text-[105px]">Technik</span>
        </h1>
      </div>
    </main>
  );
}
