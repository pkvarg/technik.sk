import Image from 'next/image';
import Navbar1 from './../components/Navbar1';
import Carousel from '../components/Carousel';

export default function Home() {
  const slides = ['/tech01.jpg', '/techhero.jpg', '/facebook.png'];
  return (
    <>
      <Carousel slides={slides} />
    </>
  );
}
