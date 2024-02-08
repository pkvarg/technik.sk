import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';

const Personages = () => {
  return (
    <div className="bg-black">
      <div>
        <Navbar />
        <h1 className="mt-4 text-center text-[35px] text-yellow-500">
          Osobnosti
        </h1>
        <div className="flex flex-col items-center justify-center gap-16 pb-16 pt-8 lg:flex-row lg:gap-8">
          <div>
            <Image
              src={'/Mirko00.jpg'}
              height={500}
              width={500}
              alt="Mirko Krajci"
              className="w-[100%] px-4 lg:w-[75%] lg:px-0"
            />
          </div>
          <div>
            <h1 className="text-[55px] text-yellow-500">Mirko Krajči</h1>
            <h2 className="-mt-4 text-[25px] text-yellow-500">
              umelecký vedúci, dirigent
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white px-4 py-12 text-justify text-[20px] lg:px-[20%] 2xl:px-[25%]">
        <p>
          Je laureátom medzinárodnej dirigentskej súťaže „Maestro Silva Pereira
          Prize“, Porto (Portugalsko, 2002) a Medzinárodnej skladateľskej
          súťaže, Fulda (Nemecko, 1993).
        </p>
        <p>
          Štúdium na Konzervatóriu v Bratislave ukončil s titulom „Najlepší
          absolvent roka“ a pokračoval v štúdiu na VŠMU v Bratislave (skladba,
          dirigovanie). V roku 1992 absolvoval dirigentskú stáž na Conservatoire
          National Supérieur v Paríži. Pôsobil ako zbormajster Detského a
          mládežníckeho speváckeho zboru Slovenského rozhlasu, neskôr ako
          dramaturg Symfonického orchestra Slovenského rozhlasu. V súčasnosti je
          hudobným režisérom Slovenského rozhlasu, od r. 2006 šéfrežisérom. Od
          r. 1996 je umeleckým vedúcim a dirigentom Komorného orchestra Technik.
        </p>
        <p>
          Ako dirigent spolupracuje s viacerými orchestrami. Dirigoval v rôznych
          krajinách, spolupracoval s mnohými významnými sólistami. Intenzívne sa
          venuje aj komponovaniu. Viaceré skladby vznikli na objednávky (BHS,
          SND, SOSR, ŠFK a i.). Okrem spomínaných medzinárodných súťaží je
          držiteľom početných prestížnych ocenení za svoju skladateľskú činnosť:
          Cena J. L. Bellu (1997), Cena SOZA (1997), Prémia J. Cikkera (2007).
          Zo skladateľských súťaží na Slovensku si odniesol celý rad a cien a
          prémií.{' '}
        </p>
      </div>
      <div className="mx-[20%] flex flex-col items-center justify-center gap-16 pb-16 pt-8 lg:flex-row lg:gap-8">
        <div>
          <Image
            src={'/Torok00.jpg'}
            height={500}
            width={500}
            alt="Frantisek Torok"
            className="w-[100%] px-4 lg:w-[75%] lg:px-0"
          />
        </div>
        <div>
          <h1 className="text-[55px] text-yellow-500">František Török</h1>
          <h2 className="-mt-4 text-[25px] text-yellow-500">hudobný pedagóg</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white px-4 py-12 text-justify text-[20px] lg:px-[20%] 2xl:px-[25%]">
        <p>
          Študoval na Štátnom konzervatóriu v Bratislave, u prof. Andrey
          Šestákovej, absolventky Konzervatória v Moskve, v majstrovskej triede
          svetoznámeho Leonida Kogana, neskôr na VŠMU v Bratislave u prof.
          Aladára Móžiho, primária Slovenského kvarteta.
        </p>
        <p>
          Je zakladajúcim členom Moyzesovho kvarteta, jedného z popredných
          telies komornej hudby na Slovensku, s ktorým sa od roku 1979
          zúčastňoval medzinárodných interpretačných kurzov, spolupracoval s
          členmi významných svetových kvartet (Amadeus Quartet, Alban Berg
          Quartet a i.), uskutočnil viac ako tisíc koncertov v mnohých krajinách
          sveta, nahral viac ako 20 CD platní pre rôzne gramofónové firmy a
          realizoval početné rozhlasové nahrávky na Slovensku aj v zahraničí.
        </p>
        <p>
          Do roku 2006 bol umeleckým vedúcim komorného orchestra „Comorra“ v
          Komárne, kde založil aj tradíciu majstrovských kurzov komornej hudby
          (od roku 1997). V rokoch 1997 až 2006 bol členom sláčikového tria
          Amadé v Salzburgu. Pedagogicky pôsobí na konzervatóriu v Bratislave,
          kde vyučuje hru na husliach a komornú hru. Od roku 2007 spolupracuje s
          Komorným orchestrom Technik ako hudobný pedagóg.
        </p>
      </div>
    </div>
  );
};

export default Personages;
