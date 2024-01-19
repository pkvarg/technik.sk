'use client';
import React, { useEffect, useState } from 'react';
import SignOutButton from '../components/SignOutButton';
import CreateUserForm from '../components/CreateUserForm';
import Subscribers from './Subscribers';
import MyProfile from './MyProfile';
import axios from 'axios';

const AdminBoard = (user: any) => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showSubscribers, setShowSubscribers] = useState(false);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [myUser, setMyUser] = useState({});

  const email = user.user.email.toString();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`api/user/${email}`);

      if (res) {
        console.log('res', res.data);
        setMyUser(res.data);
      }
    };
    getUser();
  }, []);

  return (
    <div className="relative h-screen">
      <div className="flex w-[20%] flex-col gap-1 bg-gray-600 p-1 text-green-500">
        <h1 className="text-[25px] text-white">
          Ahoj
          <span className="pl-2  text-yellow-500">{user.user.name}</span>
        </h1>
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
        <SignOutButton />
      </div>

      {showCreateUser && (
        <div className="absolute right-[33%]">
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
        <div className="absolute right-[33%]">
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
        <div className="absolute right-[33%]">
          <p
            onClick={() => setShowMyProfile(false)}
            className="float-right cursor-pointer text-red-500"
          >
            X
          </p>
          <MyProfile myUser={myUser} />
        </div>
      )}
    </div>
  );
};

export default AdminBoard;
