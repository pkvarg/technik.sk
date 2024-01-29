'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const getSubscribers = async () => {
      const res = await axios.get('api/subscribe');
      if (res) setSubscribers(res.data);
    };

    getSubscribers();
  }, [key]);

  const deleteSubscriber = async (id: string) => {
    try {
      const res = await axios.delete(`api/subscribe/${id}`);
      if (res.data === 'SUBSCRIBER DELETED') {
        setKey((prev) => prev + 1);
        toast.success('Vymazané');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1 className="py-8 text-center text-[25px] leading-[25px] text-green-500">
        Odoberatelia noviniek
      </h1>
      {subscribers &&
        subscribers.map((subscriber: any) => (
          <div
            key={subscriber?.id}
            className="flex flex-row items-center justify-between"
          >
            <p>{subscriber.email}</p>
            <p
              onClick={() => deleteSubscriber(subscriber.id)}
              className="cursor-pointer text-red-500"
            >
              <FaRegTrashAlt />
            </p>
          </div>
        ))}
    </div>
  );
};

export default Subscribers;
