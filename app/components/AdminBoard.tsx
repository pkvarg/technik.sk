'use client';
import React, { useEffect, useState } from 'react';
import SignOutButton from '../components/SignOutButton';
import CreateUserForm from '../components/CreateUserForm';
import Subscribers from './Subscribers';

const AdminBoard = (name: any) => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showSubscribers, setShowSubscribers] = useState(false);

  useEffect(() => {
    if (showCreateUser) setShowSubscribers(false);
    if (showSubscribers) setShowCreateUser(false);
  }, [showCreateUser, showSubscribers]);

  return (
    <div className="relative h-screen">
      <div className="flex w-[20%] flex-col gap-1 bg-gray-600 p-1 text-green-500">
        <h1 className="text-white">Ahoj {name.name}</h1>
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
        <SignOutButton />
      </div>

      {showCreateUser && (
        <div className="absolute right-[33%]">
          <CreateUserForm />
        </div>
      )}

      {showSubscribers && (
        <div className="absolute right-[33%]">
          <Subscribers />
        </div>
      )}
    </div>
  );
};

export default AdminBoard;
