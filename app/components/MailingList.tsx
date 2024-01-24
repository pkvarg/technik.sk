'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MailingList = () => {
  const [email, setEmail] = useState('');
  const [showAgree, setShowAgree] = useState(false);

  const subscribe = async (e: any) => {
    e.preventDefault();
    if (email === '') return toast.error('Zadajte email, prosím.');
    const res = await axios.put('api/subscribe', {
      email,
    });
    console.log(res.data);
    if (res?.data) {
      toast.success('Ďakujeme!');
      setEmail('');
    } else {
      toast.error('Nastala chyba. Napíšte nám email, prosím.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 text-yellow-300 lg:p-16">
      <p className="text-center text-[25px]">
        Prihláste sa k odoberaniu pozvánok na naše koncerty
      </p>

      <form onSubmit={subscribe} className="flex flex-col justify-center">
        <input
          type="text"
          placeholder="Zadajte svoj email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-[100%] py-1 pl-1 text-[#0d0d0e] lg:w-[100%]"
        />

        <div className="mt-4 flex flex-row items-center gap-4 lg:gap-2">
          <input type="checkbox" required />
          <p className="text-[15px] leading-[15px]">
            <span
              onClick={() => setShowAgree((prev) => !prev)}
              className="ml-1 cursor-pointer underline"
            >
              Súhlasím so spracovaním údajov
            </span>
          </p>
        </div>
        {showAgree && (
          <p className="mt-4 text-[17.5px] leading-[17.5px] text-[#0376b7]">
            Poskytnuté údaje nebudú zdieľané tretím stranám.
          </p>
        )}

        <button
          type="submit"
          className="my-4 text-green-500 hover:rounded-xl hover:text-white"
        >
          Poslať
        </button>
      </form>
    </div>
  );
};

export default MailingList;
