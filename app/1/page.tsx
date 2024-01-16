import Image from 'next/image';
import Navbar1 from './../components/Navbar1';
import Carousel from '../components/Carousel';

export default function Home() {
  const slides = ['/tech01.jpg', '/techhero.jpg', '/facebook.png'];
  return (
    <div className="m-auto w-[60%]">
      <Carousel slides={slides} />
    </div>
  );
}
