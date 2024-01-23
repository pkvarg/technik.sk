'use client';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdDeleteOutline } from 'react-icons/md';

interface MyProfileProps {
  myUser: any;
  amIroot: boolean;
  setKey: any;
}

const MyProfile: React.FC<MyProfileProps> = ({ myUser, amIroot, setKey }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (myUser) {
      setName(myUser.name);
      setEmail(myUser.email);
      setIsAdmin(myUser.isAdmin);
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
    if (res.statusText === 'OK') {
      setKey((prev: number) => prev + 1);
      toast.success('Užívateľ upravený');
    }
  };

  const handleDelete = async () => {
    let result = confirm('Naozaj?');
    if (result) {
      const res = await axios.delete(`api/user/${email}`);
      if (res.data === 'USER DELETED') {
        toast.success('Užívateľ zmazaný');
        setKey((prev: number) => prev + 1);
      }
    } else {
      // User clicked "Cancel"
      // Handle the cancellation
    }
  };

  return (
    <form
      onSubmit={handleEdit}
      className="flex w-[200px] flex-col gap-2 text-black"
    >
      <h1 className="my-4 text-center text-[25px] leading-[25px] text-yellow-500">
        Profil
        {/* <span className="ml-2 text-[18px] text-green-500">{email}</span> */}
      </h1>
      <div className="flex flex-row justify-between">
        <label className="text-white">Meno</label>
        {amIroot && (
          <MdDeleteOutline
            onClick={() => handleDelete()}
            className="mb-1 cursor-pointer text-[20px] text-red-500"
          />
        )}
      </div>

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
