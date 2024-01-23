'use client';
import React, { useEffect, useState } from 'react';
import SignOutButton from '../components/SignOutButton';
import CreateUserForm from '../components/CreateUserForm';
import Subscribers from './Subscribers';
import MyProfile from './MyProfile';
import AllUsers from './admin/AllUsers';
import axios from 'axios';
import Link from 'next/link';

const AdminBoard = (user: any) => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showSubscribers, setShowSubscribers] = useState(false);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [myUser, setMyUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [amIroot, setAmIroot] = useState(false);
  const [key, setKey] = useState(0);

  const email = user.user.email.toString();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`api/user/${email}`);

      if (res) {
        setMyUser(res.data);
        if (res.data.isRoot) setAmIroot(true);
      }
    };
    getUser();
  }, [key]);

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await axios.get(`api/user/all`);

      if (res) {
        setAllUsers(res.data);
      }
    };
    getAllUsers();
  }, [key]);

  useEffect(() => {
    setShowAllUsers(false);
    setShowMyProfile(false);
  }, [key]);

  return (
    <div className="relative h-screen">
      <div className="flex w-[100%] flex-col gap-1 bg-gray-600 p-1 text-green-500 lg:w-[20%]">
        <h1 className="text-[25px] text-white">
          Ahoj
          <span className="pl-2  text-yellow-500">{user.user.name}</span>
        </h1>
        <Link href={'/'} className="cursor-pointer text-white">
          Domov
        </Link>
        <p
          onClick={() => setShowCreateUser((prev) => !prev)}
          className="cursor-pointer"
        >
          Nový užívateľ
        </p>

        <p
          onClick={() => setShowSubscribers((prev) => !prev)}
          className="cursor-pointer"
        >
          Odoberatelia noviniek{' '}
        </p>
        <p
          onClick={() => setShowMyProfile((prev) => !prev)}
          className="cursor-pointer"
        >
          Môj profil{' '}
        </p>
        {amIroot && (
          <p
            onClick={() => setShowAllUsers((prev) => !prev)}
            className="cursor-pointer text-blue-100"
          >
            Užívatelia{' '}
          </p>
        )}
        <SignOutButton />
      </div>

      {showCreateUser && (
        <div className="absolute right-[15%] lg:right-[33%]">
          <p
            onClick={() => setShowCreateUser(false)}
            className="float-right cursor-pointer text-red-500"
          >
            X
          </p>
          <CreateUserForm />
        </div>
      )}

      {showSubscribers && (
        <div className="absolute right-[15%] lg:right-[33%]">
          <p
            onClick={() => setShowSubscribers(false)}
            className="float-right cursor-pointer text-red-500"
          >
            X
          </p>
          <Subscribers />
        </div>
      )}

      {showMyProfile && (
        <div className="absolute right-[19.5%] lg:right-[33%]">
          <p
            onClick={() => setShowMyProfile(false)}
            className="float-right cursor-pointer text-red-500"
          >
            X
          </p>
          <MyProfile myUser={myUser} amIroot={amIroot} setKey={setKey} />
        </div>
      )}
      {showAllUsers && (
        <div className="absolute right-[15%] lg:right-[33%]">
          <p
            onClick={() => setShowAllUsers(false)}
            className="float-right cursor-pointer text-red-500"
          >
            X
          </p>
          <AllUsers allUsers={allUsers} amIroot={amIroot} setKey={setKey} />
        </div>
      )}
    </div>
  );
};

export default AdminBoard;
