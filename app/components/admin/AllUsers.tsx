'use client';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import MyProfile from '../MyProfile';
import axios from 'axios';
import toast from 'react-hot-toast';

interface AllUsersProps {
  allUsers: any;
  amIroot: boolean;
  setKey: any;
}

const AllUsers: React.FC<AllUsersProps> = ({ allUsers, amIroot, setKey }) => {
  const [showUser, setShowUser] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const showTheUser = async (user: any) => {
    setEditedUser(user);
    setShowUser(true);
  };

  return (
    <div>
      <h1 className="my-4 text-center text-[25px] leading-[25px] text-yellow-500">
        Užívatelia
      </h1>
      {allUsers &&
        allUsers.map((user: any) => (
          <div
            key={user.id}
            className="flex flex-row items-center justify-between gap-1"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <FiEdit
              onClick={() => showTheUser(user)}
              className="mb-1 cursor-pointer text-yellow-500"
            />
          </div>
        ))}
      <div className="mt-8">
        {showUser && editedUser && (
          <MyProfile myUser={editedUser} amIroot={amIroot} setKey={setKey} />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
