'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('api/user', {
        name,
        email,
      });
      if (res.data === 'ok') {
        toast.success('Užívateľ vytvorený');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="my-4 bg-[#0d0e2f] text-white">
      <p className="text-center text-[25px] leading-[25px] text-yellow-500">
        Vytvoriť nového užívateľa
      </p>
      <form onSubmit={createUser} className="mt-2 flex w-[100%] flex-col gap-2">
        <input
          type="text"
          value={name}
          placeholder="meno"
          onChange={(e) => setName(e.target.value)}
          className="pl-1 text-blue-950"
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="pl-1 text-blue-950"
        />
        <button type="submit" className="cursor-pointer text-green-500">
          Vytvoriť
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
