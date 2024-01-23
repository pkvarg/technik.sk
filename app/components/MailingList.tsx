'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MailingList = () => {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    const res = await axios.put('api/subscribe', {
      email,
    });
    console.log(res.data);
    if (res?.data) {
      toast.success('Ďakujeme!');
    } else {
      toast.error('Nastala chyba. Napíšte nám email, prosím.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-16 text-green-500">
      <p className="text-[25px]">
        Prihláste sa k odoberaniu pozvánok na naše koncerty
      </p>
      <input
        type="text"
        placeholder="Zadajte svoj email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-8 w-[100%] py-1 pl-1 text-[#0d0d0e] lg:w-[25%]"
      />
      <button
        onClick={subscribe}
        className="my-4 hover:rounded-xl hover:text-white"
      >
        Poslať
      </button>
    </div>
  );
};

export default MailingList;
