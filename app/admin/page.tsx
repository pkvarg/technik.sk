'use client';
import React, { useState } from 'react';
import axios from 'axios';

const page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async (e: any) => {
    e.preventDefault();
    const res = await axios.put('api/user', {
      name,
      email,
    });
    console.log(res);
  };

  return (
    <div className="h-[100vh] bg-black text-white">
      <p>Create user</p>
      <form onSubmit={createUser} className="flex w-[25%] flex-col gap-2">
        <input
          type="text"
          value={name}
          placeholder="name"
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
          Create
        </button>
      </form>
    </div>
  );
};

export default page;
