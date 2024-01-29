import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

const Gallery = () => {
  const slides = ['/techhero.jpg', '/techslide2.png', '/techslide3.jpg'];

  return (
    <main className="relative bg-[#0d0e2f]  text-white">
      <Navbar />
      <h1 className="my-4 text-center text-[30px] text-yellow-500">Galéria</h1>
      <div className="m-auto w-[75%] py-8">
        <Carousel slides={slides} />
      </div>
    </main>
  );
};

export default Gallery;
