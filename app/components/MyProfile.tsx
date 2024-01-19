'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyProfile = (myUser: any) => {
  console.log('myprof', myUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  console.log('email', email);

  useEffect(() => {
    if (myUser) {
      setName(myUser.myUser.name);
      setEmail(myUser.myUser.email);

      setIsAdmin(myUser.myUser.isAdmin);
    }
  }, [myUser]);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) return toast.error('Skontroluj heslá');
    const res = await axios.put(`/api/user/${email}`, {
      name,
      password,
      isAdmin,
    });

    console.log('edit', res);
  };

  return (
    <form
      onSubmit={handleEdit}
      className="flex w-[200px] flex-col gap-2 text-black"
    >
      <h1 className="my-4 text-yellow-500">Moj profil</h1>
      <label className="text-white">Meno</label>
      <input
        type="text"
        placeholder="Meno"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="pl-1"
      />

      <label className="text-white">Heslo</label>

      <input
        type="password"
        placeholder="Heslo"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="pl-1"
      />
      <label className="text-white">Opakovať heslo</label>

      <input
        type="password"
        placeholder="Opakovať heslo"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="pl-1"
      />

      <label className="text-white">Admin</label>

      <input
        type="text"
        placeholder="Admin"
        value={isAdmin ? 'ano' : 'nie'}
        onChange={() => {}}
        onClick={() => setIsAdmin((prev) => !prev)}
        className="pl-1"
      />
      <button type="submit" className="text-green-500">
        Editovať
      </button>
    </form>
  );
};

export default MyProfile;
