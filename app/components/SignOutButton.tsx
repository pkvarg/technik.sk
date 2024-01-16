'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <div className="">
      <button
        onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
        className="cursor-pointer text-red-500"
      >
        Odhlásiť sa
      </button>
    </div>
  );
};

export default SignOutButton;
