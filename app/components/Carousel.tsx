'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

type CarouselProps = {
  slides: string[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  slides?.map((s: string) => console.log(s));
  console.log(typeof slides);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-all duration-1000 ease-in-out`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide: string) => (
          <img src={slide} alt="technik" key={slide} className="" />
        ))}
      </div>
      {/* <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-[#000000]">
        <button onClick={previousSlide}>
          <FaArrowCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div> */}

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={'circle' + i}
            className={`h-4 w-4 cursor-pointer rounded-full border border-gray-500  ${
              i == current ? 'bg-white' : 'bg-gray-300'
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
