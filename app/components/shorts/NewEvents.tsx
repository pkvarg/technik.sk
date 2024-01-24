'use client';
import React from 'react';
import Image from 'next/image';
import { MdDownload } from 'react-icons/md';

const NewEvents = () => {
  const downloadFile = (fileName: string) => {
    //const fileName = 'ebook.pdf';
    fetch(`${fileName}`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = `${fileName}`;
        alink.click();
      });
    });
  };

  // will be dynamic forEach event from DB
  return (
    <div className="mx-4 py-24 text-white lg:mx-[20%]">
      <h1 className="text-center text-[35px] text-green-500">
        Pozvánka na vianočný koncert v utorok 19.12.2023
      </h1>
      <div className="my-8 flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="w-[100%] text-[25px] leading-[32.5px] lg:w-[55%]">
          <p className="text-justify">
            Vážení priaznivci, pozývame vás a vašich známych na
            <span className="mx-2 text-yellow-300">
              Vianočný koncert Komorného orchestra Technik v utorok 19. decemba
              2023 o 19:00
            </span>
            v Koncertnej sieni Dvorana VŠMU, Zochova 1, Bratislava.
          </p>
          <p className="mt-8">
            <span className="mr-2 text-red-500">TIP:</span>
            Pridajte sa na
            <a
              href="https://www.facebook.com/events/341328608521070/"
              target="_blank"
              className="mx-2 text-red-500"
            >
              facebookové podujatie ku koncertu
            </a>
            a pozvite na ňu aj priateľov.
          </p>
          <p className="mt-4 text-[20px]">
            Vstupné je dobrovoľné a tešíme sa na vás!
          </p>
          <div
            onClick={() => downloadFile('20231219event.jpg')}
            className="ml-auto mt-8 flex cursor-pointer flex-row items-center gap-2 text-[20px] text-yellow-300"
          >
            <p>Plagát PDF</p>
            <MdDownload className="text-[25px]" />
          </div>
        </div>
        <div className="w-[100%] lg:w-[45%]">
          <Image
            src={'/20231219event.jpg'}
            alt="orchester technik"
            width={500}
            height={500}
            className="ml-auto w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
