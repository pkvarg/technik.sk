'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MailingList = () => {
  const [email, setEmail] = useState('');
  const [showAgree, setShowAgree] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribe = async (e: any) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    console.log('valid', isValid);
    if (!isValid) return toast.error('Zadajte platný email, prosím.');

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
    <div className="text- flex flex-col items-center justify-center bg-[#ffffff] p-4 text-[#050505] lg:p-16">
      <p className="hidden text-center text-[50px] font-extrabold uppercase md:flex">
        Ostaňme v kontakte
      </p>
      <p className="my-2 flex text-center text-[50px] font-extrabold uppercase leading-[50px] md:hidden">
        Ostaňme <br /> v kontakte
      </p>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mt-4 rounded-xl bg-[#4c230e] px-6 py-6 text-[25px] leading-[25px] text-yellow-300 lg:mt-8"
      >
        Prihlásiť sa k odberu pozvánok na koncerty
      </button>

      {showForm && (
        <form
          onSubmit={subscribe}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Zadajte svoj email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-8 w-[100%] border px-16 py-1 pl-1 text-[#0d0d0e] lg:w-[100%]"
          />

          <div className="mt-4 flex flex-row items-center justify-center gap-4 lg:gap-2">
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
            <p className="mt-4 text-[17.5px] leading-[17.5px] text-[#4c230e]">
              Údaje nezdieľame tretím stranám.
            </p>
          )}

          <button
            type="submit"
            className="mt-8 w-[50%] rounded-xl bg-[#4c230e] py-2  text-yellow-300 hover:rounded-xl "
          >
            Poslať
          </button>
        </form>
      )}
    </div>
  );
};

export default MailingList;
