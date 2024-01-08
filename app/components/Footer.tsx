import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0d0d0e] py-8 text-white">
      <div className="mx-4 flex flex-row items-start justify-between lg:mx-[18.5%] ">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col lg:flex-row">
            <p className="mr-[5px]">
              Patríme pod{' '}
              <a
                href="http://www.technik.stuba.sk/index.html"
                target="_blank"
                className="cursor-pointer underline"
              >
                Vysokoškolský umelecký súbor Technik{' '}
              </a>
            </p>
            <p>
              {' '}
              a{' '}
              <a
                href="https://www.stuba.sk/"
                target="_blank"
                className="cursor-pointer underline"
              >
                STU Bratislava
              </a>
            </p>
          </div>

          <p className="mt-2">
            {' '}
            &copy; {Date().substring(11, 15)} Komorný orchester Technik
          </p>
          {/* <p>Sledujte nás</p> */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <a
              href="https://www.facebook.com/orchester.technik"
              target="_blank"
            >
              <Image
                src={'/facebook.png'}
                alt="facebook"
                width={100}
                height={100}
                className="h-[27.5px] w-[30.5px]"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCN5EhFknLnEjzKUPCZfg7FA"
              target="_blank"
            >
              <Image
                src={'/youtube.png'}
                alt="youtube"
                width={100}
                height={100}
                className="w-[40px]"
              />
            </a>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col text-[20px]
           font-bold"
          >
            <Link
              href={'/contact'}
              className="cursor-pointer hover:text-[#1f8851]"
            >
              Partneri
            </Link>
            <Link
              href={'/contact'}
              className="cursor-pointer hover:text-[#1f8851]"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
