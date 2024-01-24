'use client';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ConcourseFull from '../components/actual/ConcourseFull';

const Actual = () => {
  useEffect(() => {
    const { pathname } = window.location;
    const hash = window.location.hash;

    if (pathname === '/actual' && window.location.hash) {
      const id = hash.substring(1); // Remove the "#" symbol from the hash
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pathname === '/actual' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <div id="concourse"></div>
      <h1 className="pb-16 pt-4 text-center text-[30px] text-yellow-500">
        Aktuálne
      </h1>
      <div>
        <ConcourseFull />
      </div>
    </div>
  );
};

export default Actual;
