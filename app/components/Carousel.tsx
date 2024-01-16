'use client';

'use client';
import { transform } from 'next/dist/build/swc';
import React, { useState } from 'react';
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

  return (
    <div className="relative overflow-hidden">
      <div
        className={`duration-40 flex transition ease-out`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide: string) => (
          <img src={slide} alt="technik" key={slide} />
        ))}
      </div>
      <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-[#000000]">
        <button onClick={previousSlide}>
          <FaArrowCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={'circle' + i}
            className={`h-5 w-5 cursor-pointer rounded-full  ${
              i == current ? 'bg-white' : 'bg-gray-500'
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
