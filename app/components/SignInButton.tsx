'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
  return (
    <div className="">
      <button
        onClick={() =>
          signIn('Credentials', {
            redirect: false,
            callbackUrl: `${window.location.origin}/admin`,
          })
        }
        className="cursor-pointer text-green-500"
      >
        Login
      </button>
    </div>
  );
};

export default SignInButton;
