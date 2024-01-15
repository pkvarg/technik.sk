'use client';
import { type } from 'os';
import React from 'react';

type CarouselProps = {
  slides: string[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  slides?.map((s: string) => console.log(s));
  console.log(typeof slides);

  return (
    <div>
      {slides.map((slide: string) => (
        <img src={slide} alt="technik" />
      ))}
    </div>
  );
};

export default Carousel;
