'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showAgree, setShowAgree] = useState(false);

  const x = process.env.NEXT_PUBLIC_EMAIL_EXTRA_ONE;
  const y = process.env.NEXT_PUBLIC_EMAIL_EXTRA_TWO;
  const [passwordGroupOne, setPasswordGroupOne] = useState(x);
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log('subbbbb');
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Nastala chyba.');
    } else {
      try {
        console.log('..email is sending..');
        const { data } = await axios.put(
          `https://tss.pictusweb.com/technik/contact`,
          //`http://localhost:3010/technik/contact`,
          {
            name,
            email,
            phone,
            message,
          },
        );

        if (data === 'Success') toast.success('Správa úspešne odoslaná');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } catch (error: any) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="relative bg-[#050505] text-yellow-500">
      <div className="">
        <Navbar />
      </div>
      <div className="z-10 flex-1 text-[14px]">
        <h1 className="text-center text-[30px] font-bold">Kontaktujte nás</h1>
        <div className="mx-4 pt-2  lg:mx-[32.5%] lg:py-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Meno
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px] text-[20px] text-[#050505]"
                required
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Email
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px] text-[20px] text-[#050505]"
                required
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Telefón
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px] text-[20px] text-[#050505]"
                required
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="py-2 font-bold">
                Vaša správa
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-[100px] border border-gray-300 pl-[5px] text-[20px] text-[#050505] lg:h-[130px]"
                rows={10}
              ></textarea>
            </div>
            <div className="mt-4 flex flex-row items-center gap-4 lg:gap-2">
              <input type="checkbox" required />
              <p className="text-[15px] leading-[15px]">
                Pred odoslaním musíte súhlasiť so
                <span
                  onClick={() => setShowAgree((prev) => !prev)}
                  className="ml-1 cursor-pointer underline"
                >
                  spracovaním osobných údajov
                </span>
              </p>
              {showAgree && (
                <p className="text-[17.5px] leading-[17.5px] text-[#ffffff]">
                  Poskytnuté údaje nebudú zdieľané tretím stranám.
                </p>
              )}
            </div>

            <input
              className="form-control"
              type="text"
              defaultValue={passwordGroupOne}
              onChange={(e) => setPasswordGroupOne(e.target.value)}
            />
            <input
              className="form-control"
              type="text"
              defaultValue={passwordGroupTwo}
              onChange={(e) => setPasswordGroupTwo(e.target.value)}
            />

            <button
              type="submit"
              className="my-8 w-[100%] rounded-[25px] border-2 border-yellow-500 pb-2.5 pt-3 text-yellow-500 hover:bg-yellow-500 hover:text-white lg:w-[25%] lg:pb-2"
            >
              Odoslať
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
