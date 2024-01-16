'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const getSubscribers = async () => {
      const res = await axios.get('api/subscribe');
      if (res) setSubscribers(res.data);
    };

    getSubscribers();
  }, []);

  console.log('subs', subscribers);

  return (
    <div>
      <h1 className="text-green-500">Odoberatelia noviniek</h1>
      {subscribers &&
        subscribers.map((subscriber: any) => (
          <p key={subscriber?.id}>{subscriber.email}</p>
        ))}
    </div>
  );
};

export default Subscribers;
