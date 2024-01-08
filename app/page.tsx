import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="techhero h-[100vh]">
        <Navbar />
        <h1 className="pl-8 text-[45px] font-bold leading-[45px] text-white lg:pt-8 lg:leading-[75px]">
          {' '}
          Komorný orchester
        </h1>
        <h2 className="-mt-2 pl-8 text-[75px] font-bold text-white  lg:-mt-10 lg:text-[105px]">
          Technik
        </h2>
      </div>
    </main>
  );
}
