import React from 'react';
import Link from 'next/link';

const ConcourseShort = () => {
  return (
    <div className="mx-[20%] py-24 text-white">
      <h1 className="text-center text-[25px] text-green-500">
        Príď medzi nás!
      </h1>
      <div className="flex flex-row justify-between text-[20px]">
        <div>
          <p>Hráš na sláčikovom nástroji?</p>
        </div>

        <div>
          <Link href={'/actual#concourse'}>
            <p className="cursor-pointer">Viac tu</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcourseShort;
