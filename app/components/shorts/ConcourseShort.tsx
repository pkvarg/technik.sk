import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
Image;

const ConcourseShort = () => {
  return (
    <div className="mx-4 py-12 text-white lg:mx-[20%]">
      <h1 className="text-center text-[35px] text-green-500">
        Hráš na sláčikovom nástroji?
      </h1>
      <div className="text-[20px]">
        <div className="my-8 flex flex-col items-center gap-16 lg:flex-row">
          <Image
            src={'/concourse01rm.png'}
            alt="instrument"
            width={500}
            height={500}
            className="w-[80%] lg:w-[35%] 2xl:w-[30%]"
          />

          <div className="flex flex-col gap-2">
            <p className="text-center text-[35px]">Príď medzi nás!</p>
            <p className="text-center">
              Privítame posily: husle, viola, čelo, kontrabas.
            </p>
            <div>
              <Link href={'/actual#concourse'}>
                <p className="cursor-pointer text-center text-yellow-500">
                  Viac info
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* <div>
          <Link href={'/actual#concourse'}>
            <p className="cursor-pointer">Viac tu</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ConcourseShort;
