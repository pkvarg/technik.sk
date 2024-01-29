import React from 'react';
import Image from 'next/image';
import EmailTel from './EmailTel';

const ConcourseFull = () => {
  return (
    <div className="px-1 lg:px-[20%]">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="w-[80%] lg:w-[40%]">
          <Image
            src={'/concoursef.jpg'}
            alt="technik"
            width={900}
            height={900}
            className="w-[100%]"
          />
        </div>
        <div className="w-[80%] lg:w-[60%]">
          {' '}
          <h1 className="text-center text-[25px] text-yellow-500">
            Príď medzi nás
          </h1>
          <p className="mt-2 text-justify">
            Nezáleží na tom, či hudbu ešte len študuješ, alebo to už bolo
            dávnejšie. Ani vek nie je podstatný - náš priemer je síce okolo 25,
            ale máme členov od čerstvých držiteľov občianskeho preukazu po
            členov aj nad 50 rokov. Podstatná je chuť si zahrať.
          </p>
          <p className="mt-4 text-justify">
            Niektorí z nás hudbu práve študujeme (konzervatórium alebo VŠMU) a
            Technik je pre nás výbornou príležitosťou, ako získať ďalšie
            skúsenosti. Mnohí z nás však máme len základné hudobné vzdelanie
            (absolventi II. a III. cyklu základných umeleckých škôl), a Technik
            nám vyhovuje ako hodnotný koníček, či už popri štúdiu alebo práci.
          </p>
          <p className="mt-4 text-justify">
            Nácviky orchestra sú každý pondelok a stredu v čase od 19:30 – 22:00
            hod. (okrem obdobia letných školských prázdnin) v priestoroch
            Rektorátu Slovenskej technickej univerzity v Bratislave na Vazovovej
            ul. č. 5 (vojdete do budovy, prejdete po vstupných schodoch
            vestibulom okolo vrátnice, choďte doľava dlhšou chodbou, na jej
            konci zabočte vľavo a po pravej strane vojdite do dverí UE 123.).
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-4 lg:flex-row">
        <div className="w-[80%] lg:w-[40%]">
          <p className="mt-4 text-justify">
            Príležitostne okrem toho mávame počas sezóny aj víkendové
            sústredenie. Vystúpenia máme asi raz za dva mesiace (väčšinou v
            Bratislave) a jeden niekoľkodňový zájazd do zahraničia za sezónu. No
            a náš aktuálny repertoár nájdeš na rovnomennej stránke.
          </p>

          <p className="mt-4 text-justify">
            Konkurzy sa bežne konajú začiatkom sezóny v septembri, no radi
            privítame každého nového záujemcu kedykoľvek aj počas roka. Stačí sa
            informovať – telefonicky, alebo e-mailom, alebo priamo prísť na
            skúšku.
          </p>
        </div>

        <div className="flex w-[100%] items-center justify-center lg:w-[60%]">
          <EmailTel />
        </div>
      </div>
    </div>
  );
};

export default ConcourseFull;
